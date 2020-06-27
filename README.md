# 將資料帶入畫面中 - useState 的使用

## 單元中使用到的連結

- Intl: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) @ MDN

## 單元中會使用到的程式碼

```jsx
const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');ㄏ

  // 定義會使用到的資料狀態
  const [currentWeather, setCurrentWeather] = useState({
    locationName: '臺北市',
    description: '多雲時晴',
    windSpeed: 1.1,
    temperature: 22.9,
    rainPossibility: 48,3,
    observationTime: '2020-12-12 22:10:00',
  });
  // ...
}
```
