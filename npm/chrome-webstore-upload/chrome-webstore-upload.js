const options = {
  extensionId: 'mliaofajamfchbejhmlndfheaafndldp',
  clientId: '313603603469-pthn9npm8ln161skieasn3fcmu37jmvh.apps.googleusercontent.com',
  clientSecret: 'xxxxx',
  refreshToken: 'xxxxx' 
}

const webStore = require('chrome-webstore-upload')(options);

const fs = require('fs');
const myZipFile = fs.createReadStream('./qa-1.1.3.zip');
webStore.uploadExisting(myZipFile).then(res => {
  console.log(res);
  /*
  { kind: 'chromewebstore#item',
    id: 'mliaofajamfchbejhmlndfheaafndldp',
    uploadState: 'SUCCESS'
  }
  */
});
