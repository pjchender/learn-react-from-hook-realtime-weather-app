import fetchSunriseAndSunsetData from './fetch-sunrise-and-sunset.mjs';
import processSunriseAndSunsetData from './process-sunrise-and-sunset.mjs';
import * as dotenv from 'dotenv';
dotenv.config();

const AUTHORIZATION_KEY = process.env.REACT_APP_API_AUTHORIZATION_KEY;

async function main() {
  try {
    await fetchSunriseAndSunsetData({
      authorizationKey: AUTHORIZATION_KEY,
    })

    await processSunriseAndSunsetData();
  } catch (error) {
    console.error('[main] error', error);
  }
}

main();
