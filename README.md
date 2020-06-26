# 使用 emotion 完成台灣好天氣 UI

## 本單元使用到的網址

- `App.js` 中 Styled Components 的樣式部分：[https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/blob/create-ui/public/create-ui-styled-components.js](https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/blob/create-ui/public/create-ui-styled-components.js)

## 補充內容

### 在 React 中載入 SVG 圖示的方法

在 React 中載入 SVG 圖示的方法有兩中，書中我們主要使用的是第一種，也就是把 SVG 圖示當成 React 元件的方式來載入；另外也可以把 SVG 當成圖檔直接載入 `<img src="">` 內，以下說明這兩種不同方式的使用：

#### 方式一：ReactComponent

第一種方式是把 SVG 當成一個 React 元件加以載入，因為變成了 React 元件，所以後續如果有需要改變 SVG 的顏色或做動畫都比較靈活。寫法像這樣：

- STEP 1：將 `./images/cloudy.svg` 匯入，並將該元件命名為 `Cloudy` ，而 `ReactComponent` 是 create-react-app 提供的物件
- STEP 2：在需要的地方就可以使用 `<Cloudy />`

```jsx
// STEP 1：使用 import { ReactComponent as xxx } from xxx 載入 SVG
import { ReactComponent as DayCloudy } from './images/day-cloudy.svg';
import { ReactComponent as RainIcon } from './images/rain.svg';

const App = () => (
  <div>
    {/* STEP 2：直接使用該 Component */}
    <DayCloudy />
    <RainIcon />
  </div>
);
```

#### 方式二：直接 import SVG 並搭配 img

這種方法因為是把 SVG 以圖檔的形式載入，因此後續較難去修改 SVG 圖示的顏色、粗細或製作動畫等效果，但若單純只是要以圖檔呈現，使用這種方式較簡便：

- STEP 1：將 `./images/cloudy.svg` 匯入，匯入的內容會變成該圖檔的路徑
- STEP 2：使用 `<img src={...} />` 的方式將 SVG 圖片掛入

```jsx
// STEP 1：使用 import xxx from xxx 載入 cloudyIcon，會取得該圖檔路徑
import dayCloudy from './images/day-cloudy.svg';
import rainIcon from './images/rain.svg';

const App = () => (
  <div>
    {/* STEP 2：透過 src 把 SVG 圖片呈現出來 */}
    <img src={dayCloudy} alt="cloudy icon" />
    <img src={rainIcon} alt="rain icon" />
  </div>
);
```

> ⚠️ 提醒：上述這兩種載入 SVG 圖檔的方式都需要使用 [create-react-app](https://ithelp.ithome.com.tw/articles/[https://create-react-app.dev](https://create-react-app.dev/)) 來建立專案才可以使用，否則需要自行在 WebPack 中建立對應的設定才行。

### 透過 Emotion 定義許多元件都會共用到的樣式

有時多個元件間還是可能有需要被共用的樣式，像是如果每個按鈕都有固定的外觀，只是不同按鈕元件的顏色有不同時，如果重複在每個按鈕元件都撰寫同樣的 CSS 樣式會變得有點多餘，而且若之後需要修改按鈕的外觀，還得要每支檔案一支一支改，但卻又不想定義 class 樣式來套用時，可以怎麼做呢？

既然在 Emotion 所寫的 CSS 樣式都是 JavaScript 中的一部分，我們自然可以把撰寫好的 CSS 樣式當作 JavaScript 函式保存起來，步驟如下：

1. 從 `@emotion/core` 中匯入 Emotion 提供的 `css` 函式

```jsx
// STEP 1：匯入 Emotion 提供的 css 函式
import { css } from '@emotion/core';
```

2. 定義帶有 CSS 樣式的函式

```jsx
// STEP 2：將一批 CSS 樣式定義成 JavaScript 函式
const buttonDefault = () => css`
  background-color: transparent;
  color: #212121;
`;
```

3. 在 Styled Components 中套用定義好的樣式

```jsx
// STEP 3 在定義 Styled Components 時載入定義好的 CSS 樣式
// 和 CSS 一樣，同樣的樣式後面寫的會覆蓋前面寫的
const Button = styled.button`
  ${buttonDefault}
  background-color: green;
`;
```

> 💡 小提醒：要留意一下，`buttonDefault` 是函式，因此可以在 Styled Components 中透過 `${}` 的方式來加以執行，就和取得 props 的方式一樣。

## 版權宣吿

- 台灣好天氣的設計畫面主要參考 imgur 上的圖片 ([https://imgur.com/ZLgiOyj](https://imgur.com/ZLgiOyj))
- 天氣圖示來自 IconFinder 上 The Weather is Nice Today 所提天（[https://www.iconfinder.com/iconsets/the-weather-is-nice-today](https://www.iconfinder.com/iconsets/the-weather-is-nice-today)）
