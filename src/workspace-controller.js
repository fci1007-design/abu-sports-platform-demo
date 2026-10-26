import {currentExpertId} from './core.js';
import {EXPERT_TOOLS} from './catalog.js';
import {workspaceExpertId,workspaceThreads,workspaceThread,markWorkspaceRead,updateWorkspaceMember,createWorkspaceThread,sendWorkspaceMessage,setWorkspaceThreadStatus,createWorkspaceAnnouncement,recordWorkspaceToolUse} from './workspace-core.js';
import {renderWorkspacePage,renderMemberInbox,memberProfileMarkup,questionFormMarkup,announcementFormMarkup} from './workspace-ui.js';
import {toggleWithdrawnContent} from './content.js';

// Only demo presentation state lives here. Access and mutation rules stay in
// workspace-core; the live state getter survives demo resets/scenario changes.
export function createWorkspaceController({getState,allPosts,findPost,persist,render,openModal,closeModal,toast,go}){
  let tab='content',query='',status='all',threadFilter='all',contentFilter='all',expertThread='',memberThread='';
  const s=()=>getState();
  const actor=()=>s().persona==='expert'?{role:'expert',expertId:currentExpertId(s())}:s().persona==='member'?{role:'member',memberId:'you'}:{role:'guest'};
  const draftKey=id=>{const a=actor();return `${a.role}:${a.expertId||a.memberId||''}:${id}`;};
  const error=result=>{if(result.ok)return false;const box=document.querySelector('.workspace-form-error');if(box)box.textContent=result.error;toast(result.error||'無法完成這個示範操作');return true;};
  function studio(){const expertId=currentExpertId(s()),list=workspaceThreads(s().workspace,actor()).filter(t=>threadFilter==='all'||t.status===threadFilter);if(!list.some(t=>t.id===expertThread))expertThread='';return renderWorkspacePage({persona:s().persona,expertId,data:s().workspace,tab,query,status,threadId:expertThread,threadFilter,contentFilter,content:{posts:allPosts(true).filter(p=>p.author===expertId),drafts:s().drafts.filter(d=>d.author===expertId),hidden:s().hidden,withdrawn:s().withdrawn,history:s().contentHistory.filter(h=>h.author===expertId)}});}
  function inbox(expertId=''){if(!workspaceThreads(s().workspace,actor()).some(t=>t.id===memberThread&&(!expertId||t.expertId===expertId)))memberThread='';return renderMemberInbox({persona:s().persona,data:s().workspace,expertId,threadId:memberThread});}
  function hydrate(){const form=document.querySelector('#workspace-message-form');if(form){form.elements.message.value=s().workspaceMessageDrafts[draftKey(form.dataset.id)]||'';const messages=document.querySelector('.workspace-messages');if(messages)messages.scrollTop=messages.scrollHeight;}}
  function modal(type,data){
    if(type==='ws-member')return {title:'會員服務註記',body:memberProfileMarkup(s().workspace,actor(),data.id)};
    if(type==='ws-question')return {title:'向專家提問',body:questionFormMarkup(s().workspace,actor(),data.expertId,data.toolId,{...s().workspaceQuestionDraft,...(data.expertId?{expertId:data.expertId}:{}),...(data.toolId?{toolId:data.toolId,topic:'工具問題'}:{}),...(data.matchId?{matchId:data.matchId}:{}),...(data.lessonId?{lessonId:data.lessonId,topic:'教學提問'}:{})})};
    if(type==='ws-announcement')return {title:'發布服務公告',body:announcementFormMarkup()};
    return null;
  }
  function click(action,target){const id=target.dataset.id,value=target.dataset.value;
    if(!action.startsWith('ws-'))return false;
    if(action==='ws-tab'){tab=value;render({keepScroll:true});}
    if(action==='ws-member'&&actor().role==='expert')openModal('ws-member',{id});
    if(action==='ws-thread'){if(workspaceThread(s().workspace,actor(),id)){if(actor().role==='expert')expertThread=id;else memberThread=id;markWorkspaceRead(s().workspace,actor(),id);persist();render({keepScroll:true});document.querySelector('.workspace-thread')?.scrollIntoView({block:'nearest'});}}
    if(action==='ws-new-question'){if(actor().role!=='member'){go('/inbox');return true;}const params=new URLSearchParams(location.hash.split('?')[1]||'');openModal('ws-question',{expertId:target.dataset.expert||'',toolId:params.get('tool')||'',matchId:params.get('match')||'',lessonId:params.get('lesson')||''});}
    if(action==='ws-announcement'&&actor().role==='expert')openModal('ws-announcement');
    if(action==='ws-thread-status'){if(setWorkspaceThreadStatus(s().workspace,actor(),id,value)){persist();render({keepScroll:true});}}
    if(action==='ws-withdraw'){if(actor().role!=='expert')return true;const result=toggleWithdrawnContent(s(),findPost(id),currentExpertId(s()));if(!error(result)){persist();render({keepScroll:true});toast(result.restored?'已重新發布':'已撤回，工作台仍可編輯');}}
    return true;
  }
  function submit(form){if(!form.id.startsWith('workspace-'))return false;const input=Object.fromEntries(new FormData(form));
    if(form.id==='workspace-member-filter'){query=String(input.query||'').trim();status=input.status;render({keepScroll:true});return true;}
    if(form.id==='workspace-member-form'){const result=updateWorkspaceMember(s().workspace,actor(),form.dataset.id,input);if(!error(result)){persist();closeModal();render({keepScroll:true});toast('已儲存這位專家的會員註記');}return true;}
    if(form.id==='workspace-question-form'){const result=createWorkspaceThread(s().workspace,actor(),input);if(!error(result)){memberThread=result.id;s().workspaceQuestionDraft={};persist();closeModal();go('/inbox/'+input.expertId);render({keepScroll:true});toast('已建立本機示範提問');}return true;}
    if(form.id==='workspace-message-form'){const result=sendWorkspaceMessage(s().workspace,actor(),form.dataset.id,input.message);if(!error(result)){delete s().workspaceMessageDrafts[draftKey(form.dataset.id)];persist();render({keepScroll:true});toast(actor().role==='expert'?'已加入示範回覆':'已加入示範訊息');}return true;}
    if(form.id==='workspace-announcement-form'){const result=createWorkspaceAnnouncement(s().workspace,actor(),input);if(!error(result)){persist();closeModal();render({keepScroll:true});toast('已發布本機服務公告');}return true;}
    return true;
  }
  function input(target){const form=target.closest('form');if(form?.id==='workspace-message-form'&&workspaceThread(s().workspace,actor(),form.dataset.id)){s().workspaceMessageDrafts[draftKey(form.dataset.id)]=form.elements.message.value;persist();}
    if(form?.id==='workspace-question-form'){s().workspaceQuestionDraft=Object.fromEntries(new FormData(form));persist();}}
  function change(target){
    if(target.id==='workspace-expert'&&actor().role==='expert'){s().activeExpertId=workspaceExpertId(target.value);expertThread='';persist();render({keepScroll:true});return true;}
    if(target.id==='workspace-thread-filter'){threadFilter=target.value;render({keepScroll:true});return true;}
    if(target.id==='workspace-content-filter'){contentFilter=target.value;render({keepScroll:true});return true;}
    if(target.closest('#workspace-question-form')){const form=target.form;if(target.name==='expertId'){for(const option of form.elements.toolId.options)option.disabled=Boolean(option.value&&!EXPERT_TOOLS.some(t=>t.id===option.value&&t.expert===target.value));if(form.elements.toolId.selectedOptions[0]?.disabled)form.elements.toolId.value='';}input(target);}
    return false;
  }
  function toolUse(toolId,matchId){if(recordWorkspaceToolUse(s().workspace,actor(),toolId,matchId))persist();}
  return {studio,inbox,hydrate,modal,click,submit,input,change,toolUse};
}
