import { saveFile, readJSONFile, getDirName } from './utils.mjs';

async function processData(rawData) {
  const locations = rawData.cwbopendata.dataset.locations.location;

  const nowTimeStamp = new Date().getTime() - 24 * 60 * 60 * 1000; // 取得前一天的時間戳記
  const data = locations.map((location) => {
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

  return data;
}

async function main() {
  try {
    const __dirname = getDirName();

    // 載入從中央氣象局下載的日出日落檔 A-B0062-001
    const rawData = await readJSONFile({
      filePath: `${__dirname}/A-B0062-001.json`
    })

    const data = await processData(rawData);

    await saveFile({
      filePath: `${__dirname}/../../utils/sunrise-sunset.json`,
      data,
    })

    console.log('Successfully generate sunrise-sunset.json');
  } catch (error) {
    console.error('[filter-sunrise-and-sunset] error', error);
  }
}

export default main;
