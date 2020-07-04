# 根據天氣代碼顯示天氣圖示 - useMemo 的使用

## useMemo 的基本使用

```js
const memoizedValue = useMemo(() => {
  const result = computeExpensiveValue(a, b);
  return result;
}, [a, b]);
```

## 版權聲明

- 天氣圖示取自 IconFinder 上 The Weather is Nice Today（[https://www.iconfinder.com/iconsets/the-weather-is-nice-today](https://www.iconfinder.com/iconsets/the-weather-is-nice-today)）。
