### 29. IFrames

#### 29.1

IFrame 代表內部的 Frame。他可以包含其他的網頁在你的網頁中。這會產生一個小框架來顯示 base.html 這個的外部內容

```html
<iframe src="base.html"></iframe>
```

#### 29.2 Sandboxing

底下的內嵌啟用了限制所有不信任的網站

```html
<iframe sandbox src="http://example.com/"></iframe>
```

為了允許網頁執行 script 以及提交標單，加入 allow-scripts 與 allow-form 在 sandbox 這個屬性中

```html
<iframe sandbox="allow-scripts allow-forms" src="http://example.com"></iframe>
```

如果再與父網頁相同的 domain 中存在不受信任的內容 (如用戶頻論)，則可以使用 iframe 進用 script，同時仍然允許這兩個檔案使用 javascript 與他的內容進行交握

```html
<iframe
  sandbox="allow-same-origin allow-top-navigation"
  src="http://example.com/untrushted/comments/page2"
></iframe>
```

父文檔可以加入事件監聽以調整 iframe 大小來充滿內容。 allow-navigation 可以讓 sandbox 的 iframe 變成父文檔的一部分。

#### 29.3 Setting the Frame Size

```html
<iframe src="base.html" width="800" height="600"></iframe>
```

#### 29.4 Using the 'srcdoc' Attribute

srcdoc 屬性可以被使用來指定額外的內容

```html
<iframe srcdoc="<p>IFrames are cool!"</p></iframe>
```

<iframe srcdoc="<p>IFrames are cool!"</p></iframe>

如果 srcdoc 屬性並沒有被瀏覽器支援，IFame 將會用 src 裡面的連結替代，但如果網頁有支援，兩個屬性都有給予，則會優先使用 srcdoc 屬性

```html
<iframe srcdoc="<p>Iframes are cool!</p>" src="base.html"></iframe>
```

#### 29.5 Using Anchors with iFrame

通常，從 iframe 中開始在 iframe 進行網頁更改，例如，點擊 iframe 的連結。但是可以從 iFrame 外部修改 iFrame 內容。
如下所示

```html
<iframe src="webpage.html" name="myIframe"></iframe>
<a href="different_webpage.html" target="myIframe"
  >Change the Iframe content to different_webpage.html</a
>
```

### 30. Content Language

#### 30.1 Base Document Language

在 html 元素中加入主要的語言是好的做法

```html
<html lang="en"></html>
```

如果文檔中沒有指定其他的 lang 屬性，則表示所有內容 (即元素內容和屬性文本值) 都使用該語言

如果文檔包含其他的語言，則這些部分應該有自己的語言屬性，來覆蓋語言宣告

#### 30.2 Element Language

lang 屬性也被使用於指定元素內容與屬性值

```html
<p lang="en">The content of this element is in English.</p>
<p lang="en" title="The value of this attribute is also in English.">
  The content of this element is in English.
</p>
```

語言宣告繼承

```html
<div lang="en">
  <p>This element contains English content.</p>
  <p title="This attribute, too.">Same with this element.</p>
</div>
```

#### 30.3 Elements with Multiple Languages

你可以複寫語言的宣告

```html
<p lang="en">
  This English sentence contains the German word <span lang="de">Hallo</span>.
</p>
```

#### 30.4 Regional URLs

可將屬性 hreflang 添加到要建立超連結的元素 a 或是 area 。這樣指定了連結資源的語言。

```html
<p>
  <a href="example.org" hreflang="en">example.org</a> is one of IANA's example
  domains.
</p>
```

#### 30.5 Handling Attribute with Different Languages

通過引入具有自己的 lang 屬性的 applet，base，basefont，br，frame，frameset，hr，iframe，meta，param，script（HTML 4.0）之外的任何元素，可以“覆蓋”父元素的語言聲明：

```html
<p lang="en" title="An English paragraph">
  <span lang="de" title="A German sentence">Hallo Welt!</span>
</p>
```
