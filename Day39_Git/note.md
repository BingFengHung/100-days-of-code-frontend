# 100 days of code front end - Day 39
## 解析 Git 資料結構 - 索引結構

### 關於索引
索引 (index)、快取 (cache)、目錄快取 (Directory cache)、
當前目錄快取 (Current directory cache)、
Staging area (等待被 commit 的地方)、Staged files(等待被 commit 的檔案)

「索引」的主要目的用來紀錄「有哪些檔案即將要被提交到下一個 commit 版本中」。

如果你像要提交一個版本到 Git 儲存庫，那麼你一定要先*更新索引狀態*，變更才會被提交出去。

![](2019-11-22-21-41-22.png)

這些改變的過程，都是在更新「索引檔」的過程

四種檔案狀態：
- untracked (未追縱的，代表尚未被加入 Git 儲存庫的檔案狀態)
- unmodified (未修改的，代表檔案第一次被加入，或是檔案內容與 HEAD 內容一致的狀態)
- modified (已修改的，代表檔案已經被編輯過，或是檔案內容與 HEAD 內容不一致的狀態)
- staged (等待被 commit 的，代表下次執行 git commit 會將這些檔案全部送入版本庫)

> Git 儲存庫的運作，是將工作目錄裡的變化，透過更新索引的方式，將資料寫入成 Git 物件。

git status -> 查看當前工作目錄下的狀態  
git ls-files -> 可列出所有目前已經存在「索引檔」中的那些檔案路徑

## 關於分支的基本觀念與使用方式
分支 (Branch)

有分支就醫定會有需要合併的場合

### 關於分支的基本觀念
分支的機制，最主要的目的就是用來解決開發過程中版本衝突的問題。


遠端的儲存庫可以有分支，本地的儲存庫可以有分支，你可以從遠端任何一個分支合併(pull)到本地分支，也可以將本地的分支推向(push)遠端的分支，你當然也可以從本地任何一個分支合併(merge)到本地的另一個分支。

好好學會「分支」與「合併」真的非常重要。例如 git-flow 就是一套廣受歡迎的分支管理模式，這不是一套工具，而是一種管理分支的邏輯。

git branch: 查看目前有多少分支

git branch -d [BranchName]: 刪除 git 分支 (無法刪除當前使用中的分支)

git branch [branchName]: 建立分支

git checkout -b [BranchName]: 建立分支並將工作目錄切換到新的分支

git checkout [BranchName]: 切換分支

git checkout [commit_id]: 可將工作目錄切換到此版本