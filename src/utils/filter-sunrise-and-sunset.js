const fs = require('fs');
const path = require('path');

// 載入從中央氣象局下載的日出日落檔 A-B0062-001
const dataset = require('./A-B0062-001.json');
const locations = dataset.cwbopendata.dataset.locations.location;

const nowTimeStamp = new Date().getTime() - 24 * 60 * 60 * 1000; // 取得前一天的時間戳記
const newData = locations.map((location) => {
  const time = location.time
    .filter((time) => new Date(time.dataTime).getTime() >= nowTimeStamp)
    .map((time) => {
      const { sunrise, sunset } = time.parameter
        .filter((timeParameter) =>
          ['日出時刻', '日沒時刻'].includes(timeParameter.parameterName)
        )
        .reduce((accumulator, timeParameter) => {
          const objectKey =
            timeParameter.parameterName === '日出時刻' ? 'sunrise' : 'sunset';

          accumulator[objectKey] = timeParameter.parameterValue;
          return accumulator;
        }, {});

      return {
        dataTime: time.dataTime,
        sunrise,
        sunset,
      };
    });

  return {
    locationName: location.locationName,
    time,
  };
});

// 將過濾後的檔案存檔為 sunrise-sunset.json
fs.writeFile(
  `${__dirname}/sunrise-sunset.json`,
  JSON.stringify(newData, null, 2),
  (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }
);
