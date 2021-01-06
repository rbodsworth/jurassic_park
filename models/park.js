const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinos = [];
  }

  Park.prototype.collectionOfDinos = function () {
    return this.collectionOfDinos.length;
  }

  Park.prototype.addDinosaur = function (dinosaur) {
    this.collectionOfDinos.push(dinosaur);
  }

  Park.prototype.hasDinosaur = function(dinosaur){
    return this.collectionOfDinos.includes(dinosaur);
  };
  
  module.exports = Park;