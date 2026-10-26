# 網站示範 repository 維護入口

- 先讀 README.md、DEPLOY.md，再讀相關程式與測試。
- 這是公開的虛構資料樣板；不要匯入真實會員、會議、憑證或交易資料。
- 市場估計與閱讀規則只由 src/core.js 持有；服務／問答規則由 src/workspace-core.js 持有；發布／影片由 src/content.js 持有；公開文章／格式／封面由 src/editorial.js 持有。
- 保留 RWD、白紅黑黃、資訊流優先、多專家、既有草稿與內容 ID；修改後執行 npm test、npm run build，並檢查手機、平板與桌機。
- GitHub Pages 只發布 dist；靜態文章是公開檔案樣本的 noindex 快照，不會同步瀏覽器的下架／撤回，不是正式 CMS 或授權防護。
- 真正工具規則、正式會員權利與價格未定；不擅自變成商業承諾。
- 每次發布後更新 DEPLOY.md，記錄實際版本、時間、URL 與驗證；不能把本機建置寫成已上線。
