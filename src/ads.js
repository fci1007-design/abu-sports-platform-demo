import {escapeHtml} from './core.js';

// Shared presentation fixtures. These slots do not load ad networks, track users,
// sell products or alter paid membership entitlements.
export const AD_SLOTS=[
  {id:'H01',name:'首頁橫幅',location:'主導覽下方、賽程之前',desktop:'全寬 × 210px',mobile:'全寬 × 164px',status:'站內教學廣告示範'},
  {id:'S01',name:'品牌矩形',location:'桌機側欄；手機第一組討論／前兩篇貼文之後',desktop:'約 300 × 300px',mobile:'全寬 × 約 270px',status:'運動用品廣告示範'},
  {id:'F01',name:'資訊流中段',location:'討論後、專欄前；完整互動版在前兩篇貼文後',desktop:'內容欄寬 × 120px',mobile:'全寬 × 100px',status:'預留；預設不展示'},
  {id:'A01',name:'文章末尾',location:'文章正文之後、留言或延伸閱讀之前',desktop:'閱讀欄寬 × 120px',mobile:'全寬 × 100px',status:'預留；預設不展示'}
];
export function renderAdBanner(resolve=name=>name){return `<section class="ad-banner" data-ad-slot="H01" aria-label="首頁橫幅廣告示範"><img src="${resolve('assets/sports-banner.webp')}" alt="棒球與籃球的紅黑黃運動視覺，AI 生成" fetchpriority="high"><div class="ad-banner-copy"><span class="ad-label">廣告・站內教學示範</span><h2>盤口判讀入門<span>看懂比賽的另一面。</span></h2><p>從賽事、玩法、盤線與資料時間開始。</p><button type="button" class="ad-cta" data-ad-action="lesson">試讀入門教學</button></div><span class="ad-image-note">AI 情境圖</span></section>`;}
export function renderSponsorAd(resolve=name=>name,placement='desktop-ad'){return `<section class="ad-sponsor ${placement}" data-ad-slot="S01" aria-label="運動用品品牌廣告示範"><div class="ad-sponsor-heading"><span class="ad-label">廣告・虛構品牌示範</span><span class="ad-brand">球場補給</span><h3>看球日常，<br>補給到位。</h3></div><img src="${resolve('assets/sports-supply.webp')}" alt="紅色與黃色運動水壺、毛巾及黑色收納包，AI 商品示意"><div class="ad-sponsor-bottom"><span>觀賽隨行用品</span><button type="button" data-ad-action="sponsor">查看模擬活動</button></div></section>`;}
export function renderReservedAd(id){const slot=AD_SLOTS.find(s=>s.id===id);return `<aside class="ad-reserved" data-ad-slot="${slot.id}" aria-label="${slot.name}預留廣告位置"><strong>${slot.id} ${slot.name}</strong><span>${slot.desktop}｜預留版位，未投放廣告</span></aside>`;}
export function adPlanMarkup(titleId=''){return `${titleId?`<h2 id="${titleId}">廣告版位規劃</h2>`:''}<p class="ad-plan-intro">先展示兩則模擬廣告，另外保留資訊流與文章末尾兩個位置。廣告與專家內容分開標示。</p><div class="ad-plan-list">${AD_SLOTS.map(s=>`<section><strong>${s.id} ${s.name}</strong><p>${escapeHtml(s.location)}</p><span>桌機：${escapeHtml(s.desktop)}<br>手機：${escapeHtml(s.mobile)}</span><small>${escapeHtml(s.status)}</small></section>`).join('')}</div><button type="button" class="ad-cta" data-ad-action="slots">顯示／隱藏預留版位</button><p class="ad-demo-note">版位尺寸為本次版面提案，尚未訂廣告價格或串接廣告服務。預留位置只在檢視模式中顯示。</p>`;}
export function sponsorMarkup(resolve=name=>name,titleId=''){return `${titleId?`<h2 id="${titleId}">球場補給・觀賽隨行提案</h2>`:''}<img class="ad-detail-image" src="${resolve('assets/sports-supply.webp')}" alt="紅黃運動水壺與配件的 AI 商品示意"><p class="ad-plan-intro">把水壺、毛巾和隨身小物準備好，享受自己的觀賽時光。</p><p>這是一則運動用品品牌的模擬廣告，展示產品圖片、活動文案與點擊後的介紹空間。</p><p class="ad-demo-note">虛構品牌與 AI 商品示意，沒有商品販售或付款。</p>`;}
