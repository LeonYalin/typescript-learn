import delimeterMsg, { log, DIRECTIONS } from "./utils";

const CITIES = {
  [DIRECTIONS.UP]: ['Haifa', 'Carmiel'],
  [DIRECTIONS.DOWN]: ['Beer Sheva'],
  [DIRECTIONS.LEFT]: [],
  [DIRECTIONS.RIGHT]: ['Jerusalem'],
}

function getCitiesByDirectionUsingCallback(dir: DIRECTIONS, callback: (err: Error, cities: string[]) => void): void {
  setTimeout(() => {
    const cities: string[] = CITIES[dir];
    if (cities.length) {
      callback(null, cities);
    } else {
      callback(new Error('no cities found'), null);
    }
  }, 100);
}

function getCitiesByDirectionCallback(er: Error, cities: string[]): void {
  if (er) {
    log('No cities found');
  } else {
    log('Found these cities: ', cities);
  }
}

function getCitiesByDirectionUsingPromise(dir: DIRECTIONS): Promise<string[]> {
  const promise: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      const cities: string[] = CITIES[dir];
      if (cities.length) {
        resolve(cities);
      } else {
        reject('No cities found');
      }
    }, 300);
  });

  return promise;
}

// function getCitiesByDirectionUsingAsyncAwait(dir: DIRECTIONS): Promo {

// }

function implementingAsynchroniousPatterns() {
  delimeterMsg('IMPLEMENTING ASYNCRONIOUS PATTERNS');

  getCitiesByDirectionUsingCallback(DIRECTIONS.UP, getCitiesByDirectionCallback);
  log('callback functions example:');

  getCitiesByDirectionUsingPromise(DIRECTIONS.DOWN).then(cities => {
    log('Found these cities: ', cities);
  }).catch(e => { log(e) });
  log('promises example:');

  setTimeout(async () => {
    try {
      const cities = await getCitiesByDirectionUsingPromise(DIRECTIONS.RIGHT);
      log('Found these cities: ', cities);
    } catch(e) {
      log('No cities found');
    }
  }, 500);
  log('async/await example:');
}

export { implementingAsynchroniousPatterns as default };