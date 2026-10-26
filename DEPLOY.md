# GitHub 發布紀錄

- Repository：[fci1007-design/abu-sports-platform-demo](https://github.com/fci1007-design/abu-sports-platform-demo)（公開）
- 網站：[球場邊示範平台](https://fci1007-design.github.io/abu-sports-platform-demo/)
- 本輪：[責任博彩專區](https://fci1007-design.github.io/abu-sports-platform-demo/#/responsible-gaming)
- 分支：`main`
- 網站程式版本：`e64cdd7b20795aba68221fd1537aadb99a7bac0b`
- 部署完成：2026-10-26 22:29:48 +0800
- 線上驗證：2026-10-26 22:30:39 +0800
- [GitHub Actions run 40339899548](https://github.com/fci1007-design/abu-sports-platform-demo/actions/runs/40339899548)：build／deploy 均成功（第2次執行）。
- 建置：Node.js 22，`npm test` 31/31 通過 → `npm run build` 成功。
- 發布：GitHub Actions → GitHub Pages，只上傳 `dist/`，HTTPS 已啟用。
- 自訂環境變數與外部憑證：無；Pages 使用 GitHub 管理的權杖／OIDC。

## 本輪範圍與驗證

新增六篇責任博彩宣導、分類／搜尋、來源／求助資訊，以及首頁／主導覽／頁尾／比較頁入口。資料查核日 2026-10-26；文章由編輯整理，參考台灣彩券、台灣運彩、WHO／NHS 及全國法規資料庫，文末可延伸閱讀。

本機專區 123 項斷言／45 組版面，原站回歸 10 組情境含39組版面，31/31 單元測試及建置通過。七個靜態閱讀頁、83 個相對連結及三份單檔 JavaScript 獨立解析通過。

正式 HTTPS 專區回應200；實際瀏覽器線上通過119項斷言與45組實際 CSS 390／768／1440版面，沒有JavaScript執行錯誤。涵蓋首頁入口、公開閱讀、分類／全文搜尋／空結果、來源／電話連結、返回列表、未知文章、比較頁入口，以及停用JavaScript的七頁三尺寸閱讀。

## 限制

示範互動只保存在各自瀏覽器，沒有正式帳號、真實會員、金流或後端權限。保留 noindex；既有靜態專欄只輸出公開檔案樣本，瀏覽器編輯／下架不會同步到靜態快照。責任博彩文章不提供診斷、量表評分或投注帳號自我排除服務；不新增健康資料蒐集。

本輪未驗Safari、Edge、實體手機或完整資安／無障礙稽核，未實際撥打專線或送出資料。服務資訊可能更新，維護時需重查官方來源及日期。

## 發布歷程

- 2026-10-26 16:31:00 +0800：首次推送網站程式版本 `ca88d651ed3ee5ac43429df0bd52c274cf7c221d`。
- 2026-10-26 16:32:05 +0800：GitHub Pages 首次部署成功；首次線上34項斷言／18組版面通過。
- 2026-10-26 22:28 +0800：推送責任博彩程式 `e64cdd7b20795aba68221fd1537aadb99a7bac0b`；build成功，首次deploy建立部署時GitHub API回應502。依日誌建議只重跑失敗工作，未改產品程式。
- 2026-10-26 22:29:48 +0800：第2次deploy成功，後續線上119項／45組版面通過。
- 2026-10-26 22:31:36 +0800：補齊本紀錄。僅文件／manifest更新不觸發網站重建；網站程式版本如上。
