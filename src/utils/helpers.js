// STEP 1：匯入日出日落資料
import sunriseAndSunsetData from './sunrise-sunset.json';

export const getMoment = (locationName) => {
  // STEP 2：從日出日落時間中找出符合的地區
  const location = sunriseAndSunsetData.find(
    (data) => data.locationName === locationName
  );

  // STEP 3：找不到的話則拋出錯誤訊息
  if (!location) {
    throw new Error(`找不到 ${location} 的日出日落資料`);
  }

  // STEP 4：取得當前時間
  const now = new Date();

  // STEP 5：將當前時間以 "2019-10-08" 的時間格式呈現
  const nowDate = Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(now)
    .replace(/\//g, '-');

  // STEP 6：從該地區中找到對應的日期
  const locationDate = location?.time.find((time) => time.dataTime === nowDate);

  // STEP 7：找不到的話則拋出錯誤訊息
  if (!locationDate) {
    throw new Error(`找不到 ${locationName} 在 ${nowDate} 的日出日落資料`);
  }

  // STEP 8：將日出日落以及當前時間轉成時間戳記（TimeStamp）
  const sunriseTimestamp = new Date(
    `${locationDate.dataTime} ${locationDate.sunrise}`
  ).getTime();
  const sunsetTimestamp = new Date(
    `${locationDate.dataTime} ${locationDate.sunset}`
  ).getTime();
  const nowTimeStamp = now.getTime();

  // STEP 9：若當前時間介於日出和日落中間，則表示為白天，否則為晚上
  return sunriseTimestamp <= nowTimeStamp && nowTimeStamp <= sunsetTimestamp
    ? 'day'
    : 'night';
};
