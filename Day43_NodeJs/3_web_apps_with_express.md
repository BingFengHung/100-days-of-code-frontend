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

你可以