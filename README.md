# 了解定義函式的適當位置以及 useCallback 的使用

## useCallback

```js
const memoizedFunction = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

## 補充閱讀

- [談談 JavaScript 中 by reference 和 by value 的重要觀念](https://pjchender.blogspot.com/2016/03/javascriptby-referenceby-value.html)：如果仍然不清楚「物件」、「函式」為什麼內容相同但使用 `===` 比對時會不同，可以參考這篇
- [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)：這篇文章提到是否有使用 useCallback 或 useMemo 來提升效能的必要
