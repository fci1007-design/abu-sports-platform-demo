export const experts = [
  {id:'abu',name:'阿布拉',initial:'阿',role:'運彩禿鷹',sport:'棒球',color:'navy',tagline:'把盤口看清楚，比急著做決定更重要。',bio:'從市場變化出發，分享賽前觀察、盤口閱讀與風險思考。這裡的介紹與文章為展示用內容，待阿布拉確認後可替換。',tags:['盤口觀察','棒球分析','風險觀念']},
  {id:'lin',name:'林教練',initial:'林',role:'籃球觀察室',sport:'籃球',color:'orange',tagline:'從每一次攻防，看見比分以外的線索。',bio:'示範專家角色。擅長以比賽節奏、輪替與攻防效率整理賽前觀點，所有內容皆為虛構樣本。',tags:['攻防節奏','籃球分析','賽後檢討']},
  {id:'chen',name:'陳予安',initial:'陳',role:'數據筆記',sport:'棒球',color:'teal',tagline:'讓數字成為觀點的起點。',bio:'示範專家角色。以數據整理與圖表幫助球迷理解比賽，不以單一數字替代完整判斷。',tags:['資料解讀','棒球數據','圖表筆記']},
  {id:'fan',name:'小宇',initial:'宇',role:'球迷',sport:'籃球',color:'purple',tagline:'一起聊球，也聽聽不同的看法。',bio:'一般球迷示範角色。',tags:['球迷討論']}
];

export const matches = [
  {id:'m1',sport:'棒球',league:'棒球示範聯盟',home:'海港鯨',away:'山城鷹',homeShort:'鯨',awayShort:'鷹',time:'19:05',date:'10/26',status:'賽前',line:'大小 8.5',homeOdds:1.9,awayOdds:1.9,offer:1.8,quality:'fresh',image:'assets/baseball.webp',note:'牛棚與賽事後段的節奏，是本場的觀察重點。'},
  {id:'m2',sport:'籃球',league:'籃球示範聯盟',home:'台北雷霆',away:'南方烈焰',homeShort:'雷',awayShort:'焰',time:'19:30',date:'10/26',status:'賽前',line:'主隊 -3.5',homeOdds:1.83,awayOdds:2.05,offer:1.9,quality:'fresh',image:'assets/basketball.webp',note:'輪替深度與轉換進攻的次數，可能改變比賽走向。'},
  {id:'m3',sport:'棒球',league:'棒球示範聯盟',home:'森林鹿',away:'東岸浪',homeShort:'鹿',awayShort:'浪',time:'18:35',date:'10/26',status:'資料延遲',line:'大小 7.5',homeOdds:1.95,awayOdds:1.85,offer:1.82,quality:'stale',image:'assets/baseball.webp',note:'此場用來展示資料過期時的提示與暫停比較。'},
  {id:'m4',sport:'籃球',league:'籃球示範聯盟',home:'城市獵鷹',away:'海灣航行者',homeShort:'隼',awayShort:'航',time:'20:00',date:'10/26',status:'賽前',line:'主隊 -5.5',homeOdds:1.93,awayOdds:1.91,offer:1.88,quality:'fresh',image:'assets/basketball.webp',note:'留意節奏差異，避免只用近期比分判斷。'},
  {id:'m5',sport:'棒球',league:'棒球示範聯盟',home:'北城熊',away:'金山狐',homeShort:'熊',awayShort:'狐',time:'18:30',date:'10/27',status:'賽前',line:'大小 9.5',homeOdds:1.88,awayOdds:1.96,offer:1.83,quality:'fresh',image:'assets/baseball.webp',note:'把短期表現放回完整賽季脈絡中觀察。'},
  {id:'m6',sport:'籃球',league:'籃球示範聯盟',home:'山嶺狼',away:'西城騎士',homeShort:'狼',awayShort:'騎',time:'19:00',date:'10/27',status:'資料缺漏',line:'大小 210.5',homeOdds:null,awayOdds:1.9,offer:1.85,quality:'missing',image:'assets/basketball.webp',note:'缺少一側報價時，不輸出機率與估計值。'}
];

export const posts = [
  {id:'p1',author:'abu',type:'專家分析',sport:'棒球',match:'m1',title:'今晚的大小分，先看牛棚，再看盤口',excerpt:'先發投手之外，比賽後半段的投手調度也值得放進觀察。當兩個資訊指向不同方向，我會先把問題拆開。',body:'看大小分時，我習慣先問三個問題：今天的得分環境如何？先發能負擔多少局數？兩隊的牛棚在這個系列賽用了多少資源？\n\n盤口提供的是市場報價，不是比賽答案。單看一個數字很容易忽略規則、資料時間與賽事變化。先把這些條件對齊，才有比較的基礎。\n\n本篇以虛構賽事示範如何組織分析內容。你可以在下方進入賽事頁，查看同場資料與其他球迷的觀點。',image:'assets/baseball.webp',tags:['賽前觀察','盤口怎麼看'],time:'10/26 14:30',likes:24,premium:false,featured:true,comments:[{name:'海邊的球迷',text:'比起只看先發，我也想知道牛棚連續出賽的影響。'},{name:'晚場觀察員',text:'把資料時間標出來很有幫助，不會拿到不同時間的盤來比。'}]},
  {id:'p2',author:'abu',type:'獨家分析',sport:'棒球',match:'m1',title:'海港鯨 × 山城鷹：三個盤口變化的觀察筆記',excerpt:'從開盤到賽前，數字變動背後有哪些可能？這份報告以分段觀察帶你對齊資料與判斷。',body:'一、把比較條件對齊\n同一場比賽、同一玩法、相同盤線與結算規則，才是可以比較的起點。\n\n二、區分資料與解釋\n報價與時間是可記錄的資料；為什麼變動則是需要驗證的解釋。兩者分開，才能在賽後回看判斷。\n\n三、建立觀察紀律\n不要因為單次變動就急著下結論。保留原始快照、觀察時間與當時資訊，讓每次分析有跡可循。\n\n本報告為示範文章，內容與賽事均屬虛構，不代表阿布拉實際發表的分析。',tags:['獨家筆記','賽前觀察'],time:'10/26 15:10',likes:18,premium:true,vipEligible:true,comments:[]},
  {id:'p3',author:'lin',type:'專家分析',sport:'籃球',match:'m2',title:'別只看得分：快節奏比賽裡的三個訊號',excerpt:'回合數、輪替與失誤後的轉換，是我看籃球時會一起追蹤的線索。你看比賽時最在意哪一項？',body:'一場比賽的總得分，可能來自較高效率，也可能只是回合數比較多。把兩者分開，能幫助我們讀懂比分。\n\n接著觀察輪替：相同球隊在不同陣容下，節奏可能差很多。最後看轉換進攻與失誤，這些往往是賽前平均值沒辦法直接解釋的部分。\n\n這是示範專家與虛構賽事的文章。歡迎在討論中分享你會觀察的指標。',image:'assets/basketball.webp',tags:['籃球觀察','攻防節奏'],time:'10/26 13:45',likes:16,premium:false,comments:[{name:'阿哲',text:'我會先看替補陣容上來後，防守籃板有沒有守住。'}]},
  {id:'p4',author:'fan',type:'會員討論',sport:'籃球',match:'m2',title:'大家看籃球，會先看節奏還是輪替？',excerpt:'最近試著把比分以外的資訊記下來，發現同一隊的替補時段差異很大。想聽聽大家平常怎麼看。',body:'這幾場開始做觀賽筆記，不再只記比分。\n\n我把每節最後三分鐘另外標出來，感覺輪替比單場得分更有意思。有人也有自己的紀錄方式嗎？',tags:['一起聊球','攻防節奏'],time:'10/26 12:20',likes:9,premium:false,comments:[{name:'籃球日常',text:'我會把先發跟替補分開記，再看節奏。'}]},
  {id:'p5',author:'chen',type:'公開資訊',sport:'棒球',match:'m3',title:'盤口比較之前，先確認這四件事',excerpt:'賽事、玩法、盤線與時間。看起來很接近的兩組報價，也可能在談不同的事情。',body:'先確認是同一場賽事，再看全場或局數、盤線與結算條件。\n\n最後檢查資料時間。過期或缺漏的資料，不應該被系統包裝成即時分析。\n\n你可以在森林鹿的示範賽事頁，看到資料延遲如何顯示。',tags:['數據筆記','盤口怎麼看'],time:'10/26 11:40',likes:21,premium:false,comments:[]},
  {id:'p6',author:'lin',type:'獨家分析',sport:'籃球',match:'m2',title:'雷霆與烈焰的攻防拆解：輪替如何改變節奏',excerpt:'用分節圖表對照輪替與回合數，整理一份可以在賽後檢視的觀察清單。',body:'這篇示範獨家報告以輪替、回合數與進攻選擇整理觀察。\n\n第一節先看主力陣容的速度，第二節看替補的防守延續性；第三節回到對手調整，第四節再看犯規與暫停如何影響節奏。\n\n分析的價值在於清楚表達假設與限制，並留下可回顧的紀錄。此為虛構樣本。',tags:['獨家筆記','攻防節奏'],time:'10/26 15:00',likes:12,premium:true,vipEligible:false,comments:[]},
  {id:'p7',author:'abu',type:'專家分析',sport:'棒球',match:'m5',title:'分析結束之後，我會留下什麼？',excerpt:'一份好的筆記，也應該保留當時沒有把握的地方。回頭看，才能知道自己忽略了什麼。',body:'賽後檢討不只看結果。我會回到賽前寫下的條件，檢查哪些已發生、哪些沒有。\n\n把當時的不確定性保留下來，比事後重新解釋更有意義。本篇為分析紀錄形式的示範。',tags:['分析方法','賽後檢討'],time:'10/25 21:30',likes:14,premium:false,comments:[]}
];

export const lessons = [
  {id:'l1',category:'盤口入門',title:'第一次看盤口，從哪裡開始？',intro:'先認識玩法、盤線與報價，再進入比較。',icon:'chart',steps:['先確認賽事與玩法：全場、半場、讓分與大小分各有不同定義。','看清楚盤線及兩側選項，避免拿不同條件直接比較。','留意資料時間、來源與結算規則；看不到時先查清楚。']},
  {id:'l2',category:'數據觀念',title:'去水機率是什麼？',intro:'從報價估計市場機率，理解它的假設與限制。',icon:'activity',steps:['十進位賠率的倒數可得到隱含值。','簡單比例正規化可以產生市場機率估計，但它不是真實勝率。','系統中的 EV 是依估計值計算，不是保證獲利；缺值與過期資料不計算。']},
  {id:'l3',category:'平台使用',title:'追蹤、收藏與訂閱有什麼差別？',intro:'用三個功能，整理自己的看球日常。',icon:'bookmark',steps:['追蹤專家，把喜歡的觀點放進追蹤動態。','收藏文章與賽事，之後可以在我的帳號找回。','訂閱對應特定內容資格；本樣板保留兩種示範情境，不進行真實付款。']},
  {id:'l4',category:'一起聊球',title:'怎麼發表一篇有內容的觀點？',intro:'清楚的問題，往往能帶來更好的討論。',icon:'message',steps:['選擇賽事、球隊或話題，讓同好找到你的文章。','把看到的資料與自己的解讀分開，寫下來源與觀察時間。','尊重不同意見；發現不適當內容可使用檢舉功能。']},
  {id:'l5',category:'籃球觀察',title:'從回合數看比賽節奏',intro:'同樣的比分，可能來自不同的比賽內容。',icon:'basketball',steps:['先看雙方回合數，再看每回合的效率。','輪替與失誤可能讓節奏改變，別只看平均。','在賽事討論裡留下你的觀察，賽後再回顧。']},
  {id:'l6',category:'棒球觀察',title:'先發之外，牛棚也值得關注',intro:'把比賽後段放進完整的賽前觀察。',icon:'baseball',steps:['觀察近期出賽與休息狀態。','區分資料事實與對調度的推測。','保留不確定條件，避免單一指標取代完整判斷。']}
];
