# 【從 Hooks 開始，讓網頁 React 起來】台灣好天氣 - 臺灣即時天氣 App 🇹🇼

## create-react-app 補充

### create-react-app v4

在 2020-10-23 之後使用的 create-react-app 將會是 v4，第四版後建立的專案預設將不會包含 Progressive Web App (PWA) 中使用 service worker 在內，若你希望建立的是包含有 service worker，的 React 專案，請使用：

```bash
# my-app 請換成專案想要的名稱
$ npx create-react-app my-app --template cra-template-pwa
```

如果你的專案已經完成，但先前沒套用到 pwa 的 template 的話，可以參考這個 repository 把對應和 PWA 有關的檔案複製到 src 中：

[cra-template-pwa](https://github.com/cra-template/pwa/tree/master/packages/cra-template-pwa/template/src)

### 升級到 create-react-app v4

如果你是在 2020-10-23 安裝前安裝的 create-react-app，當時還是 create-react-app v3，可以透過下述指令升級到 create-react-app v4：

```bash
$ npm install --save --save-exact react-scripts@4.0.0
```

> [ChangeLog](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md)

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
