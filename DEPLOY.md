# GitHub 發布紀錄

- Repository：`fci1007-design/abu-sports-platform-demo`（公開）
- 目標網站：https://fci1007-design.github.io/abu-sports-platform-demo/
- 分支：`main`
- 建置：Node.js 22，`npm test` → `npm run build`
- 發布：GitHub Actions → GitHub Pages，只上傳 `dist/`
- 自訂環境變數與外部憑證：無；Pages 使用 GitHub 管理的權杖／OIDC
- 目前狀態：發布檔案已準備，尚未完成遠端部署驗證。

線上驗證完成後會記錄實際 commit、workflow 與時間。
