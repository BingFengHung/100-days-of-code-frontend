## 2. npm

Node Package Manager (npm) 主要提供以下兩個功能:
1. 在 search.nodejs.org 上面搜尋 nodejs 套件/模組的線上儲存庫
2. 命令行實用程式，用來安裝 Node.js 套件，進行版本管理以及 Node.js 套件的相依性管理

### 2.1 Installing packages
套件是 npm 使用的術語，表示開發人員可將套件用於他們專案的工具。這包含從類別庫或是框架例如 jQuery 以及 AngularJs 到任務執行器 (Gulp.js)。

套件會放到 node_modules 的資料夾中，該資料夾同樣包含 package.json 的檔案。此檔案包含有關所有套件的資訊，包含任何依賴關係，這些依賴關係是使用特定套件所需的其他模組。

npm 使用命令行來安裝與管理套件，因此使用者嘗試使用 npm 應該要熟悉操作系統的基本指令，例如遍歷目錄以及要能夠可以查看資料夾的內容。

更新 npm 管理工具
> npm install npm@latest -g

**How to install packages**
要安裝一個或多個套件可用以下指令:
> npm install \<package-name>  
> or  
> npm i \<package-name>  

> 注意: 這會將套件安裝在命令行當前所在的資料夾，因此檢查是否已選擇適當的資料夾是非常重要的。

如果你已經擁有 package.json 檔案在你當前工作的資料夾並且相依性已經有定義了，那們直接下 npm install 將會自動解析並且安裝在你在檔案中列出的所有相依性的套件。你一樣也可以直接使用縮寫 npm i 來進行安裝。

如果你想要安裝指定版本的套件
使用
> npm install \<name>@\<version>

```batch
# e.g. to install version 4.11.1 of the package lodash
npm install lodash@4.11.1
```

如果你想要安裝與特定版本範圍匹配的版本，可以使用
> npm install \<name>@\<version range>

```batch
# e.g. to install a version which matches "version >= 4.10.1" and "version < 4.11.1" of the package lodash
npm install lodash@">=4.10.1 <4.11.1"
```

如果你想要安裝最新版本
> npm install \<name>@latest

上面的指令會在 npmjs.com 的中央 npm 存儲庫進行搜尋。如果你補想從 npm 註冊表中安裝，有支援其他選項，例如:

```batch
#packages distributed as a tarball
npm install <tarball file>
npm install <tarball url>

# package available locally
npm install <local path>

# packages available as a git repository
npm install <git remote url>

# package available as gist (need a package.json)
npm install gist:<gist-id>

# packages from a specific repository
npm install --registry=http://myreg.mycompany.com <package name>

# package from a related group of packages
npm install @<scope>/<name>(@<version>)

# Scoping is useful for separating private packages hosted on private registry from public ones by setting registry for specific scope
npm config set @mycompay:registry http://myreg.mycompany.com
npm install @mycompany/<package name>
```

如果你已經建立 package.json 檔案，你可以使用 --save (縮寫 -S) 選項或是變數之一，將安裝的套件作為依賴項加入至 package.json 中。如果某人安裝你的套件， npm 會自動讀取 package.json 檔案中的相依性並且安裝列出的版本。

注意你仍然可以透過檔案編輯加入或是管理你的相依性，因此，保持依賴關係通常是一個好主意。

- npm install --save \<name> # install dependencies  
- npm install -S \<name> # shortcut version --save  
- npm i -S \<name>

為了安裝套件並且僅在開發時需要他們時才保存他們，而不是執行時才保存他們，可使用以下指令
- npm install --save-dev \<name> # install dependencies for development purposes
- npm install -D \<name> # shortcut version --save-dev
- npm i -D \<name>

**注意**
從 npm 5.0.0，被安裝的模組會預設會被加入至 dependency， 因此 --save 參數選項不再被需要

**Installing dependencies**
某些模組不只提供函式庫給你使用，同樣也提供一個或多個打算透過命令行使用的二進制文件。雖然你仍然可以安裝這些套件在本地端，通常偏好將他們安裝在全域範圍，讓 cmd 工具可以使用。在這些案例中， npm 會自動連結二進制檔案到合適的路徑，所以他們可以透過 cmd 使用。

將套件安裝全域範圍可以使用:
- npm install --global \<name>
- npm install -g \<name>
- npm i -g \<name>

```batch
# e.g. to install the grunt command line tool 
npm install -g grunt-cli
```

如果你想要在當前的資料夾中列出所有安裝的套件以及它們相關的版本，使用:
- npm list
- npm list \<name>

加入指定的套件名稱可以查詢指定套件的版本

**NPM Behind A Proxy Server**
如果你的網路存取是透過 proxy 伺服器，你可能需要修改 npm install 指令存取遠端儲存庫。npm 使用的配置檔可過命令行更新

- npm config set
 
您可以從瀏覽器的設置面板中找到代理設置。 一旦獲得代理設置（服務器URL，端口，用戶名和密碼）； 您需要按以下方式配置npm配置。

### 2.2. Uninstalling packages
要移除本地安裝的套件可以使用:
- npm uninstall \<package name>

npm 的解除安裝指令共有五個別名，也可使用
- npm remove \<package name>
- npm rm \<package name>
- npm r \<package name>
- npm unlink \<package name>
- npm un \<package name>

如果你像要在移除過程中從 package.json 文件中刪除套件，請使用 --save 標籤 
- npm uninstall --save \<package name>
- npm uninstall -S \<package name>

如要刪除開發相依性
- npm uninstall --save-dev \<package name>
- npm uninstall -D \<package name>

對於可選的依賴項，請使用 --save-optional 
- npm uninstall --save-optional \<package name>
- npm uninstall -O \<package name>

如果套件被安裝在全域環境使用 --global 
npm uninstall -g \<package name>

### 2.3. Setting up a package configuration
Node.js 套件配置包含在 package.json 的檔案中，你可以在每個專案的根目錄找到檔案。

如果要建立一個新的專案可以使用:
- npm init

上面的指令會嘗試讀取當前工作目錄的 Git 儲存庫的資訊 (如果有存在) 以及環境變數來，嘗試自動為你完成一些佔位符的值。反之，他會提供一個輸入視窗進行基本的配置。

如果你想要建立一個具備預設值的 package.json 
- npm init --yes
- npm init -y

如果你建立專案的 package.json 並且並不準備作為 npm 套件發行 (即，僅用於整理依賴關係)，你可以在 package.json 文件中傳達此意圖。
1. (可選) 將私有屬性設定為 true 以防止意外發布
2. (可選) 將許可證屬性設定為 "UNLICENSED"，以拒絕他人使用你的套件的權利

使用 package.json 你會在安裝或升級 packages 時遇到警告訊息，告訴你遺失了描述以及儲存庫欄位。而這是可以安全忽略的訊息，你可以打開 package.json 加入以下幾行指令到 JSON 物件中。

```javascript
[...]
"description": "No description.",
"repository": {
    "private": true
},
[...]
```

### 2.4 Running scripts
你可以在 package.json 中定義腳本，例如
```javascript
{
  "name": "your-package",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {},
  "script": {
      "echo": "echo hello!"
  }
}
```

要執行 echo 的腳本，在 cmd 中下 npm run echo。任何的腳本，必須透過 npm run \<script name> 來執行腳本。

npm 同樣也有幾個官方的腳本，可以在套件的生命週期的某些階段執行。

npm 腳本大部分被使用來啟動伺服器、建立專案以及執行測試，如下所示:
```javascript
"scripts": {
    "test": "mocha tests",
    "start": "pm2 start index.js"
}
```

在腳本條目中，命令行程式像是 mocha 在全域或是本地安裝都可以執行。如果系統 PATH 中並不存在命令行條目，則 npm 也會檢查本地套件是否有安裝。

如果你的腳本很長，則可以將他們分成幾個部分
```javascript
"scripts: {
    "very-complex-command": "npm run chain-1 && npm run chain-2",
    "chain-1": "webpack",
    "chain-2": "node app.js"
}
```

### 2.8 Listing currently installed packages
要產生當前已安裝套件的列表 (樹狀顯示)，請使用:
- npm list

ls, la 以及 ll 都是 list 的指令，而 la 以及 ll 指令顯示更多資訊像是描述以及儲存庫

**Options**
可透過傳遞選向來改變回應格式

- npm list --json
  - json: 以 json 格式顯示資訊
  - long: 顯示擴展資訊
  - parseable: 顯示套件路徑而非樹狀結構
  - global: 顯示全域安裝的套件
  - depth: 相依樹的最大顯示深度
  - dev/development: 顯示 devDependencies
  - prod/production: 顯示 dependencies

如果你需要，你也可以跳至套件的網站首頁
- npm home \<package name>

### 2.9 Updating npm and packages
因為 npm 自己本身就是 Node.js 的模組，可以使用自己更新

如果 OS 是 windows 必須以系統身分執行
- npm install -g npm@latest

如果你想要檢查更新版本
- npm outdated
  
如果要升級指定套件
- npm update \<package name>
> 這將會根據 package.json 中的限制將套件更新為最新版本

如果你想要將更新的版本鎖定在 package.json 中
- npm update \<package name> --save

