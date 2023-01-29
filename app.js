/* STRINGS */

console.log('Hello World')

/* This is a string, a string can be anything from letters and numbers to emojis */

console.log('Hello' + 'World')

/* By adding a plus sign you can put 2 strings together */

console.log('Ale'[0])

/* If I want to choose a symbol from the text on JS, adding a [] and choosing a number starting
from 0 will do the job. In programming, 0 is the first number. */

console.log('Hello World'[10])

/* In this case, the console will return "d" because its the 10th digit in the "Hello World" string.*/

console.log('12345'.length)

/*The console will return the number of digits in the string, in this case, there are 5 digits, so it will return a '5' */


/* Null & Undefined:

Null: The value was set to, basically, nothing, but it was intentional.

Undefined: The value never existed in the first place.

Null & Undefined means basically nothing, but one was intentional (Null) and the other never existed (Undefined) */

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

/* EQUALITY */

/*What's the difference between "==" (double equals) and "===" (triple equals)?

Double equals checks the values on the left and right, and if they match, it returns "True" */

let bool = '1' == 1
console.log(bool)

/* Triple equals checks the VALUES and TYPES */

let bool2 = '1' === 1
console.log(bool2)


/* */

let subscribed = false;
let loggedIn = true;

if (subscribed === true) {
    console.log('show the video')
}

else if (loggedIn === true) {
    console.log('upgrade your subscription')
}

else {
    console.log('log into account')
}

/* What is happening here? the variable subscribed is "false", if the subscribed variable were true, meaning the
user would have a higher subscription, it will "show the video". if they are are logged in, but not subscribed,
it will show "upgrade your subscription"

the variable "loggedIn" is set to "true", meaning the user is logged in but not subscribed, hence showing "upgrade your subscription"

If they are not logged in (LoggedIn=false) and not subscribed (subscribed=false), it will show "log into account"

The code will not run every if/else statement, for example, if subscribed === true, the code will forget the else if/else statements. 

That's why the order is so important here.*/

/* Example 2: You go to the shop with 50/40/30 dollars, the price for an item is 40. */

 let cash = 50 // 50 40 30//
let price = 40

if (cash > price) {
    console.log("you paid extra - heres your change")
}

else if (cash === price) {
    console.log ("you paid the exact amount, have a nice day!")
}

else {
    console.log ("Not enough money - You still owe X dollars")
}

/* Problem, change the X to give the actual amount */

let cash1 = 35 /* 45 35 */
let price1 = 40

if (cash1 > price1) {
    console.log(`you paid extra - heres your ${cash1 - price1} dollars change`)
}

else if (cash1 === price1) {
    console.log ("you paid the exact amount, have a nice day!")
}

else {
    console.log (`Not enough money - You still owe ${price1 - cash1} dollars`)
}

/* Cleaner way of doing it, adding the "difference* variable, difference = cash - price */

let cash2 = 20 /* 50 20 */
let price2 = 50
let difference = cash2 - price2

if (cash2 > price2) {
    console.log(`you paid extra - heres your ${difference} dollars change`)
}

else if (cash2 === price2) {
    console.log ("you paid the exact amount, have a nice day!")
}

else {
    console.log (`Not enough money - You still owe ${difference * -1} dollars`)
}

/* the -1 serves to remove the - from the answer, since it would say -30 without it. */

let money = 50
let cost = 40
let isStoreOpen = true

if (money>=cost && isStoreOpen === true) {
    console.log('print the receipt')
}

/* && checks if the values on the left and on the right are true, if they are, the console will print the receipt.

when using a && or a || (checks if a value on the right or left is true), there's no need for the ===, because the

isStoreOpen is a Boolean (a value that can be either TRUE or FALSE) in itself, instead of writing ===true/false, you can just write " isStoreOpen / !isStoreOpen"

its exactly the same thing.
*/

