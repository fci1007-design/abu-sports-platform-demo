# GitHub 發布紀錄

- Repository：[fci1007-design/abu-sports-platform-demo](https://github.com/fci1007-design/abu-sports-platform-demo)（公開）
- 網站：[球場邊示範平台](https://fci1007-design.github.io/abu-sports-platform-demo/)
- 分支：`main`
- 網站程式版本：`ca88d651ed3ee5ac43429df0bd52c274cf7c221d`
- 部署完成：2026-10-26 16:32:05 +0800
- 線上驗證：2026-10-26 16:36:53 +0800
- [GitHub Actions run 40292805027](https://github.com/fci1007-design/abu-sports-platform-demo/actions/runs/40292805027)：build／deploy 均成功。
- 建置：Node.js 22，`npm test` 28/28 通過 → `npm run build` 成功。
- 發布：GitHub Actions → GitHub Pages，只上傳 `dist/`，HTTPS 已啟用。
- 自訂環境變數與外部憑證：無；Pages 使用 GitHub 管理的權杖／OIDC。

## 線上驗證

正式 HTTPS 網址回應 200；實際瀏覽器通過 34 項斷言及 18 組手機／平板／桌機版面，沒有 JavaScript 錯誤或資源載入失敗。包含首頁橫幅、公開專欄、獨家試閱、工具登入／演算、同瀏覽器會員提問／專家回覆、A/B 比較及靜態文章返回互動站的相對路徑。

示範互動只保存在各自瀏覽器；沒有正式帳號、真實會員、金流或後端權限。靜態文章只輸出公開檔案樣本並保留 noindex，瀏覽器編輯／下架不會同步到這批靜態快照。

## 發布歷程

- 2026-10-26 16:31:00 +0800：首次推送網站程式版本 `ca88d651ed3ee5ac43429df0bd52c274cf7c221d`。
- 2026-10-26 16:32:05 +0800：GitHub Pages 首次部署成功。
- 2026-10-26 16:36:53 +0800：HTTPS、主要操作與三尺寸驗證通過，補齊本紀錄。僅文件／manifest 的更新不觸發網站重建；網站程式版本如上。

## 本輪更新準備

2026-10-26：新增責任博彩專區、六篇宣導與來源／求助資訊；本機 31/31 測試、123 項專區斷言／45 組版面與原站回歸通過。以下新版本部署仍待本輪 workflow 與線上檢查，既有已驗網站版本保持上方記錄。
