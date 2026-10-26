import {escapeHtml} from './core.js';

export const RG_REVIEWED_AT='2026-10-26';
export const RG_SOURCES={
 lottery:{name:'台灣彩券：理性投注與協助管道',url:'https://www.taiwanlottery.com/restrict_over_betting/info/'},
 sports:{name:'台灣運彩：節制投注相關宣導',url:'https://member2.sportslottery.com.tw/zh-tw/declaration/98'},
 assessment:{name:'台灣運彩：投注行為自評',url:'https://member2.sportslottery.com.tw/zh-tw/declaration/betting-behavior-self-assessment'},
 who:{name:'世界衛生組織：Gambling',url:'https://www.who.int/news-room/fact-sheets/detail/gambling'},
 nhs:{name:'英國 NHS：博彩問題的支持資訊（英文）',url:'https://www.nhs.uk/live-well/addiction-support/gambling-addiction/'},
 sportsLaw:{name:'全國法規資料庫：運動彩券發行條例第13條',url:'https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=H0120050&flno=13'},
 adulthood:{name:'全國法規資料庫：民法第12條',url:'https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=B0000001&flno=12'}
};
export const RG_ARTICLES=[
 {id:'entertainment-not-income',category:'理性觀念',title:'運彩不是收入來源，也不是理財方法',summary:'分析可以幫助理解比賽，不能把不確定的賽果變成收入保證。',takeaway:'不投注，也可以完整享受看球與討論。',sources:['who','nhs'],sections:[
  {title:'先分清楚看球與金錢風險',paragraphs:['欣賞比賽、研究資料與參與討論，不必以投注為前提。若選擇參與，投入的金額可能全部損失，不能拿來支應生活或當成穩定收入。']},
  {title:'專家與工具也有界線',paragraphs:['過去的成績、精美圖表或正面的估計值，都不等於下一場一定獲利。不要因為「穩賺」「保證回本」等說法，交出生活費、借款或追加原本不打算承擔的風險。']},
  {title:'把選擇權留給自己',paragraphs:['想看比賽時，可以只追蹤賽事與閱讀公開內容。若參與已帶來財務、情緒或人際壓力，暫停並尋求支持，比證明自己能贏更重要。']}
 ]},
 {id:'time-and-budget',category:'預算與時間',title:'先顧好生活，再設定時間與金額界線',summary:'生活費優先、不借貸，並在開始之前決定何時停止。',takeaway:'沒有可以承擔損失的餘裕時，就不要投入。',sources:['lottery','sports'],sections:[
  {title:'必要支出先留下來',paragraphs:['先保留房租、餐食、帳單、照顧家人與其他必要支出。不要把借款、信用額度，或尚未支付的生活費視為可用預算，也不要用他人的錢參與。']},
  {title:'界線應該事先決定',paragraphs:['若選擇參與，先寫下可承擔的損失上限與停止時間。到達任何一條界線就停止；臨時延長時間或提高額度，容易讓原本的安排失去作用。']},
  {title:'預算不是安全保證',paragraphs:['設下界線仍然有損失與失控風險。如果睡眠、工作或情緒已受影響，即使尚未達到金額上限，也可以直接暫停，改做不涉及投注的活動。']}
 ]},
 {id:'avoid-chasing-losses',category:'理性觀念',title:'想把輸掉的贏回來時，先停一下',summary:'追損與臨時加碼，可能讓損失和壓力一起擴大。',takeaway:'已經發生的損失，不是再投入的理由。',sources:['assessment','nhs'],sections:[
  {title:'辨認「再一次就回來」的念頭',paragraphs:['輸了之後急著找下一場、增加金額，或認為必須立刻補回損失，都值得留意。連續失利不會讓下一次自動更有利，也不構成加碼的依據。']},
  {title:'把決定往後放',paragraphs:['先離開投注相關頁面與群組訊息，讓當下的催促慢下來。不要借錢、提高原定額度，或請別人代為操作；若無法停下，可以先找信任的人陪伴。']},
  {title:'需要幫忙時，不必等到更嚴重',paragraphs:['如果反覆為回本投入更多，或已出現財務困擾，可以聯絡專業支持管道。官方自評可協助整理狀況，但不能代替個別的專業評估。']}
 ]},
 {id:'notice-warning-signs',category:'風險警訊',title:'當投注開始擠壓生活，值得留意哪些訊號？',summary:'不只看輸贏，也看看時間、情緒、人際與生活支出。',takeaway:'求助不需要先符合某個分數，也不必等到走投無路。',sources:['who','assessment'],sections:[
  {title:'留意生活是否正在改變',paragraphs:['例如經常為了投注延誤睡眠或工作、對相關訊息難以分心、想減少卻反覆失敗，或開始隱瞞花費。借貸與必要支出受到影響，也值得認真面對。']},
  {title:'警訊不是人格評價',paragraphs:['出現困擾不代表一個人沒有價值，也不是單靠責備就能解決。本頁不提供診斷或分數判定；若擔心自己的狀況，可以向專業人員諮詢。']},
  {title:'先整理，再開口',paragraphs:['可以先寫下受到影響的生活項目，以及自己希望停止或改變的事情。這份整理是為了方便溝通，不需要把個人的投注、財務或健康資料填進本網站。']}
 ]},
 {id:'protect-young-people',category:'保護與求助',title:'保護未成年人：看球不需要投注',summary:'把運動興趣、觀賽與金錢投注分開，成人也要守住界線。',takeaway:'不要替未成年人購買、代為投注或提供自己的帳號。',sources:['sportsLaw','adulthood'],sections:[
  {title:'先認識年齡規定',paragraphs:['依台灣現行民法，滿18歲為成年；運動彩券發行條例禁止向未成年人銷售運動彩券或支付獎金。未滿18歲不應購買或兌領運動彩券。']},
  {title:'成人可以做的事',paragraphs:['妥善保管帳號與付款工具，不把帳號交給未成年人，也不要替他們買券或處理投注。觀賽時，可以把話題放在球員、戰術與運動精神，而不是以金額刺激參與。']},
  {title:'用對話代替羞辱',paragraphs:['發現孩子接觸投注時，先了解接觸的情境，清楚說明界線；如已影響生活，可尋求學校輔導或合適的專業協助。本篇是一般宣導，不是身分驗證或法律個案判斷。']}
 ]},
 {id:'pause-and-get-support',category:'保護與求助',title:'想暫停或需要幫忙，可以從這裡開始',summary:'先離開投注情境，找人一起整理，再接上合適的支持管道。',takeaway:'暫停與求助，是可以立即開始的選擇。',sources:['lottery','nhs','sports'],sections:[
  {title:'先減少當下的接觸',paragraphs:['可以先離開投注頁面，關閉促銷通知，安排不涉及投注的活動，並把情況告訴信任的人。若使用的正式服務提供限額或暫停功能，請向該服務確認申請方式與生效規則。']},
  {title:'把需要說清楚',paragraphs:['不必一次解決所有事情。可以先說明「我想停下來，但自己很難做到」，或列出已受影響的生活項目，再與支持人員討論可行的下一步。親友也能一起尋找協助。']},
  {title:'本專區提供的是資訊入口',paragraphs:['下方列出官方公告的諮詢資源。本網站沒有受理自我排除、封鎖帳號或保證停止投注的服務；需要限制正式投注帳號時，仍須向實際服務提供者辦理。']}
 ]}
];

export function findResponsibleArticle(id){return RG_ARTICLES.find(a=>a.id===id)||null;}
export function filterResponsibleArticles({query='',category='全部'}={}){const q=String(query).trim().toLocaleLowerCase('zh-TW');return RG_ARTICLES.filter(a=>(category==='全部'||a.category===category)&&(!q||`${a.title} ${a.summary} ${a.sections.flatMap(s=>[s.title,...s.paragraphs]).join(' ')}`.toLocaleLowerCase('zh-TW').includes(q)));}
const rgEsc=escapeHtml;
const rgExternal=(source)=>`<a href="${rgEsc(source.url)}" target="_blank" rel="noopener noreferrer">${rgEsc(source.name)}<span class="rg-external-note">另開視窗</span></a>`;
export function renderResponsibleSupport(){return `<section id="rg-support" class="rg-support" aria-labelledby="rg-support-title"><div><h2 id="rg-support-title">想暫停，或需要有人一起整理？</h2><p>台灣彩券官網列有免付費投注成癮防治專線，可先詢問適合自己的協助方式。</p><a class="rg-help-phone" href="tel:0800366176">0800-366-176</a><small>服務內容與時段請以官方最新公告為準。資料查核：${RG_REVIEWED_AT}</small></div><div><h3>參考與支持管道</h3>${rgExternal(RG_SOURCES.lottery)}${rgExternal(RG_SOURCES.sports)}${rgExternal(RG_SOURCES.assessment)}<p class="rg-support-note">宣導資訊不代替專業評估。本專區不收集投注、財務或健康資料，也不提供診斷。</p></div></section>`;}
export function renderResponsibleReminder(){return `<a class="rg-home-entry" href="#/responsible-gaming"><span class="rg-entry-label">責任博彩</span><span><strong>先顧好生活，再談每一場比賽。</strong><small>預算與時間、追損警訊、未成年人保護與求助資訊</small></span><span class="rg-entry-action">閱讀宣導</span></a>`;}
export function renderResponsibleHub({query='',category='全部',staticPage=false}={}){const list=filterResponsibleArticles({query,category}),categories=['全部',...new Set(RG_ARTICLES.map(a=>a.category))],href=id=>staticPage?`${id}/index.html`:`#/responsible-gaming/${id}`;return `<main id="main-content" class="shell rg-page"><header class="rg-hero"><div><span class="rg-section-label">理性參與・生活優先</span><h1>責任博彩專區</h1><p class="rg-hero-lead">讓看球留在生活裡，<br>別讓投注占滿生活。</p><p>理解風險、留意界線，也知道何時暫停與找人幫忙。不投注，一樣可以享受運動。</p><a class="btn btn-primary small" href="${href('pause-and-get-support')}">閱讀暫停與求助資訊</a></div><aside class="rg-principles"><h2>先記住這幾件事</h2><ul><li>運彩不是收入或理財工具。</li><li>生活費優先，不借錢、不追損。</li><li>未滿18歲不應購買或兌領運動彩券。</li><li>感到困擾時，可以先停下來。</li></ul></aside></header>${!staticPage?`<form id="rg-search-form" class="rg-search"><label>搜尋宣導文章<input name="query" value="${rgEsc(query)}" placeholder="例如：借貸、時間、未成年人" maxlength="100"></label><button type="submit" class="btn btn-outline small">搜尋</button></form><nav class="rg-topics" aria-label="宣導主題">${categories.map(c=>`<button type="button" data-action="rg-category" data-value="${rgEsc(c)}" aria-pressed="${c===category}">${rgEsc(c)}</button>`).join('')}</nav>`:''}<section class="rg-article-list" aria-labelledby="rg-articles-title"><div class="rg-list-heading"><h2 id="rg-articles-title">責任博彩宣導文章</h2><span>${list.length} 篇</span></div>${list.length?list.map(a=>`<article class="rg-article-row"><div><span class="rg-category">${rgEsc(a.category)}</span><h3><a href="${href(a.id)}">${rgEsc(a.title)}</a></h3><p>${rgEsc(a.summary)}</p></div><a class="rg-read-link" href="${href(a.id)}" aria-label="閱讀：${rgEsc(a.title)}">閱讀文章</a></article>`).join(''):`<div class="rg-empty"><h3>沒有符合條件的宣導文章</h3><p>可以換個關鍵字，或清除條件查看全部文章。</p><button type="button" class="btn btn-outline small" data-action="rg-clear">清除條件</button></div>`}</section>${renderResponsibleSupport()}<p class="rg-editor-note">文章由球場邊編輯整理，參考來源列於各篇文末。內容為一般宣導，不是投注建議或診斷服務。</p></main>`;}
export function renderResponsibleArticle(id,{staticPage=false}={}){const a=findResponsibleArticle(id);if(!a)return `<main id="main-content" class="shell rg-page"><h1>找不到這篇宣導文章</h1><p>請回專區選擇其他文章。</p><a class="btn btn-outline" href="${staticPage?'../index.html':'#/responsible-gaming'}">返回責任博彩專區</a></main>`;const hub=staticPage?'../index.html':'#/responsible-gaming',href=slug=>staticPage?`../${slug}/index.html`:`#/responsible-gaming/${slug}`;return `<main id="main-content" class="shell rg-page rg-reading"><a class="breadcrumb" href="${hub}">責任博彩專區</a><div class="rg-reading-layout"><article class="rg-article"><header><span class="rg-category">${rgEsc(a.category)}</span><h1>${rgEsc(a.title)}</h1><p class="rg-reading-summary">${rgEsc(a.summary)}</p><p class="rg-byline">球場邊編輯整理<span>資料查核：<time datetime="${RG_REVIEWED_AT}">${RG_REVIEWED_AT}</time></span></p></header><div class="rg-takeaway"><strong>先記住</strong><p>${rgEsc(a.takeaway)}</p></div>${a.sections.map(s=>`<section class="rg-prose"><h2>${rgEsc(s.title)}</h2>${s.paragraphs.map(p=>`<p>${rgEsc(p)}</p>`).join('')}</section>`).join('')}<section class="rg-sources"><h2>參考資料</h2><p>以下來源供延伸閱讀，不表示來源機構為本站背書。</p>${a.sources.map(key=>rgExternal(RG_SOURCES[key])).join('')}<small>內容與服務可能更新，請以來源機構的最新資訊為準。</small></section><a class="btn btn-outline small" href="${hub}">返回責任博彩專區</a></article><aside class="rg-related"><h2>繼續閱讀</h2>${RG_ARTICLES.filter(x=>x.id!==id).slice(0,3).map(x=>`<a href="${href(x.id)}"><span>${rgEsc(x.category)}</span><strong>${rgEsc(x.title)}</strong></a>`).join('')}${id==='pause-and-get-support'?(staticPage?'<a class="rg-related-help" href="#rg-support">查看求助管道</a>':'<button type="button" class="rg-related-help" data-action="rg-support">查看求助管道</button>'):`<a class="rg-related-help" href="${href('pause-and-get-support')}">暫停與求助資訊</a>`}</aside></div>${renderResponsibleSupport()}</main>`;}
