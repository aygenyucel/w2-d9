/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
console.log("\n-------------------EXERCISE 1--------------------");

function area(l1, l2) {
  return 2 * (l1 + l2);
}
console.log("area of rectangle(5,10):", area(5, 10));

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log("\n-------------------EXERCISE 2--------------------");

function crazySum(int1, int2) {
  let sum = int1 + int2;
  if (int1 === int2) {
    return sum * 3;
  }
  return sum;
}

console.log("crazySum(6, 6) --->", crazySum(6, 6));

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

console.log("\n-------------------EXERCISE 3--------------------");

function crazyDiff(num) {
  let difference = Math.abs(num - 19);
  let triple = Math.pow(difference, 3);
  return triple;
}

console.log("crazDiff(16):", crazyDiff(16));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

console.log("\n-------------------EXERCISE 4--------------------");

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  }
  return false;
}

console.log("boundary(45):", boundary(45));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log("\n-------------------EXERCISE 5--------------------");

function strivify(str) {
  // strArr = str.split(" ");
  // strArr.unshift("Strive");
  // newStr = strArr.join(" ");
  // return newStr;

  newStr = "Strive" + " " + str;
  return newStr;
}

console.log(strivify("I love Epicode"));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
