// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // CHANGE: Pass data into callback instead of returning it directly
    if (!error) functionToRunWhenThingsAreDone(data);
  });
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed);
};

breedDetailsFromFile('Bombay', printOutCatBreed);

/* order of operations
1) require fs
2) create function in constant breedDetailsFromFile
3) create function in constant printOutCatBreed
4) run breedDetailsFromFile and pass it "Bombay" and printOutCatBreed
//end of synchronous//
5) run breedDetailsFromFile
    console.log calling readFile
    start reading file
    console.log it has the data...
    pass data into callback functionToRunWhenThingsAreDone's breed argument
6) run printOutCatBreed
    console.log return value breed
*/