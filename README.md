# Uncontrolled components 和 useRef 的使用

## [補充] 在 Functional Component 中建立不會導致畫面更新的變數 - useRef 的更多說明

實際上 `useRef` 做的事就是建立並回傳一個帶有 `current` 屬性的物件，就像是自己在 React 元件中建立一個值為 `{ current: '' }` 的變數，但重要的差別在於，我們知道每一次 React 元件在重新轉譯時，該元件中的內容雖然看起來一模一樣，但實際上內部的函式和物件其實都是全新獨立的，而**透過 `useRef` 就可以幫助開發者，即使在元件重新轉譯後，仍可以去取得同一個物件，並取出內部的值來用**。

具體來說，`useRef` 除了可以搭配 `ref` 指稱到某一 HTML 元素來使用之外，**當我們在 React 元件中想要定義一些「變數」，但當這些變數改變時，又不需要像 `state` 一樣會重新導致畫面轉譯的話，就很適合使用 `useRef`。**

例如說，有些時候想要看某個元件被重新轉譯了幾次，因為使用 `useRef` 產生的變數在設值時不會導致額外的重新轉譯，因此可以類似這樣寫：

```jsx
// STEP 1：從 react 中載入 useRef
import React, { useRef } from 'react';

const RefExample = () => {
  // STEP 2：將 renderCount 的預設值設為 0
  const renderCount = useRef(0);

  return (
    <div>
      {/* STEP 3：每次畫面轉譯時就將 renderCount.current + 1 */}
      {renderCount.current += 1}

      {/* STEP 4：顯示這是該元件第幾次重新轉譯 */}
      {console.log('render', renderCount.current)}
      <h1> Hello, React </h1>
    </div>
  )
}
```

> 💡 重點：**透過 `useRef` 便可以在 Functional Component 中定義不會導致畫面重新轉譯的變數。**
