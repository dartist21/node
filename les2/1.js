// Make get request to array of sites with promises

const https = require('https');

const sites = [
  'https://www.google.com.ua/',
  'https://twitter.com/',
  'https://www.work.ua/',
  'https://dou.ua/',
];

function fetchSite(site) {
  return new Promise(res => {
    https.get(site, response => {
      let rawData = '';

      response.setEncoding('utf8');

      response.on('data', chunk => {
        rawData += chunk;
      });

      response.on('end', chunk => {
        console.log(`loading finished ${site}`);
        res(site);
      });
    });
  });
}

const promiseArray = sites.map(fetchSite);

Promise.all(promiseArray).then(() => {
  console.log('all sites are loaded');
});
