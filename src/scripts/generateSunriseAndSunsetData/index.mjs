import fetchSunriseAndSunsetData from './fetch-sunrise-and-sunset.mjs';
import processSunriseAndSunsetData from './process-sunrise-and-sunset.mjs';

const AUTHORIZATION_KEY = 'CWB-507B37E0-0383-4D8C-878D-628B54EC3536';

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
