const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    // We expect it to be a function, but will it be?
    // get the return value right away from the function
    const bombay = breedDetails('Bombay');
    console.log(bombay); //=> prints out the description for that breed

    console.log(breedDetails);
  });

  it('returns breed details for the Balinese breed', () => {
    // We expect it to be a function, but will it be?
    // get the return value right away from the function
    const balinese = breedDetails('Balinese');
    console.log(balinese); //=> prints out the description for that breed

    console.log(breedDetails);
  });

});