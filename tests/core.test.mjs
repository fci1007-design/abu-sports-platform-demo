import test from 'node:test';
import assert from 'node:assert/strict';
import {estimateMarket,canRead,changeScenario,initialState,restoreState,escapeHtml} from '../src/core.js';
test('對稱報價的市場估計機率為一半，EV 可獨立核對',()=>{const r=estimateMarket({home:1.9,away:1.9,offer:1.8});assert.ok(Math.abs(r.probability-.5)<1e-12);assert.ok(Math.abs(r.overround-1/19)<1e-12);assert.ok(Math.abs(r.ev-(-.1))<1e-12);});
test('過期、缺值、不同盤線與無效報價停止計算',()=>{for(const extra of [{quality:'stale'},{sameLine:false},{home:null},{away:1},{offer:NaN}])assert.equal(estimateMarket({home:1.9,away:1.9,offer:1.8,...extra}),null);});
test('專家訂閱不會取得另一位專家的獨家內容',()=>{const s={...initialState(),persona:'member',entitlements:['expert:abu']};assert.equal(canRead({premium:true,author:'abu',vipEligible:true},s),true);assert.equal(canRead({premium:true,author:'lin',vipEligible:true},s),false);});
test('VIP 只解鎖明示納入的內容，訪客仍不可讀',()=>{const s={...initialState(),persona:'member',scenario:'vip',entitlements:['vip']};assert.equal(canRead({premium:true,vipEligible:true},s),true);assert.equal(canRead({premium:true,vipEligible:false},s),false);assert.equal(canRead({premium:true,vipEligible:true},{...s,persona:'guest'}),false);});
test('切換訂閱情境清除舊資格並保留收藏與追蹤',()=>{const s={...initialState(),follows:['abu'],saved:['p1'],entitlements:['expert:abu']};const next=changeScenario(s,'vip');assert.deepEqual(next.entitlements,[]);assert.deepEqual(next.follows,['abu']);assert.deepEqual(next.saved,['p1']);assert.deepEqual(s.entitlements,['expert:abu']);});
test('舊版及損毀儲存可回到可操作的初始狀態',()=>{assert.deepEqual(restoreState(null),initialState());assert.deepEqual(restoreState({version:2}),initialState());assert.equal(restoreState({version:1,persona:'unknown',saved:'bad'}).persona,'guest');assert.deepEqual(restoreState({version:1,saved:'bad'}).saved,[]);});
test('使用者發文、留言及屬性內容以純文字輸出',()=>{assert.equal(escapeHtml('<img src=x onerror="alert(1)">'), '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;');});

test('切換專家後，只自動取得目前作者自己的獨家內容',()=>{const s={...initialState(),persona:'expert',activeExpertId:'lin'};assert.equal(canRead({premium:true,author:'lin'},s),true);assert.equal(canRead({premium:true,author:'abu'},s),false);const old=restoreState({version:1,persona:'member',saved:['p1']});assert.deepEqual(old.saved,['p1']);assert.equal(old.workspace.threads.length,4);});
