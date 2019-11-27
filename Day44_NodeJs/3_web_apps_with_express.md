## 3. Web Apps with Express
Express 是一個小型且彈性的 Node.js web 應用程式框架，提供穩固的幾個功能來建立網路應用程式。

### 3.1. Getting Started
1. npm install express --save
2. create a file name it app.js

```javascript
const express = require('express');
const app = express();

app.get('/ping', (request, response) => {
    response.send('pong');
});

app.listen(8080, 'localhost');
```

3. run: node app.js

如果 app.listen 的主機名稱省略，server 會接受機器的 IP 位置同樣是 localhost。如果 port 的值設定為 0，則作業系統會分配沒在使用的 port

### 3.2. Basic routing
你可以像上面提到的一樣定義路由
```javascript
app.get('/someUri', function(req, res, next){});
```
上面的程式結構剁於所有的 HTTP 方法都是一樣的寫法，並且該結構中預期第一個參數是路徑，然後有一個處理器回覆此路徑，處理器會接收要求並且回傳物件。

```javascript
// GET www.domain.com/myPath
app.get('/myPath', function (req, res, next) {})
// POST www.domain.com/myPath
app.post('/myPath', function (req, res, next) {})
// PUT www.domain.com/myPath
app.put('/myPath', function (req, res, next) {})
// DELETE www.domain.com/myPath
app.delete('/myPath', function (req, res, next) {})
```

你想要為路由和所有 HTTP 方法定義相同的行為可以使用:
- app.all('/myPath', function(req, res, next) {});
- app.use('/myPath', function(req res, next){});
- app.use('*', function(req, res, next){});

你可以鏈結你的路由定義透過一個單一路徑
```javascript
app.route('/myPath')
   .get(function(req, res, next){})
   .post(function(req, res, next){})
   .put(function(req, res, next){})
```

你同樣可以加入 function 到 HTTP 方法。這個 function 會在最後 callback function 之前執行並且將 req, res, next 的參數帶入
- app.get('/myPath', myFunction, function(req, res, next){});

### 3.3. Modular express application
要使用 express web framework 模組化，請使用路由器工廠:

#### Module:
```javascript
// greet.js
const express = require('express');

module.exports = function(options = {}) {
    // Router factory
    const router = express.Router();
    
    router.get('/greet', (req, res, next) => {
        res.end(options.greeting);
    });
    return router;
}
```

#### Application
```javascript
// app.js
const express = require('express');
const greetMiddleware = require('./greet.js');
express()
.use('/api/v1/', greetMiddleware({ greeting:'Hello world' }))
.listen(8080);
```