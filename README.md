# 【從 Hooks 開始，讓網頁 React 起來】台灣好天氣 - 臺灣即時天氣 App 🇹🇼

## create-react-app 更新異動

create-react-app 在 v4 版本的 API 有變更，建立專案時請以下述指令執行，才會開啟 Progressive Web App 的功能：

```bash
# <my-app> 請換成專案想取的名稱
npx create-react-app <my-app> --template cra-template-pwa
```

進一步的說明請參考 [CRA 建立專案方式異動](https://pjchender.github.io/react-bootcamp/docs/book)

## emotion 更新異動

在 emotion 11 中，將原本的套件名稱從 `@emotion/core` 改為 `@emotion/react`，並將 `emotion-theming` 這個套件整併到 `@emotion/react` 內。因此在安裝 emotion 時，可將指令修改為：

```bash
# 安裝 emotion11
npm install @emotion/react @emotion/styled
```

進一步的說明請參考 [emotion 安裝方式異動](https://pjchender.github.io/react-bootcamp/docs/book/errata/emotion)

## 更新日出日落的資料

由於中央氣象局提供的日出日落時間資料有限（通常是兩年內），所以一旦過了這個時間就需要重新抓取。這裡已經寫好對應的指令來自動更新，使用者只需要：

1. 在專案根目錄建立 `.env` 並且放入 API 授權碼

```
# .env
REACT_APP_API_AUTHORIZATION_KEY=CWB-***-***
```

2. 接著即可透過下述指令自動更新資料：

```bash
$ npm run build:sunrise-sunset
```

如果想要手動更新檔案，則可以：

1. 到中央氣象局網站抓取「[日出日落時刻](https://opendata.cwb.gov.tw/dataset/astronomy/A-B0062-001)」的資料，並將資料存檔到 `src/scripts/generateSunriseAndSunsetData/A-B0062-001.json`

2. 執行 `npm run build:process-sunrise-sunset`，執行完畢後，就可以在 `src/utils/` 中有一份 `sunrise-sunset.json` 檔案，這檔案就是我們要的日出日落時間資料。

## 補充連結

### 學習 React 前可以閱讀

- [JavaScript to Know for React](https://kentcdodds.com/blog/javascript-to-know-for-react)

### React 相關

- [React](https://reactjs.org/docs/getting-started.html) @ React
- [Codecademy Learn React.js](https://www.codecademy.com/learn/react-101)
- [React Router](https://reactrouter.com/)
- [Redux](https://redux.js.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

### Styled Components 相關

- [The magic behind 💅 styled-components](https://mxstbr.blog/2016/11/styled-components-magic-explained/)：說明 styled component 如何使用 template literal 中的 tagged template 方式，來取得元件中 props 的值

### 部署屬相關

- [Git 安裝教學](https://git-scm.com/book/zh-tw/v2/%E9%96%8B%E5%A7%8B-Git-%E5%AE%89%E8%A3%9D%E6%95%99%E5%AD%B8) @ Git
- [Github Page](https://pages.github.com/) @ Github

### 其他

- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) @ MDN
- [Progressive Web Apps](https://web.dev/progressive-web-apps/) @ Web.dev

## 版權宣告

- 台灣好天氣的設計畫面主要參考 imgur 上的圖片 ([https://imgur.com/ZLgiOyj](https://imgur.com/ZLgiOyj))
- 天氣圖示來自 IconFinder 上 The Weather is Nice Today 所提天（[https://www.iconfinder.com/iconsets/the-weather-is-nice-today](https://www.iconfinder.com/iconsets/the-weather-is-nice-today)）
