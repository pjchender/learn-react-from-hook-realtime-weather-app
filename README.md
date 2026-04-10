# 【從 Hooks 開始，讓網頁 React 起來】台灣好天氣 - 臺灣即時天氣 App 🇹🇼

## 建立專案方式說明

> **注意：** Create React App (CRA) 已於 2023 年停止維護，React 官方不再建議使用。如果你要建立新的 React 專案，建議使用以下替代方案：
>
> - [Vite](https://vite.dev/) — 輕量快速的建置工具，適合 SPA 開發
> - [Next.js](https://nextjs.org/) — 支援 SSR/SSG 的全端 React 框架
> - [Remix](https://remix.run/) — 以 Web 標準為核心的全端框架
>
> 本專案原先使用 CRA 建立，目前仍可正常運作。若未來要遷移，建議使用 Vite。

原先建立專案的指令（僅供參考）：

```bash
# <my-app> 請換成專案想取的名稱
npx create-react-app <my-app> --template cra-template-pwa
```

## emotion 安裝方式

在 emotion 11 中，將原本的套件名稱從 `@emotion/core` 改為 `@emotion/react`，並將 `emotion-theming` 這個套件整併到 `@emotion/react` 內。因此在安裝 emotion 時，使用以下指令：

```bash
npm install @emotion/react @emotion/styled
```

進一步的說明請參考 [emotion 官方文件](https://emotion.sh/docs/introduction)

## 更新日出日落的資料

由於中央氣象署（原中央氣象局，已於 2023 年改制）提供的日出日落時間資料有限（通常是兩年內），所以一旦過了這個時間就需要重新抓取。這裡已經寫好對應的指令來自動更新，使用者只需要：

1. 在專案根目錄建立 `.env` 並且放入 API 授權碼

```
# .env
REACT_APP_API_AUTHORIZATION_KEY=CWA-***-***
```

2. 接著即可透過下述指令自動更新資料：

```bash
$ npm run build:sunrise-sunset
```

如果想要手動更新檔案，則可以：

1. 到[中央氣象署開放資料平臺](https://opendata.cwa.gov.tw/)抓取「日出日落時刻」的資料，並將資料存檔到 `src/scripts/generateSunriseAndSunsetData/A-B0062-001.json`

2. 執行 `npm run build:process-sunrise-sunset`，執行完畢後，就可以在 `src/utils/` 中有一份 `sunrise-sunset.json` 檔案，這檔案就是我們要的日出日落時間資料。

## 補充連結

### 學習 React 前可以閱讀

- [JavaScript to Know for React](https://kentcdodds.com/blog/javascript-to-know-for-react)

### React 相關

- [React 官方文件](https://react.dev/) — React 全新官方文件（2023 年起改版）
- [React 學習教學](https://react.dev/learn) — 官方推薦的入門教學
- [React API 參考](https://react.dev/reference/react) — Hooks、Components 等 API 參考
- [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/) — Redux 官方推薦的工具集
- [Zustand](https://zustand.docs.pmnd.rs/) — 輕量級狀態管理
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

### CSS-in-JS 相關

- [Emotion 官方文件](https://emotion.sh/docs/introduction)
- [The magic behind 💅 styled-components](https://mxstbr.blog/2016/11/styled-components-magic-explained/)：說明 styled component 如何使用 template literal 中的 tagged template 方式，來取得元件中 props 的值

### 部署相關

- [Git 安裝教學](https://git-scm.com/book/zh-tw/v2/%E9%96%8B%E5%A7%8B-Git-%E5%AE%89%E8%A3%9D%E6%95%99%E5%AD%B8) @ Git
- [GitHub Pages](https://pages.github.com/) @ GitHub

### 其他

- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) @ MDN
- [Progressive Web Apps](https://web.dev/explore/progressive-web-apps) @ Web.dev

## 版權宣告

- 台灣好天氣的設計畫面主要參考 imgur 上的圖片 ([https://imgur.com/ZLgiOyj](https://imgur.com/ZLgiOyj))
- 天氣圖示來自 IconFinder 上 The Weather is Nice Today 所提天（[https://www.iconfinder.com/iconsets/the-weather-is-nice-today](https://www.iconfinder.com/iconsets/the-weather-is-nice-today)）
