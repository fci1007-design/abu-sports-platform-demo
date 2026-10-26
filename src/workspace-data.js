export const DEMO_CONTACTS=[
  {id:'you',name:'場邊球迷',initial:'你'},
  {id:'m01',name:'阿哲',initial:'哲'},
  {id:'m02',name:'小晴',initial:'晴'},
  {id:'m03',name:'海邊球迷',initial:'海'},
  {id:'m04',name:'小宇',initial:'宇'},
  {id:'m05',name:'晚場觀察員',initial:'晚'}
];
export const DEMO_RELATIONS=[
  {expertId:'abu',memberId:'you',status:'active',tags:['工具體驗','棒球'],note:'希望從判讀條件學起。',joinedAt:'2026-10-20'},
  {expertId:'abu',memberId:'m01',status:'active',tags:['教學','棒球'],note:'常看公開分析，提問偏重牛棚。',joinedAt:'2026-10-12'},
  {expertId:'abu',memberId:'m02',status:'paused',tags:['新加入'],note:'示範暫停互動狀態，保留既有紀錄。',joinedAt:'2026-10-22'},
  {expertId:'abu',memberId:'m03',status:'active',tags:['盤口入門'],note:'偏好先看教學，再使用工具。',joinedAt:'2026-10-18'},
  {expertId:'lin',memberId:'you',status:'active',tags:['籃球'],note:'想了解輪替與比賽節奏。',joinedAt:'2026-10-21'},
  {expertId:'lin',memberId:'m01',status:'active',tags:['籃球教學'],note:'此處是林教練自己的服務註記，不與其他專家共用。',joinedAt:'2026-10-15'},
  {expertId:'lin',memberId:'m04',status:'active',tags:['攻防觀察'],note:'喜歡賽後檢討。',joinedAt:'2026-10-16'},
  {expertId:'chen',memberId:'m03',status:'active',tags:['數據'],note:'想看資料時間與來源的說明。',joinedAt:'2026-10-23'},
  {expertId:'chen',memberId:'m05',status:'active',tags:['圖表教學'],note:'偏好圖表筆記。',joinedAt:'2026-10-24'}
];
export const DEMO_THREADS=[
  {id:'q-abu-you',expertId:'abu',memberId:'you',subject:'賠率分析高手裡的市場估計要怎麼看？',topic:'工具問題',toolId:'odds',matchId:'m1',status:'pending',read:{expert:0,member:0},messages:[{id:'seed-1',role:'member',authorId:'you',text:'兩側報價都是 1.9，為什麼市場估計會是 50%？',at:'2026-10-26T03:10:00Z'}]},
  {id:'q-abu-m01',expertId:'abu',memberId:'m01',subject:'先發之外，牛棚要先看什麼？',topic:'教學提問',toolId:'',matchId:'m1',status:'answered',read:{expert:2,member:1},messages:[{id:'seed-2',role:'member',authorId:'m01',text:'剛讀完牛棚教學，想知道如何把出賽與休息一起看。',at:'2026-10-26T02:20:00Z'},{id:'seed-3',role:'expert',authorId:'abu',text:'示範回覆：先分開記錄出賽事實與對調度的推測，再回到當天資料時間。',at:'2026-10-26T02:40:00Z'}]},
  {id:'q-lin-you',expertId:'lin',memberId:'you',subject:'替補上場後，節奏差異怎麼記？',topic:'賽事討論',toolId:'',matchId:'m2',status:'pending',read:{expert:0,member:0},messages:[{id:'seed-4',role:'member',authorId:'you',text:'想把主力與替補分開記錄，有建議的觀察順序嗎？',at:'2026-10-26T03:30:00Z'}]},
  {id:'q-chen-m05',expertId:'chen',memberId:'m05',subject:'資料更新時間不同，能直接比較嗎？',topic:'教學提問',toolId:'',matchId:'m3',status:'pending',read:{expert:0,member:0},messages:[{id:'seed-5',role:'member',authorId:'m05',text:'兩筆資料時間不一樣，我應該先停下比較嗎？',at:'2026-10-26T03:45:00Z'}]}
];
export const DEMO_ANNOUNCEMENTS=[
  {id:'a-abu-1',expertId:'abu',title:'先確認比較條件，再看數字',body:'這週示範教學從賽事、玩法、盤線與時間開始。工具內有問題，可帶著同一場賽事提問。',at:'2026-10-26T01:00:00Z'},
  {id:'a-lin-1',expertId:'lin',title:'從輪替理解節奏',body:'先把主力與替補分開觀察，再回看同一節的比賽內容。此為示範公告。',at:'2026-10-26T01:30:00Z'}
];
