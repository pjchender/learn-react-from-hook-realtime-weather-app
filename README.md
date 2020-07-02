# 將天氣代碼轉換為天氣圖示

## WeatherIcon 元件

- [./src/components/WeatherIcon.js](https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/blob/weather-code-to-weather-type/src/components/WeatherIcon.js)

### 載入所有天氣圖示：

```js
// ./src/components/WeatherIcon.js

import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as DayThunderstorm } from './../images/day-thunderstorm.svg';
import { ReactComponent as DayClear } from './../images/day-clear.svg';
import { ReactComponent as DayCloudyFog } from './../images/day-cloudy-fog.svg';
import { ReactComponent as DayCloudy } from './../images/day-cloudy.svg';
import { ReactComponent as DayFog } from './../images/day-fog.svg';
import { ReactComponent as DayPartiallyClearWithRain } from './../images/day-partially-clear-with-rain.svg';
import { ReactComponent as DaySnowing } from './../images/day-snowing.svg';
import { ReactComponent as NightThunderstorm } from './../images/night-thunderstorm.svg';
import { ReactComponent as NightClear } from './../images/night-clear.svg';
import { ReactComponent as NightCloudyFog } from './../images/night-cloudy-fog.svg';
import { ReactComponent as NightCloudy } from './../images/night-cloudy.svg';
import { ReactComponent as NightFog } from './../images/night-fog.svg';
import { ReactComponent as NightPartiallyClearWithRain } from './../images/night-partially-clear-with-rain.svg';
import { ReactComponent as NightSnowing } from './../images/night-snowing.svg';

// ...
```

### 定義天氣代碼（weatherCode）和天氣型態（weatherType）之間的關係

```js
// ./src/components/WeatherIcon.js

// ...

const weatherTypes = {
  isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
  isClear: [1],
  isCloudyFog: [25, 26, 27, 28],
  isCloudy: [2, 3, 4, 5, 6, 7],
  isFog: [24],
  isPartiallyClearWithRain: [
    8, 9, 10, 11, 12, 13,
    14, 19, 20, 29, 30, 31,
    32, 38, 39,
  ],
  isSnowing: [23, 37, 42],
};
```

### 根據「天氣型態」顯示對應的「天氣圖示」

```js
// ./src/components/WeatherIcon.js
// ..

const weatherTypes = { /* ... */};

const weatherIcons = {
  day: {
    isThunderstorm: <DayThunderstorm />,
    isClear: <DayClear />,
    isCloudyFog: <DayCloudyFog />,
    isCloudy: <DayCloudy />,
    isFog: <DayFog />,
    isPartiallyClearWithRain: <DayPartiallyClearWithRain />,
    isSnowing: <DaySnowing />,
  },
  night: {
    isThunderstorm: <NightThunderstorm />,
    isClear: <NightClear />,
    isCloudyFog: <NightCloudyFog />,
    isCloudy: <NightCloudy />,
    isFog: <NightFog />,
    isPartiallyClearWithRain: <NightPartiallyClearWithRain />,
    isSnowing: <NightSnowing />,
  },
};

// ...
```

### 將天氣代碼轉換為要顯示的天氣型態

```js
const weatherTypes = {/* ... */}

// 使用迴圈來找出該天氣代碼對應到的天氣型態
const weatherCode2Type = (weatherCode) => {
  const [weatherType] =
    Object.entries(weatherTypes).find(([weatherType, weatherCodes]) =>
      weatherCodes.includes(Number(weatherCode))
    ) || [];

  return weatherType;
};

// 假設從 API 取得的天氣代碼是 1
const weatherCode = 1;
console.log(weatherCode2Type(weatherCode)); // isClear
```


## 補充內容：天氣代碼轉換成天氣圖示的邏輯

為了避免資料處理的部分偏離的讀者們學習 React 的重點，這裡筆者先將資料做過整理，讀者們可以透過下面的說明了解整理的流程即可。

從中央氣象局提供的「[預報XML產品預報因子欄位中文說明表](https://opendata.cwb.gov.tw/opendatadoc/MFC/D0047.pdf) 」這份文件的第四頁中，可以看到所有的 **天氣代碼（分類代碼）** 一共有 42 種：

![imgur](https://i.imgur.com/vDsvwbm.png)

這裡將會根據中央氣象局提供的「天氣代碼（Code）」來對應到「天氣類型」，之所以會需要定義「天氣代碼」到「天氣類型」的對應表，是因為在「[預報XML產品預報因子欄位中文說明表](https://opendata.cwb.gov.tw/opendatadoc/MFC/D0047.pdf) 」中，不同的「天氣代碼」會對應到相同或相似的「天氣類型」，以下圖為例，可以看到「天氣代碼」為 15, 16, 17, 18 時，對應到的天氣類型都屬於「雷雨」：

![imgur](https://i.imgur.com/1B5yMni.png)

因此，會需要一個對應表來把這些「天氣代碼」對應到「天氣型態」，筆者已經把這些天氣代碼與天氣型態間的對應關係整理好，建立一個名為 `weatherTypes` 的變數，並放到 `./src/components/WeatherIcon.js` 中：

```jsx
// ./src/components/WeatherIcon.js
// ...
const weatherTypes = {
  isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
  isClear: [1],
  isCloudyFog: [25, 26, 27, 28],
  isCloudy: [2, 3, 4, 5, 6, 7],
  isFog: [24],
  isPartiallyClearWithRain: [
    8, 9, 10, 11, 12,
    13, 14, 19, 20, 29, 30,
    31, 32, 38, 39,
  ],
  isSnowing: [23, 37, 42],
};
```

## 本單元使用的連結

- [weatherCode2Type](https://repl.it/@PJCHENder/weatherCode2Type) @ repl.it
- 中央氣象局提供的「[預報XML產品預報因子欄位中文說明表](https://opendata.cwb.gov.tw/opendatadoc/MFC/D0047.pdf) 」
- [Array.prototype.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) @ MDN
- [Array.prototype.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) @ MDN

## 版權聲明

- 天氣圖示取自 IconFinder 上 The Weather is Nice Today（[https://www.iconfinder.com/iconsets/the-weather-is-nice-today](https://www.iconfinder.com/iconsets/the-weather-is-nice-today)）。
