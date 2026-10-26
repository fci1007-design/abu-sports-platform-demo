import {initialWorkspace,restoreWorkspace,workspaceExpertId} from './workspace-core.js';

export const STORAGE_KEY = 'courtside-demo-v1';
export const currentExpertId = state => workspaceExpertId(state.activeExpertId);
export const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function estimateMarket({home, away, offer, quality = 'fresh', sameLine = true}) {
  if (quality !== 'fresh' || !sameLine) return null;
  if (![home, away, offer].every(n => typeof n === 'number' && Number.isFinite(n) && n > 1)) return null;
  const total = 1 / home + 1 / away;
  const probability = (1 / home) / total;
  return {probability, overround: total - 1, ev: probability * offer - 1};
}

export function canRead(post, state) {
  if (!post.premium) return true;
  if (state.persona === 'expert' && post.author === currentExpertId(state)) return true;
  if (state.persona === 'guest') return false;
  if (state.scenario === 'expert') return state.entitlements.includes(`expert:${post.author}`);
  return Boolean(post.vipEligible && state.entitlements.includes('vip'));
}

export function changeScenario(state, scenario) {
  if (!['expert', 'vip'].includes(scenario)) return state;
  if (scenario === state.scenario) return state;
  return {...state, scenario, entitlements: []};
}

export function initialState() {
  return {version:1, persona:'guest',activeExpertId:'abu',workspace:initialWorkspace(),workspaceMessageDrafts:{},workspaceQuestionDraft:{},withdrawn:[],contentHistory:[], scenario:'expert', entitlements:[], follows:[], watched:[], liked:[], saved:[], comments:{}, customPosts:[], drafts:[], reports:[], hidden:[], composerBuffers:{}, notified:true};
}

export function restoreState(value) {
  const fallback = initialState();
  if (!value || value.version !== 1) return fallback;
  for (const key of ['entitlements','follows','watched','liked','saved','customPosts','drafts','reports','hidden','withdrawn','contentHistory']) {
    if (Array.isArray(value[key])) fallback[key] = value[key];
  }
  if (['guest','member','expert','admin'].includes(value.persona)) fallback.persona = value.persona;
  if (['expert','vip'].includes(value.scenario)) fallback.scenario = value.scenario;
  if (value.comments && typeof value.comments === 'object' && !Array.isArray(value.comments)) fallback.comments = value.comments;
  if (value.composerBuffers && typeof value.composerBuffers === 'object' && !Array.isArray(value.composerBuffers)) fallback.composerBuffers = value.composerBuffers;
  fallback.activeExpertId=currentExpertId(value);
  fallback.workspace=restoreWorkspace(value.workspace);
  if(value.workspaceMessageDrafts&&typeof value.workspaceMessageDrafts==='object')fallback.workspaceMessageDrafts=Object.fromEntries(Object.entries(value.workspaceMessageDrafts).filter(([k,v])=>k.length<150&&typeof v==='string').map(([k,v])=>[k,v.slice(0,2000)]));
  if(value.workspaceQuestionDraft&&typeof value.workspaceQuestionDraft==='object')fallback.workspaceQuestionDraft=Object.fromEntries(Object.entries(value.workspaceQuestionDraft).filter(([k,v])=>['expertId','toolId','matchId','lessonId','topic','subject','text'].includes(k)&&typeof v==='string').map(([k,v])=>[k,v.slice(0,2000)]));
  fallback.notified = value.notified !== false;
  return fallback;
}
