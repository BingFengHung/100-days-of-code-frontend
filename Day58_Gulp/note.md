# 100 days of code front end - Day 58

gulp-cli --global

gulp 目前 gulp 有支援很多插件可以用

gulp-uglify 壓縮 js 檔 
- 節省檔案讓流量變小
- 刪除不必要的空白

gulp 基本上只要跟著 git 上面的操作步驟即可，
注意範例中有使用到的套件都要安裝

gulp-jshint 檢查 js 的撰寫品質用的
gulp-jsstylish

gulp-htmlmin 壓縮 html

del 刪除檔案用 通常在建立 dist 時，都會先將 dist 裡面的內容都先刪除

browser-sync -> hot reload


要想使用 gulp 必須要確認你的電腦有安裝 Node.js (http://nodejs.org)

1. npm install --global gulp-cli => 允許你 run gulp command on the command line 
2. npm install --save-dev gulp