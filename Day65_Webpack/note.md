# 100 days of code front end - Day 63
## 前言
## Webpack Concepts
本質上，webpack 是一個針對現代 JavaScript 應用程式的靜態模組打包工具。當 webpack 處理你的應用程式時，它會在內部建構一個依賴關係圖，該圖匹配每一個你專案需要的模組並且產生一個或多個打包 (bundles)。

從 4.0.0 版本開始，webpack 不再需要配置檔案來打包你的你的專案。但是，它可以進行令人難以置信的配置，以更好的滿足你的需求。

在開始之前必須了解 webpack 的核心概念
- Entry
- Output
- Loaders
- Plugins
- Mode
- Browser Compatibility

### Entry
進入點指示 webpack 應該從哪一個模組開始建構其內部的依賴關係圖。 webpack 將找出進入點還依賴於 (直接與間接) 其他哪些模組和函式庫。

預設為 ./src/index.js，但是你可以透過在 webpack 配置指定 entry 屬性來指定不同的進入點或是多個進入點。

ex.

`webpack.config.js`

```javascript
module.exports = {
    entry: './path/to/my/entry/file.js'
};
```

### Output
output 屬性告訴 webpack 要在何處發出它建立的包以及如何命名這些檔案。預設為 ./dist/main.js 路徑， 對於任何其他生成的文件，預設為 ./dist 資料夾。

你可以配置此部分的過程，透過在配置檔中指定 output 欄位

`webpack.config.js`

```javascript
const path = require('path');

module.exports = {
    entry: './path/to/my/entry/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    }
}
```

在上面的範例中，我們使用 output.filename 以及 output.path 屬性來告訴 webpack 我們打包的名稱以及我們希望它在哪裡丟出打包後的檔案。

### Loaders
webpack 只能理解 JavaScript 以及 JSON 檔案。 Loaders 允許 webpack 處理其他類型的檔案並且將他們轉成有效的模組使其可以被你的檔案使用並且加入到依賴圖中。

在高端， loaders 在 webpack 配置中具有兩個屬性
1. test 屬性指示哪一個檔案應該被轉換
2. use 屬性指示哪一個 loader 應該被使用進行轉換

`webpack.config.js`
```javascript
const path = require('path');

module.exports = {
    output: {
        filename: 'my-first-webpack.bundle.js
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    }
}
```

上面的配置針對單一模組定義一個 rules 屬性，具有兩個必須的屬性: test 與 use。這會告訴 webpack 的編譯器如下:

> 嘿, webpack 編譯器，當你在 require() / import 語句遇到解析路徑為 '.txt' 文件的路徑時，請先使用 raw-loader 進行轉換，然後再加入到打包中。

### Plugins
儘管 loader 被使用來轉換某些類型的模組，但可以利用 plugins 來執行更廣泛的任務，例如打包優化、資產管理與環境變數的注入。

為了要使用 plugin，你需要 require() 插件並將其添加到 plugins 陣列中。
大部分 plugins 都可以透過選項自行定義。因為你可以在配置中多次使用 plugins 以實現不同的用途，因此你需要透過使用 new 運算符來建立 plugins 實例。

`webpack.config.js`
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');  // installed via npm 
const webpack = require('webpack');  // to access built-in plugins

module.exports = {
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};
```

在上面的範例， html-webpack-plugin 透過自動注入所有生成的包為你的應用程式生成 HTML 文件。

### Mode
透過設定 mode 參數 (development, production 或是 none)，可以啟用與每個環境相對應的 webpack 內建優化。預設值為 production
```javascript
module.exports = {
    mode: 'production'
}
```

### Browser Compatibility
webpack 支援所有符合 ES5 的瀏覽器 (不支援 IE8 以及以下版本)。webpack 需要 Promise 來 import() 與 require.ensure()。如果你想要支援舊版瀏覽器，你需要在使用這些表達式之前載入一個 polyfill。

### Environment
webpack 需要 Node.js 8.x 以上的版本 