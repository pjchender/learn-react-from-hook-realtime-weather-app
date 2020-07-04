# 根據白天或夜晚顯示不同的主題配色

請將 [`./src/utils/helpers.js`](https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/blob/get-moment-from-sunrise-sunset/src/utils/helpers.js) 中的程式內容，複製一份到自己本機專案中。

## 單元中網址

- [日出日沒時刻-全臺各縣市年度逐日日出日沒時刻資料](https://opendata.cwb.gov.tw/dataset/astronomy/A-B0062-001) @ 中央氣象局

## 補充內容

### 取得日出與日落資料

既然要做我們就做得精準一些。這裡我們發現中央氣象局雖然沒有提供查詢日出日落的 API，但是在「資料主題」的「天文」中，有提供「[日出日沒時刻-全臺各縣市年度逐日日出日沒時刻資料](https://opendata.cwb.gov.tw/dataset/astronomy/A-B0062-001)」的 JSON 檔可以下載：

[https://opendata.cwb.gov.tw/dataset/astronomy/A-B0062-001](https://opendata.cwb.gov.tw/dataset/astronomy/A-B0062-001)

![imgur](https://i.imgur.com/XC5th0T.png)

下載後會發現這包檔案資料還蠻大的，這個 JSON 物件中我們需要用到的日出日落資料主要在 `dataset.locations.location` 中：

![imgur](https://i.imgur.com/DhPAd2e.png)

`location` 這個陣列中包含台灣各地區日出和日落的時間，而陣列元素中（例如，新北市）的 `time` 欄位中包含兩個屬性，分別是 `dataTime` 和 `parameter`。從 `dataTime` 可以看到這份資料函括的時間從 2020 年的開始，一直到 2022 年的結束，也就是說這份檔案至少可以使用 2 年的時間。

> 💡中央氣象局每隔一段時間會更新這份檔案，讓使用者可以取得未來更久後的日出日落時間。

在 `parameter` 屬性中則可以看到，它不只列出了「日出」、「日落」時間，還列出「民用曙光」、「方位」、「仰角」...等資訊。

### 過濾出需要使用的資料

其實在這麼多的資料中，我們只需要日出和日落的資料，很多額外的資訊是用不到的，因此接下來我們要從這份資料中過濾出「台灣好天氣 App」真正需要用得到的資料，這個過程會比較瑣碎一些，而且和 React 的學習上並沒這麼直接的關係，若目前對於這個部分沒興趣的話，可以直接跳過，最後會附上過濾後的資料。

這裡先在專案中的 `src` 資料中在新增一個 `utils` 資料夾，並把從中央氣象局「[日出日沒時刻-全臺各縣市年度逐日日出日沒時刻資料](https://opendata.cwb.gov.tw/dataset/astronomy/A-B0062-001)」下載好的資料存放在內。

接著同樣在 `utils` 資料夾中，新增一個名為 `filter-sunrise-and-sunset.js` 的檔案，我們將透過這個檔案來過濾出我們需要的資料。這支程式內容並不是本書的重點，讀者僅需知道透過這支檔案，會進行以下的過濾：

- `dataTime` 的欄位需超過執行程式的日期，因為我們不需要更早以前的日出日落時間
- `parameter` 只保留「日出時刻」和「日落時刻」

![Imgur](https://i.imgur.com/OA50qrs.png)

過濾後的結果保存在 `./src/utils` 資料夾中，名為 `sunrise-sunset.json` 的檔案，從這支檔案中就可以取得每一個城市每一天的日出和日落時間。

若對於這支檔案有興趣的讀者，可以到下方連結檢視原始碼：

[https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/blob/get-moment-from-sunrise-sunset/src/utils/filter-sunrise-and-sunset.js](https://github.com/pjchender/learn-react-from-hook-realtime-weather-app/blob/get-moment-from-sunrise-sunset/src/utils/filter-sunrise-and-sunset.js)

我們也在專案的 `package.json` 中加入對應的指令

```js
 // package.json
 "scripts": {
    ...
    "build:sunrise-sunset": "node ./src/utils/filter-sunrise-and-sunset"
  },
```

未來（2020 年後）只需要下載新的日出日落檔案，同樣放在 `utils` 資料夾中，接著進到專案後，透過終端機輸入 `npm run build:sunrise-sunset` 後，就可以產生 `sunrise-sunset.json` 的檔案。
