const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur_1;

  beforeEach(function () {
    park = new Park('Jurassic Park', 50) 
    dinosaur_1 = new Dinosaur('t-rex', 'carnivore', 50);

  })

  it('should have a name', function(){
    const actual = park.name
    const expected = 'Jurassic Park';
    assert.strictEqual(actual,'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    const expected = 50
    assert.strictEqual(actual, 50)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinos.length;
    const expected = 0;
    assert.strictEqual(actual,0);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur_1)
    const actual = park.hasDinosaur(dinosaur_1)
    const expected = true;
    assert.strictEqual(actual,expected);
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
