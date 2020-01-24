'use-strict'
const fs = require('fs');

// Read Data from file JSON
let dataDummy = fs.readFileSync('data.json');
let dataParse = JSON.parse(dataDummy);

function convertData(data, name_file) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const name = element.nama;
    const age = element.umur;
    const payload = `${"\n"} ${name}, ${age}`;
    result.push(payload);
  }

  // convert JSON to write as TXT file
  fs.writeFile(`${name_file}.txt`, result, 'utf8', function (err) {
    if (err) {
      console.log("Error when converting to TXT file");
    }
    console.log('Success Convert JSON to TXT file');
  });
}

convertData(dataParse, 'example_output');
