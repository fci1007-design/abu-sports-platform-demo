import {experts,lessons} from './data.js';
import {EXPERT_TOOLS} from './catalog.js';
import {DEMO_CONTACTS,DEMO_RELATIONS,DEMO_THREADS,DEMO_ANNOUNCEMENTS} from './workspace-data.js';

const wsClone=value=>JSON.parse(JSON.stringify(value));
const wsExpert=id=>experts.some(x=>x.id===id&&id!=='fan');
const wsMember=id=>DEMO_CONTACTS.some(x=>x.id===id);
const wsLesson=id=>lessons.some(l=>l.id===id);
const wsText=(value,max)=>typeof value==='string'?value.trim().slice(0,max):'';
const wsTime=value=>typeof value==='string'&&Number.isFinite(Date.parse(value))?value:'2026-10-26T00:00:00Z';
export const workspaceExpertId=value=>wsExpert(value)?value:'abu';
export function initialWorkspace(){return {version:1,sequence:1000,relations:wsClone(DEMO_RELATIONS),threads:wsClone(DEMO_THREADS),announcements:wsClone(DEMO_ANNOUNCEMENTS),usage:[]};}
export function restoreWorkspace(value){
  const fallback=initialWorkspace();if(!value||value.version!==1)return fallback;
  const result={version:1,sequence:Number.isSafeInteger(value.sequence)&&value.sequence>=1000?value.sequence:1000,relations:[],threads:[],announcements:[],usage:[]};
  const keys=new Set();
  for(const r of Array.isArray(value.relations)?value.relations:DEMO_RELATIONS){if(!r||!wsExpert(r.expertId)||!wsMember(r.memberId)||keys.has(r.expertId+':'+r.memberId))continue;keys.add(r.expertId+':'+r.memberId);result.relations.push({expertId:r.expertId,memberId:r.memberId,status:r.status==='paused'?'paused':'active',tags:[...new Set((Array.isArray(r.tags)?r.tags:[]).map(x=>wsText(x,24)).filter(Boolean))].slice(0,8),note:wsText(r.note,1000),joinedAt:wsText(r.joinedAt,20)});}
  const ids=new Set();
  for(const t of Array.isArray(value.threads)?value.threads:DEMO_THREADS){if(!t||!wsExpert(t.expertId)||!wsMember(t.memberId)||typeof t.id!=='string'||ids.has(t.id)||!result.relations.some(r=>r.expertId===t.expertId&&r.memberId===t.memberId))continue;ids.add(t.id);const messages=(Array.isArray(t.messages)?t.messages:[]).filter(m=>m&&((m.role==='expert'&&m.authorId===t.expertId)||(m.role==='member'&&m.authorId===t.memberId))&&typeof m.text==='string').map(m=>({id:wsText(m.id,100),role:m.role,authorId:m.authorId,text:wsText(m.text,2000),at:wsTime(m.at)}));const cursor=role=>Math.min(messages.length,Math.max(0,Number.isSafeInteger(t.read?.[role])?t.read[role]:0));result.threads.push({id:t.id,expertId:t.expertId,memberId:t.memberId,subject:wsText(t.subject,100),topic:wsText(t.topic,30),toolId:EXPERT_TOOLS.some(x=>x.id===t.toolId&&x.expert===t.expertId)?t.toolId:'',matchId:wsText(t.matchId,30),lessonId:wsLesson(t.lessonId)?t.lessonId:'',status:t.status==='answered'?'answered':'pending',read:{expert:cursor('expert'),member:cursor('member')},messages});}
  for(const a of Array.isArray(value.announcements)?value.announcements:DEMO_ANNOUNCEMENTS)if(a&&wsExpert(a.expertId)&&typeof a.id==='string')result.announcements.push({id:a.id,expertId:a.expertId,title:wsText(a.title,100),body:wsText(a.body,2000),at:wsTime(a.at)});
  for(const u of Array.isArray(value.usage)?value.usage:[])if(u&&wsMember(u.memberId)&&EXPERT_TOOLS.some(t=>t.id===u.toolId&&t.expert===u.expertId))result.usage.push({id:wsText(u.id,100),expertId:u.expertId,memberId:u.memberId,toolId:u.toolId,matchId:wsText(u.matchId,30),at:wsTime(u.at)});
  const numericIds=[...result.threads.flatMap(t=>[t.id,...t.messages.map(m=>m.id)]),...result.announcements.map(a=>a.id),...result.usage.map(u=>u.id)].map(id=>Number(id.match(/^(?:q|msg|a|u)-(\d+)$/)?.[1]||0));
  result.sequence=Math.max(result.sequence,...numericIds.filter(Number.isSafeInteger));
  return result;
}
const expertActor=actor=>actor?.role==='expert'&&wsExpert(actor.expertId);
const memberActor=actor=>actor?.role==='member'&&wsMember(actor.memberId);
const relation=(data,e,m)=>data.relations.find(r=>r.expertId===e&&r.memberId===m);
const threadAllowed=(thread,actor)=>thread&&(expertActor(actor)?thread.expertId===actor.expertId:memberActor(actor)&&thread.memberId===actor.memberId);
export function workspaceMembers(data,actor){return expertActor(actor)?data.relations.filter(r=>r.expertId===actor.expertId).map(r=>({...wsClone(r),...DEMO_CONTACTS.find(m=>m.id===r.memberId)})):[];}
export function memberServices(data,actor){return memberActor(actor)?data.relations.filter(r=>r.memberId===actor.memberId).map(({expertId,memberId,status,joinedAt})=>({expertId,memberId,status,joinedAt})):[];}
export function workspaceThreads(data,actor){return wsClone(data.threads.filter(t=>threadAllowed(t,actor)));}
export function workspaceThread(data,actor,id){const t=data.threads.find(t=>t.id===id);return threadAllowed(t,actor)?wsClone(t):null;}
export function workspaceUnread(thread,actor){if(!threadAllowed(thread,actor))return 0;return thread.messages.slice(thread.read?.[actor.role]||0).filter(m=>m.role!==actor.role).length;}
export function markWorkspaceRead(data,actor,id){const t=data.threads.find(t=>t.id===id);if(!threadAllowed(t,actor))return false;t.read[actor.role]=t.messages.length;return true;}
export function updateWorkspaceMember(data,actor,memberId,input){if(!expertActor(actor))return {ok:false,error:'請使用專家示範身分。'};const r=relation(data,actor.expertId,memberId);if(!r)return {ok:false,error:'這位會員不在目前的專家工作區。'};if(!['active','paused'].includes(input.status))return {ok:false,error:'互動狀態無效。'};r.status=input.status;r.tags=[...new Set(String(input.tags||'').split(/[、,，]/).map(x=>x.trim().slice(0,24)).filter(Boolean))].slice(0,8);r.note=wsText(input.note,1000);return {ok:true};}
export function createWorkspaceThread(data,actor,input,now=new Date().toISOString()){
  if(!memberActor(actor))return {ok:false,error:'請以一般會員示範身分提問。'};const r=relation(data,input.expertId,actor.memberId);if(!r||r.status!=='active')return {ok:false,error:'目前沒有可互動的示範關係。'};const subject=wsText(input.subject,100),text=wsText(input.text,2000);if(!subject||!text)return {ok:false,error:'請填寫問題標題與內容。'};
  if(input.lessonId&&!wsLesson(input.lessonId))return {ok:false,error:'找不到這篇教學，請重新選擇或不指定教學。'};
  const tool=EXPERT_TOOLS.find(t=>t.id===input.toolId&&t.expert===input.expertId);if(input.toolId&&!tool)return {ok:false,error:'這項工具不屬於選取的專家，請調整對象或選擇不指定工具。'};const id='q-'+(++data.sequence);data.threads.unshift({id,expertId:input.expertId,memberId:actor.memberId,subject,topic:wsText(input.topic,30)||'一般交流',toolId:tool?.id||'',matchId:wsText(input.matchId,30),lessonId:wsLesson(input.lessonId)?input.lessonId:'',status:'pending',read:{expert:0,member:1},messages:[{id:'msg-'+(++data.sequence),role:'member',authorId:actor.memberId,text,at:now}]});return {ok:true,id};
}
export function sendWorkspaceMessage(data,actor,id,text,now=new Date().toISOString()){
  const t=data.threads.find(t=>t.id===id);if(!threadAllowed(t,actor))return {ok:false,error:'無法存取這組互動。'};if(relation(data,t.expertId,t.memberId)?.status!=='active')return {ok:false,error:'此組示範互動已暫停，紀錄仍可閱讀。'};const body=wsText(text,2000);if(!body)return {ok:false,error:'請先填寫訊息。'};t.messages.push({id:'msg-'+(++data.sequence),role:actor.role,authorId:actor.role==='expert'?actor.expertId:actor.memberId,text:body,at:now});t.read[actor.role]=t.messages.length;t.status=actor.role==='expert'?'answered':'pending';return {ok:true};
}
export function setWorkspaceThreadStatus(data,actor,id,status){const t=data.threads.find(t=>t.id===id);if(!expertActor(actor)||!threadAllowed(t,actor)||!['pending','answered'].includes(status))return false;t.status=status;return true;}
export function workspaceAnnouncements(data,actor){if(expertActor(actor))return wsClone(data.announcements.filter(a=>a.expertId===actor.expertId));if(!memberActor(actor))return [];const allowed=data.relations.filter(r=>r.memberId===actor.memberId&&r.status==='active').map(r=>r.expertId);return wsClone(data.announcements.filter(a=>allowed.includes(a.expertId)));}
export function createWorkspaceAnnouncement(data,actor,input,now=new Date().toISOString()){if(!expertActor(actor))return {ok:false,error:'請使用專家示範身分。'};const title=wsText(input.title,100),body=wsText(input.body,2000);if(!title||!body)return {ok:false,error:'請填寫公告標題與內容。'};data.announcements.unshift({id:'a-'+(++data.sequence),expertId:actor.expertId,title,body,at:now});return {ok:true};}
export function recordWorkspaceToolUse(data,actor,toolId,matchId,now=new Date().toISOString()){const tool=EXPERT_TOOLS.find(t=>t.id===toolId);if(!memberActor(actor)||!tool||!relation(data,tool.expert,actor.memberId))return false;data.usage.unshift({id:'u-'+(++data.sequence),memberId:actor.memberId,expertId:tool.expert,toolId,matchId:wsText(matchId,30),at:now});data.usage=data.usage.slice(0,200);return true;}
export function workspaceUsage(data,actor){return expertActor(actor)?wsClone(data.usage.filter(u=>u.expertId===actor.expertId)):memberActor(actor)?wsClone(data.usage.filter(u=>u.memberId===actor.memberId)):[];}
