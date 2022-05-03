// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var results = 0;

  _.each(numbers, function(number, index, collection) {
    if (parseInt(number / 5) === number / 5) {
      results++;

    }
  });

  return results;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {

  fruits = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });

  return fruits;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {

  fruits = _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });

  return fruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var cookies;

  cookies = _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });

  return cookies;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var total;

  total = _.reduce(products, function(memo, product) {
    var prod = product.price.slice(1);
    prod = parseFloat(prod);
    return memo + prod;
  }, 0);

  return total;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var categories = {};

  _.reduce(desserts, function(memo, dessert) {
    var desType = dessert.type;
    if (categories[desType]) {
      return categories[desType]++;
    } else {
      return categories[desType] = 1;
    }

  }, 0);

  return categories;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var results = [];

  _.reduce(movies, function(memo, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear < 2000) {
      results.push(movie.title);
    }
  }, results);

  return results;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var isShorter = false;

  _.reduce(movies, function(memo, movie) {
    if (movie.runtime < timeLimit) {
      return isShorter = true;
    }
  }, timeLimit);

  return isShorter;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var results;

  results = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });

  return results;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var results = desserts;

  results = _.map(desserts, function(dessert) {
    if (dessert.ingredients[0] === 'flour') {
      return dessert['glutenFree'] = 'false';
    } else {
      return dessert['glutenFree'] = 'true';
    }
  });
  console.log(results);
  return results;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var results;

  results = _.map(groceries, function(grocery) {

  });

  return results;
};
