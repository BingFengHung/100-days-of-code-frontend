# 100 days of code front end - Day 09

## 前言
昨天是最後一天的 HTML，但我覺得 HTML 有很多東西要學，之後再持續將要學習的部分補齊，以下我先列出我覺得 HTML 還要再深入學習的地方。
- HTML 網頁切版
- 網頁命名規則
- 更多的練習

今天邁入第九天，終於進入到 CSS，我在學 HTML 的時候，或多或少都會碰到一點 CSS 的東西，對於前端人員來說 CSS 真的是很重要的一門技術，裡面也很多區塊切分的技巧，總於學到要如何將網站進行包裝的動作，其實之前就有接觸到，但是我總覺得一直學不起來，希望在這八天的 CSS 學習中，可以認真地把 CSS 的基礎打好，才有辦法做更炫麗的網頁。

另外，我覺得我之前的 HTML 作的筆記感覺不像是筆記，已經變成是翻譯本了，每一個字都翻譯真的是很沒效率，因此我決定從 CSS 開始，應該要找出重點的部分，不然每次讀一讀又開始習慣要把所有的內容記下來，不只很沒效率，而且又記不住。

## 筆記
### 1. Getting started with CSS
#### 1.1 External Stylesheet
要使用外部 css 檔案只要使用 link 的元素標籤，記得要放在 head 標籤裡面，並且透過 href 指定外部 css 檔的相對路徑或是絕對路徑，並且要記得在 rel 的地方要加上 stylesheet 即可讓 html 套用 css 的樣式了。

```html
<link rel="stylesheet" href="1_1.css" />
```

`建議是將 link 標籤放在 head 標籤裡面，讓 css 樣式先加載進來，才不會說。不然使用者會先看到尚未加載前的基本元素，然後一個閃爍才變成樣式化過後的元素`

使用外部檔案的優勢在於，可以讓多個 html 檔案共用同一個 css 樣式，再進行樣式調整時，修改改一個 css 檔案裡面的屬性，所有 html 的樣式就修改完成，不需要在一個一個 html 檔案去進行調整。

css 檔案的載入順序很重要，後載入的檔案會覆蓋掉前一個 css 檔設定的樣式。

還有一些其他的 css 規則例如 '!important, specificity, inheritance' 之後應該會有介紹

當有某人瀏覽你的網站時，他們的瀏覽器會下載 html 檔案以及 css 檔案。然後當他們導覽到其他網頁時，他們的瀏覽器只會下載 html 檔案，因為 css 檔會被 cache ，因此不用再次下載。因為瀏覽器會緩存外部樣式表，因此頁面的加載速度會更快。

- 使用 link 載入外部 css 檔案
- css 模組化管理
- css 檔載入順序
- css 規則
- css 當會被 cache 

#### 1.2 Internal Styles
html 檔中使用 style 標籤在裡面撰寫 css 檔類似於外部匯入 css 檔，不同之處在於它位於 html 檔案中，而不是分開的檔案，因此只能 css 樣式只能套用在該 html 檔案。

這邊須注意，style 標籤必須要在 head 標籤裡面，與外部匯入 css 檔一樣的理由

```html
<head>
  <style>
    h1 {
      color: green;
      text-decoration: underline;
    }
    p {
      font-size: 25px;
      font-family: 'Trebuchet MS', sans-serif;
    }
  </style>
</head>
<body>
  <h1>Hello world!</h1>
  <p>I ♥ CSS</p>
</body>
```

#### 1.3 CSS @import rule
@import CSS 規則，用於從其他 css 檔載入其他樣式規則。  
這些規則必須在所有其他規則之前，除了 @charset 規則之外；  
由於 @import 並不是巢狀述句，因此 @import 不能使用在條件群組中

`在 style 中使用 @import`
```html
<style>
  @import url('/css/styles.css');
</style>
```

`外部樣式表`
可在其他 css 檔中，使用 @import 方式將其他 css 檔載入

```css
@import 'font.css';
h1 {
  color: green;
  text-decoration: underline;
}
p {
  font-size: 25px;
  /* 根據電腦是否有支援字形，從第一個設定的字形開始使用，如果
  不支援就使用後面排序的字形，當然使用者的電腦可能沒有這些字形
  我們也可以設定通用字形來使用 (serif, sans-serif, cursive, fantasy, monospace) 五種通用字形*/
  font-family: 'Trebuchet MS', sans-serif;
}
```
@import 規則的第二個可選參數是媒體查詢列表
```css
@import '/print-styles.css' print;
@import url('landscape.css') screen and (orientation:landscape);
```

#### 1.4 Inline Styles
使用 inline style 在指定的元素上面。為了讓 css 更好維護，不建議使用此方法。

inline styles 的樣式權重會比 style 標籤與外部 css 檔還要更高。

```html
<h1 style="color: green; text-decoration: underline;">Hello world!</h1>
<p style="font-size: 25px; font-family: 'Trebuchet MS';">I ♥ CSS</p>
```

#### 1.5 Changing CSS with JavaScript
`javascript`  
我們可以透過指定元素 id 或是 class 的方式，透過 javascript 仙取的物件元素，之後透過元素的 style 屬性，指定樣式屬性。

```javascript
var el = document.getElementById('element');
el.style.opacity = 0.5;
el.style.fontFamily = 'sans-serif';
```
這邊需要注意的是，在 javascript 中，元素的屬性都是使用 lower camel case 的命名規則，例如在 css 中的 font-family 在 javascript 中就是 fontFamily。

也可以透過 javascript 創建 style 或是 link 的標籤，然後直接將他們加到 body 或是 head 裡面，而不是指定元素的方法。

`jQuery`  
透過 jQuery 改變 css 屬性
```javascript
$('#element').css('margin', '5px');

$('#element').css({
  margin: "5px",
  padding: "10px",
  color: "black"
});
```

#### 1.6 Styling List with CSS
共有三種 style list 的屬性
- list-style-type
- list-style-image
- list-style-position

`list-style-type` 定義列表標籤的樣式
- disc
- circle
- square
- decimal
- lower-roman
- upper-roman
- none

```css
li {
  list-style-type: square;
}
```

`list-style-image` 讓你的列表標籤顯示圖片
```css 
li {
    list-style-image: url(images/bullet.png);
}
```

`list-style-position` 可定義列表標籤的位置 inside 或是 outside
```html
li {
    list-style-position: none;
}
```