# 快速了解各元件的資料狀態 - React Developer Tools

## 本單元中使用到的網址

React Developer Tools 下載連結：

- Chrome：[https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- Firefox：[https://addons.mozilla.org/zh-TW/firefox/addon/react-devtools/](https://addons.mozilla.org/zh-TW/firefox/addon/react-devtools/)

## React Developer Tools 補充說明

### Components 中的其他功能

React 開發者工具除了上述常用的功能之外，右邊也有一些按鈕可以使用：

![Imgur](https://i.imgur.com/XuFDInU.png)

- 點擊「碼表」適合用在有套用 [`React.Suspense`](https://reactjs.org/docs/react-api.html#reactsuspense) 的元件，這種元件因為需要等到 AJAX 資料回來後才會開始轉譯對應的畫面，因此會需要有「等待」的畫面，在我們目前的專案中並不會使用到這個功能）。
- 點擊「眼睛」會直接切換到 `Elements` 頁籤，讓你看到該元件在 DOM 中的位置，方便透過瀏覽器直接去調整 CSS 樣式。
- 點擊「蟲蟲」後會在 `console` 頁籤顯示該元件有關的資料狀態，方便複製或透過 JavaScript 直接在該頁籤操作資料。
- 點擊「原始碼」會直接切換到 `Sources` 頁籤，並顯示該元件位於程式碼中的哪個部分，在偵錯時也非常方便。

### 效能檢視 Profilers

此外，除了 `Components` 頁籤之外，React 開發者工具中還提供了一個 `Profilers` 頁籤，這個頁籤主要是用來**檢視效能**的，當網頁中有很多元件需要轉譯，而且又需要透過非同步的方式取得資料回來更新畫面的情況下，有些時候再資料狀態沒有處理好的情況下，可能會使得這些元件多了一些不必要的轉譯次數。

在這種情況下，透過 `Profilers` 頁籤可以去看該頁面內各元件轉譯所花費的時間和次數。要使用這個工具需要點選錄影的「●」符號開始記錄，接下來可以按下右方的「重新整理」按鈕，然後正常操作該頁面，要結束時只要再點選一次錄影符號即會停止紀錄。

在 Profilers 的設定中（齒輪符號）可以開啟提示，React 開發者工具就會提示你該元件重新轉譯的原因，這一點在實際開發要找問題的時候還蠻方便的：

![Imgur](https://i.imgur.com/3W6Thct.png)

由於我們的台灣好天氣還沒有實際去改變資料狀態，所以從 Profiler 的功能你看不出資料狀態導致畫面更新的效果，但你可以從先前完成的兩個專案中去使用看看這個功能。
