const path = require('path')
const fs = require('fs')
const csv=require('csvtojson')

const csvFilePath=path.join(__dirname, 'customer-data.csv')
csv().fromFile(csvFilePath).then((jsonObj) => {
    fs.writeFile(path.join(__dirname, 'customer-data.json'), JSON.stringify(jsonObj, null, 4), (error) => {
        if(error) {
          console.log(error);
        } else {
          console.log("JSON saved to " + path.join(__dirname, 'customer-data.json'));
        }
    });
	console.log(jsonObj);
})
