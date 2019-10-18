# 100 days of code front end - Day 05

## 前言

昨天主要學習 image, image map 以及 input ，image 的話就很單純的讀檔案進來或是從 url 讀取圖片進來，除了上述兩種方法之外還可以使用內嵌 base64 的編碼格式來呈現圖片，裡面有一句話很重要圖片並不是插入到 HTML 頁面中的，而是 img 標籤會建立一個引用空間，將圖片引用進來 (雖然我不知道這樣的說法與插入圖片有什麼差別)，在圖片中有一個 alt 的屬性，當圖片加載失敗時，會使用替代文字替換 (也可提供給視障以及搜尋引擎查看)，另外 srcset 以及 sizes 的屬性兩個搭配起來就可以讓圖片具有響應式的功能 (sizes 像是媒體查詢)；再來是 image maps 其實就是讓圖片具有超連結的功能，比較有趣的用法是，載入一張圖片，然後在圖片中分出要連結的區塊，類似分割圖片，每個分割的區塊可以進行超連結；最後是 input 裡面就主要是可以設定不同的 type 每一個 type 對應不同的輸入功能，有些 type 還具有驗證功能，方便使用。

昨天再看 input control 那一章的時候，突然有種茅塞頓開的感覺，因為之前在使用 input 的時候，都會以為 checkbox 以及 radio button 其實是不同的 control ，沒想到在 HTML 的世界中只要修改 type 的樣式就可以達到不同的輸入樣式(使用太多 .net 系列產品的後果)，也因為 input 比較多東西，有些後面的小章節也是拿到今天才讀完，總之，持續讀下去，總會讀出一片天的!!

## 筆記

### 18. Forms

#### 18.1 Submitting

#### 18.2 Target attribute in form tag

#### 18.3 Uploading Files

#### 18.4 Grouping a few input fields

### 19. Div Element

#### 19.1 Basic usage

#### 19.2 Nesting

### 20. Sectioning Elements

#### 20.1 Nav Element

#### 20.2 Article Element

#### 20.3 Main Element

#### 20.4 Header Element

#### 20.5 Footer Element

#### 20.6 Section Element
