# 球場邊｜運動分析社群示範平台

以公開資訊與討論連結多位專家的分析、教學、工具及會員交流。白、紅、黑、黃的響應式介面，支援桌機、平板與手機。

- [開啟線上示範](https://fci1007-design.github.io/abu-sports-platform-demo/)
- [公開專欄](https://fci1007-design.github.io/abu-sports-platform-demo/#/columns)
- [賠率分析高手](https://fci1007-design.github.io/abu-sports-platform-demo/#/tool/odds)
- [發布紀錄](DEPLOY.md)

## 示範內容

首頁資訊流、賽事中心、專家頁、公開專欄、獨家內容試閱與模擬解鎖、教學、YouTube 嵌入、一般會員發文、專家工作台、會員主題問答／公告、內容檢舉管理，以及分析工具介面。

所有賽事、報價、文章、會員、服務關係與互動均為虛構示範。除阿布拉名稱外，其他專家為示範角色；樣本介紹與文章不代表真人實際發表。圖片為 AI 情境圖。工具只是市場估計的介面展示，並非阿布拉的獨門演算法，不提供真實下注指令或獲利保證。

示範身分與內容解鎖保存在此瀏覽器，沒有正式帳號、付費防護、真實會員、多人同步、LINE 移轉、金流或原生 App。兩種訂閱情境尚未定案，不會收費。

## 執行與建置

需要 Node.js 22，不需 API key 或外部套件。

```bash
npm test
npm run dev
npm run build
```

本機預覽預設為 `http://127.0.0.1:4173`。`npm run build` 產生 `dist/`、兩份離線單檔及四篇公開文章的靜態閱讀頁。GitHub Pages 只發布 `dist/`；原始資料、會議與本機驗證紀錄不包含在此 repository。

`src/core.js` 持有市場估計與閱讀規則，`src/workspace-core.js` 持有示範服務／問答規則，`src/content.js` 持有發布及影片規則，`src/editorial.js` 持有公開文章、摘要／封面與安全文字格式。

公開文章靜態頁只讀檔案中的示範文章，排除獨家／會員討論並保留 noindex。瀏覽器內新增、下架或撤回不會同步到這批靜態快照；正式 CMS、發布同步、後端授權與搜尋收錄尚未完成。

## 自動發布

`main` 的網站程式、測試或建置設定更新後，GitHub Actions 會執行規則測試與建置，再將 `dist/` 發布到 Pages；也可從 Actions 手動執行。官方 actions 固定到 commit SHA，不需設定第三方服務憑證。
