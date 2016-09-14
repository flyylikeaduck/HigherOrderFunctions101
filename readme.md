# Intro To Higher Order Functions
## Exercises

### Basketball
* [x] create a `function` "freethrow" that takes a `number` argument, and returns that number + 1.

* [ ] create a `function` "layup" that takes a `number` argument, and returns that number + 2.

* [ ] create a `function` "threePtr" that takes a `number` argument, and returns that number + 3;

* [ ] create a `function` "basketball" that takes two arguments, "points" and "shotType", and returns the function "shotType" with "points" passed in as an argument.

If your functions work properly, it should yield the following results:

```Javascript
var myPoints = 12;
myPoints = basketball(myPoints, threePtr);
console.log(myPoints); //15
```
-

### The ever useful "loop" (HOF)

* [x] Create a higher order function (HOF) called "loop" that takes in two arguments "collection" and "callback".
-	"loop" : contains a for loop which passes in each element of "collection" into the "callback" function.
-	"collection" : represents a list or `array` passed in to manipulate.
-	"callback" : is the function which does the manipulation.

-

_Since we are learning "Higher Order Functions", I challenge you to use the "loop" function created for you for this and all of the following functions._

* [ ] create a function named "groceryList" which takes in an `array` (your shopping list), and invokes `console.log` on each item in the list.


_Hint: Use an anonymous function as loop's second argument within this groceryList's function definition._

Example :
```Javascript
myList = ["eggs", "chicken", "bananas", "bagels", "spaghetti sauce"];
groceryList(myList);

/* Result:
eggs
chicken
bananas
bagels
spaghetti sauce
*/
```

-

* [ ] create a function named "multby" that takes in two arguments, an `array` of numbers, and a `value`. The function will multiply each element of the array by this value, and returns an array of the new values.

Example:
```Javascript
var myArray = [2,4,6,8];
multby(myArray, 5); //result : [10,20,30,40]
```
-

* [ ] create a function named "capitalizeFirstLetters" that takes in a `string` argument, and returns the string with each word's first letter capitalized.

Example :
```Javascript
var bestSentence = "woah! i Love javascript!"
capitalizeFirstLetters(bestSentence); //result : "Woah! I Love Javascript"
```
-

* [ ] create a function named "countVowels" that takes a `string` argument, and returns the number of vowels in the string (whether or not you "include y" is your prerogative).

Example :
```Javascript
var bestSentence = "woah! i Love jAvascrIpt";
countVowels(bestSentence); //result : 8
```
