let burgs = "<ul><li>Big Mac</li><li>McChicken</li><li>Quarter Pounder</li><li>Filet-o-Fish</li></ul>";

let burgData = ["Amount Per: 100 grams",
                "Calories: 257",
                "Fat: 15 g",
                "Sodium: 460 mg",
                "Total Carbohydrate: 20 g",
                "Protein: 12 g",
                "Cholesterol 36 mg"]

let drinks = "<ul><li>Coca-Cola</li><li>Milkshakes</li><li>Sprite</li><li>Minute Maid</li></ul>";

let drinkData = ["Amount Per Serving: Large",
                "Calories: 380",
                "Sodium: 90 mg",
                "Total Carbohydrates: 100 g",
                "Sugars: 100 g"
                ]

let breakfast = "<ul><li>Bacon n' Egg McMuffin</li><li>Breakfast Burrito</li><li>Egg BLT McMuffin</li><li>Sausage McGriddles</li></ul>";

let breakyData = ["Amount Per Serving: 124 g",
                  "Calories: 310",
                  "Fat: 14 g",
                  "Sodium: 680 mg",
                  "Carbohydrates: 28 g",
                  "Protein: 16 g",
                  "Cholesterol: 200 g"
                  ]

let desserts = "<ul><li>Oreo McFlurry</li><li>Vanilla Cone</li><li>Hot Fudge Sundae</li><li>Triple Thick Milkhake</li></ul>";

let dessertsData = ["Amount Per Serving: 286 g",
                  "Calories: 570",
                  "Fat: 29 g",
                  "Sodium: 410 mg",
                  "Carbohydrates: 90 g",
                  "Protein: 11 g",
                  "Cholesterol: 40 mg"
                  ]
let sides = "<ul><li>French fries</li><li>Poutine</li><li>Snack Wraps</li><li>Blueberry Muffin</li></ul>";

let sidesData = ["Amount Per Serving: 110 g",
                  "Calories: 350 cal",
                  "Fat: 17g",
                  "Sodium: 260 mg",
                  "Carbohydrates: 46 g",
                  "Protein: 4 g",
                  "Cholesterol: 0 mg"
                  ]
let salad = "<ul><li>Caesar Salad</li><li>Garden Fresh Salad</li><li>Im Greek-ing out salad with grilled chicken</li></ul>";

let saladData = ["Amount Per Serving: 85 g",
                  "Calories: 150 cal",
                  "Fat: 8g",
                  "Sodium: 400 mg",
                  "Carbohydrates: 12 g",
                  "Protein: 6 g",
                  "Cholesterol: 25 mg"
                  ]


module.exports = {
	
	  getSalads: function () {
    console.log("called: saladlist");

    return salad;
  },

  getSaladfacts : function () {
    console.log("called: saladfacts");

    return saladData;
  },
	
	getDesserts: function () {
    console.log("called: dessertlist");

    return desserts;
  },

  getDessertfacts : function () {
    console.log("called: dessertfacts");

    return dessertsData;
  },
	getSides: function () {
    console.log("called: sidelist");

    return sides;
  },

  getSidefacts : function () {
    console.log("called: sidefacts");

    return sidesData;
  },
  getbreakfasts: function () {
    console.log("called: getbreakfasts");

    return breakfast;
  },

  getbreakyfacts : function () {
    console.log("called: getbreakyfacts");

    return breakyData;
  },

  getburgers: function () {
      console.log("called: getburgers");
      // Note: this could be from a DB, for now it's just hard-coded
      return burgs;
  },
  getburgfacts: function () {
      console.log("called: getburgfacts");
      // Note: this could be from a DB, for now it's just hard-coded
      return burgData;
  },
  getdrinks: function () {
      console.log("called: getdrinks");
      // Note: this could be from a DB, for now it's just hard-coded
      return drinks;
  },
  getdrinkfacts: function() {
    console.log("called: getdrinkfacts");

    return drinkData;
  }
};

var someOtherFunction = function () {
    console.log("Can't touch this!");
}