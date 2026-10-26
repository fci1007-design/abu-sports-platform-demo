import {escapeHtml} from './core.js';
import {posts} from './data.js';

export const CONTENT_KINDS=[{id:'discussion',label:'社群貼文',member:true},{id:'column',label:'專欄文章'},{id:'analysis',label:'專家分析'},{id:'lesson',label:'教學筆記'},{id:'report',label:'工具報告'},{id:'announcement',label:'公告'}];
export function allowedContentKinds(persona){return CONTENT_KINDS.filter(k=>persona==='expert'||k.member);}
export function normalizeContentKind(value,persona){const id=value||(persona==='expert'?'analysis':'discussion');return allowedContentKinds(persona).some(k=>k.id===id)?id:null;}
export function contentKindForPost(post){if(CONTENT_KINDS.some(k=>k.id===post.contentKind))return post.contentKind;return post.type==='會員討論'?'discussion':post.type==='公開資訊'?'column':'analysis';}
export function contentKindLabel(post){return CONTENT_KINDS.find(k=>k.id===contentKindForPost(post))?.label||'社群貼文';}
export function publicationStatus(post,{hidden=[],withdrawn=[]}={}){return hidden.includes(post.id)?'hidden':withdrawn.includes(post.id)?'withdrawn':'published';}
export function matchesContentFilter(post,value){if(value==='全部')return true;if(value==='影片內容')return Boolean(parseYouTubeUrl(post.videoUrl));if(['公開資訊','會員討論','專家分析','獨家分析'].includes(value))return post.type===value;return contentKindLabel(post)===value;}
export function commitPublishedContent(state,post,actorId,now=new Date().toISOString()){
  if(!post||post.author!==actorId)return {ok:false,error:'不能發布其他作者的內容。'};
  const old=state.customPosts.find(p=>p.id===post.id)||posts.find(p=>p.id===post.id);if(old&&old.author!==actorId)return {ok:false,error:'不能修改其他作者的內容。'};
  state.customPosts=state.customPosts.filter(p=>p.id!==post.id);state.customPosts.unshift(post);
  state.contentHistory=Array.isArray(state.contentHistory)?state.contentHistory:[];state.contentHistory.unshift({postId:post.id,author:actorId,action:old?'更新內容':'發布內容',at:now,title:post.title});state.contentHistory=state.contentHistory.slice(0,200);
  // Editing is not moderation approval. In particular, never remove state.hidden.
  return {ok:true};
}
export function toggleWithdrawnContent(state,post,actorId,now=new Date().toISOString()){
  if(!post||post.author!==actorId||state.hidden.includes(post.id))return {ok:false,error:'不能撤回其他作者或恢復管理下架的內容。'};
  state.withdrawn=Array.isArray(state.withdrawn)?state.withdrawn:[];const restore=state.withdrawn.includes(post.id);state.withdrawn=restore?state.withdrawn.filter(id=>id!==post.id):[...state.withdrawn,post.id];state.contentHistory=Array.isArray(state.contentHistory)?state.contentHistory:[];state.contentHistory.unshift({postId:post.id,author:actorId,action:restore?'重新發布':'撤回內容',at:now,title:post.title});state.contentHistory=state.contentHistory.slice(0,200);return {ok:true,restored:restore};
}

// Accept a URL, never arbitrary iframe markup. All players are created from a
// validated video ID and wait for an explicit click before contacting YouTube.
export function parseYouTubeUrl(value=''){
  const input=String(value).trim();if(!input)return null;
  try{
    const u=new URL(input);if(u.protocol!=='https:'||u.username||u.password||u.port)return null;
    const host=u.hostname.toLowerCase();let id='';
    if(['youtu.be','www.youtu.be'].includes(host)){id=u.pathname.split('/')[1]||'';if(u.pathname.split('/').filter(Boolean).length!==1)return null;}
    else if(['youtube.com','www.youtube.com','m.youtube.com','youtube-nocookie.com','www.youtube-nocookie.com'].includes(host)){
      const parts=u.pathname.split('/').filter(Boolean);
      if(u.pathname==='/watch')id=u.searchParams.get('v')||'';
      else if(parts.length===2&&['embed','shorts','live'].includes(parts[0]))id=parts[1];
    }
    if(!/^[A-Za-z0-9_-]{11}$/.test(id))return null;
    return {id,url:`https://www.youtube.com/watch?v=${id}`,embed:`https://www.youtube-nocookie.com/embed/${id}?rel=0&playsinline=1`};
  }catch{return null;}
}
export function renderYouTubeBlock(url,title='影片內容'){
  const video=parseYouTubeUrl(url);if(!video)return '';
  return `<section class="video-block" aria-label="${escapeHtml(title)}的 YouTube 影片"><div class="video-player" data-youtube-id="${video.id}"><span class="video-play-mark" aria-hidden="true">▶</span><strong>${escapeHtml(title)}</strong><button type="button" class="btn btn-primary small" data-action="load-video" data-video="${video.id}">載入 YouTube 影片</button><small>點選後連線至 YouTube，不自動播放。</small></div><a href="${video.url}" target="_blank" rel="noopener noreferrer" class="text-link">在 YouTube 開啟</a></section>`;
}
