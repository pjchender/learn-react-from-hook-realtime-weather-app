import fetch from 'node-fetch';
import { saveFile, getDirName } from './utils.mjs';

const fetchData = async ({ authorizationKey }) => {
  return fetch(`https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/A-B0062-001?Authorization=${authorizationKey}&downloadType=WEB&format=JSON`)
    .then(response => response.json())
    .then(data => data)
}

async function main({ authorizationKey }) {
  try {
    const __dirname = getDirName();
    const data = await fetchData({ authorizationKey });

    await saveFile({
      filePath: `${__dirname}/A-B0062-001.json`,
      data
    });

    console.log('Successfully download and create sunrise-sunset.json');
  } catch (error) {
    console.error('[fetch-sunrise-and-sunset] error', error);
  }
}

export default main;
