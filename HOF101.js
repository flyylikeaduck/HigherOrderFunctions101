// 5-31-17

// 1. BASKETBALL

var freethrow = function(n){
	return n + 1;
}

function layup(num) {
  return num + 2;
}

function threePtr(num) {
  return num + 3;
}

function basketball(points, shotType) {
  return shotType(points);
}

var myPoints = 12;
myPoints = basketball(myPoints, threePtr);
console.log(myPoints); //15


// 2. 'Loop' HOF/Grocery List

//======= DO NOT TOUCH loop FUNCTION =======
var loop = function(collection, callback){
	for (var i = 0; i < collection.length; i++){
		callback(collection[i]);
	}
}
//======= DO NOT TOUCH loop FUNCTION =======
//MORE OF YOUR CODE BELOW

// my take on loop:
// function loop(collection, callback) {
//   collection.forEach(function(element) {
//     callback(element);
//   })
// }

function groceryList(array){

  // array.forEach(function(element) {
  //   console.log(element);
  // })

  return loop(array, function(x) {
    console.log(x);
  });
}

var myList = ["eggs", "chicken", "bananas", "bagels", "spaghetti sauce"];
groceryList(myList);

/* Result:
eggs
chicken
bananas
bagels
spaghetti sauce
*/


// 3. create a function named "multby" that takes in two arguments, an array of numbers, and a value. The function will multiply each element of the array by this value, and returns an array of the new values.

var multby = function(array, value) {

  // return array.map(num => num * value);

  var newArr = [];
  loop(array, function(x) {
    newArr.push(x * value);
  });
  return newArr;
}

var myArray = [2,4,6,8];
console.log(multby(myArray, 5)); //result : [10,20,30,40]


// 4. create a function named "capitalizeFirstLetters" that takes in a string argument, and returns the string with each word's first letter capitalized.

function capitalizeFirstLetters(str) {
  // -_- don't even want to figure out how to incorporate loop..

  return str.split(' ').map(function(word) {
    return word.replace(/\w/, function(match) {
      return match.toUpperCase();
    });
  }).join(' ')
}


var bestSentence = "woah! i Love javascript!"
console.log(capitalizeFirstLetters(bestSentence)); //result : "Woah! I Love Javascript"

var test = 'ah i\'m so tired, when is bedtime!?'
console.log(capitalizeFirstLetters(test))

// 5. create a function named "countVowels" that takes a string argument, and returns the number of vowels in the string (whether or not you "include y" is your prerogative).

function countVowels(str) {
  return str.toLowerCase().split('').reduce(function(count, char) {
    if (['a', 'e', 'i', 'o', 'u'].some(function(vowel) { return vowel === char; })) {
      count++;
    }
    return count;
  }, 0)
}

var bestSentence = "woah! i LoOve jAvascrIpt";
console.log(countVowels(bestSentence)); //result : 9