let deckOfCards = {
    "success": true,
    "deck_id": "3p40paa87x90",
    "shuffled": true,
    "remaining": 52
}



module.exports = {
	 
  getDeckOfCards: function () {
      console.log("called: getburgfacts");
      // Note: this could be from a DB, for now it's just hard-coded
      return burgData;
    }
};

var someOtherFunction = function () {
    console.log("Can't touch this!");
}