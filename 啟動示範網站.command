#!/bin/zsh
cd "$(dirname "$0")" || exit 1
if ! command -v node >/dev/null 2>&1; then
  print '需要 Node.js 才能使用開發預覽。你也可以直接雙擊同目錄的「球場邊示範網站.html」。'
  read -k 1
  exit 1
fi
node scripts/serve.mjs --open
