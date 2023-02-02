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
    console.log("you paid the exact amount, have a nice day!")
}

else {
    console.log("Not enough money - You still owe X dollars")
}

/* Problem, change the X to give the actual amount */

let cash1 = 35 /* 45 35 */
let price1 = 40

if (cash1 > price1) {
    console.log(`you paid extra - heres your ${cash1 - price1} dollars change`)
}

else if (cash1 === price1) {
    console.log("you paid the exact amount, have a nice day!")
}

else {
    console.log(`Not enough money - You still owe ${price1 - cash1} dollars`)
}

/* Cleaner way of doing it, adding the "difference* variable, difference = cash - price */

let cash2 = 20 /* 50 20 */
let price2 = 50
let difference = cash2 - price2

if (cash2 > price2) {
    console.log(`you paid extra - heres your ${difference} dollars change`)
}

else if (cash2 === price2) {
    console.log("you paid the exact amount, have a nice day!")
}

else {
    console.log(`Not enough money - You still owe ${difference * -1} dollars`)
}

/* the -1 serves to remove the - from the answer, since it would say -30 without it. */

let money = 50
let cost = 40
let isStoreOpen = true

if (money >= cost && isStoreOpen === true) {
    console.log('print the receipt')
}

/* && checks if the values on the left and on the right are true, if they are, the console will print the receipt.

when using a && or a || (checks if a value on the right or left is true), there's no need for the ===, because the

isStoreOpen is a Boolean (a value that can be either TRUE or FALSE) in itself, instead of writing ===true/false, you can just write " isStoreOpen / !isStoreOpen"

its exactly the same thing.
*/

/* TERNARY OPERATORS

A shortcut for an if else condition

( [Not part of the code] is the user) subscribed ? 'show video' : 'hide video' */

let hot = true

hot ? console.log('weather is hot outside') : console.log('weather is cold')

// ---

let subscribed1 = true
let loggedIn1 = true
let str = subscribed1 && loggedIn1 ? 'show the video' : 'hide the video'
console.log(str);

// --

let dinero = 50
let precio = 40
let isStoreAbierta = true

let str1 = cash >= price && isStoreAbierta ? 'give receipt' : 'dont give receipt'

console.log(str1)

/* LOOPS

Loops repeat the same code over and over again, like this example, to make it count to 10.

let count = 1;
count = count + 1
console.log(count);

Repeating this code 10 times is not optimal. Remember this principle:
DRY = Don't Repeat Yourself.

We can use one of the three types of loops:

for loop / while loop / do while loop | Best practice is for loop 

let count = 1;

while (count <= 10) {
    console.log (count)
    count = count + 1
}
*/

/*

for (let i = 0; i < 3; i++) {
    console.log(i);
}

*/

// i means index
//i = 0 means that i starts from 0
// i < (i less) than how many times we want to loop, 3 times (0, 1 ,2)
//i++ means increment i by 1


/* Quick exercises

**Write a for-loop that loops through 1 to 20.

*If the number is divisible by 3, print "Hola"
*If the number is divisible by 5, print "Mundo"
*If the number is divisible by 3 and 5, print "Hola Mundo"
*If the number is *not* divisible by either 3 or 5, print the number.


@example

1 -> 1
2 -> 2
3 -> "Hola"
4 -> 4
5 -> "Mundo"
...
15 -> "Hola mundo"
...
20 -> "Mundo"

*/


for (let i = 1; i <= 20; ++i) {
    if (i % 3 === 0) {
        console.log(`${i} -> "Hola"`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} -> "Mundo`)
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} -> "Hola Mundo"`)
    }
    else {
        console.log(` ${i} -> ${i} `)
    }
}

const str0 = "Hola Mundo"

for (let i = 0; i < str0.length; ++i) {
    console.log(str0[i]);
}

/* str.lenght loops it for the amount of characters in the string */

/* FUNCTIONS

A block of code that does something. Logging into a website or logging out of a
website is a function.

Example, we want to welcome different people to our site, we could use



.console.log ("Welcome to SJ, Harry")
.console.log ("Welcome to SJ, Ale")
.console.log ("Welcome to SJ, Dan")

But let's remember again, Don't Repeat Yourself, so let's create a function

* function welcomePersonToSJ()
* .console.log ("Welcome to SJ, Harry")

welcomePersonToSJ();

*the last line CALLS the function to activate.

Lines 280 and 281 are the function definition, and line 285 calls the function.

The name in the function definition is hard coded, what can we do?

we need to set a parameter (name in this case).


* function welcomePersonToSJ(name)
* .console.log(name)

* welcomePersonToSJ()

The thing is, this code won't say any names because the function call doesn't have
anything in it. Let's see it in actual code */

// function welcomePersonToSJ(firstName, lastName) {
// console.log(`Welcome to Sistema Judicial, ${firstName} ${lastName}!`)
// }

// welcomePersonToSJ('Harry', 'Calderon');
// welcomePersonToSJ('Ale', 'Doe');

/* return statement
function fn() {
    return 5 // a return statement stops all the code that goes after it.
    console.log ('my function')
}

console.log (fn());

*/

function sumOfTwoNumbers(num1, num2) {
    return num1 + num2
}
//function definition is a parameter, like the p, it goes multiple lines


console.log(sumOfTwoNumbers(10, 10))
//function call is an argument, it goes for one line, like the a


/** Create a function that converts Celsius to Fahrenheit 
 * 
 * Formula:
 * F = C x 1.8 + 32
 * 
 * @example
 * convertCelsiusToFahrenheit(0) -> 32
 * convertCelsiusToFahrenheit(10) -> 50
 * convertCelsiusToFahrenheit(30) -> 86
 * 
*/

function convertCelsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32
}

console.log(convertCelsiusToFahrenheit(7))

// ARRAYS //

/* 

Arrays are a data structure that can hold multiple data values in one variable.

let item1 = 20
let item2 = 30
let item3 = 40
let item4 = 50
let item5= 100

it doesn't make sense to do multiple variables for this type of case, so we create an array.  */

// let arr = [20, 30, 40, 50, 100]

//you can put a string or a boolean in an array as well.
//if you want to access something in an array you can count them starting from 0.
//in this case, if we want to acces 20, we could use console.log(arr[0]) since it's
//the first element of array

// console.log(arr[0])

//we can also use [arr.lenght - 1] to access the last element of an array

// console.log (arr[arr.length - 1])

// arr.push () is to add an element onto the end of an array

// arr.push(200)

//here's a tricky one, arr.filter
// let newArr = arr.filter(element => element < 50)

//this will run every single element in the original array [20,30,40,50,100] and create a
//new array.

// console.log (arr);

// Filter grades

let grades = ['A+', 'A', 'FAIL']

let goodGrades = grades.filter((element) => {
    console.log(element)
    if (element !== 'FAIL') {
        return true
    }
})

// let goodGrades1 = grades.filter(element => !== 'FAIL')
//clean way of doing it


// how to do it without an array

let grades1 = ['A+', 'A', 'FAIL']

for (let i = 0; i < grades1.length; ++i) {
    if (grades1[i] !== 'FAIL')


        console.log(grades1[i])
}


//array map

/*

let arr = [1, 4, 9, 16]

let newArray = arr.map ((element) => {
    console.log(element)
    return undefined;
})

another way of doing this part is

let newArray = arr.map(element => undefined)

console.log (newArray)

*/


let dollars = [1, 5, 10, 3] /*

 Exercise: Convert dollars into cents using .map 

let cents = dollars.map(element => {
   console.log(element) 
   return element * 100
})

console.log(cents)


let cents = dollars.map(element => element * 100)
console.log(cents)

Now with a for loop



let cents= []

for (let i = 0; i < dollars.length; i++) {
    cents.push(dollars[i] * 100);
}

console.log(cents)


*/


// OBJECTS

//Objects are a way to store multiple properties in one variable.

/*

Instead of this:

let userFirstName = Ale
let userLastName = Z
let userDiscordId = Ale Z#777
let userSubscriptionStatus = VIP
etc.

We can use this:

let user = {
username: Alezzu,
email = alezzu@mail.com,
DiscordId = Ale Z#777,
SubscriptionStatus = VIP,
}


//This way we can store all variables in one and we can acces every one of them like this:

console.log(user. )

The space is for the property we want to acces, username, email, discordId, etc.

The property basically becomes a string, and we can use [x number] to access any letter from the properties

console.log(user.username[0]) will print A


We can also store multiple data inside objects, for example, we are doing a course, and we completed lessons 1, 2 and 3, we can store them like this:

let user = {
username: Alezzu
lessonsCompleted: [1, 2, 3]
}

But lets say that we now have multiple users, now we have to use
{ [ ] }, remember also to separate with a comma.
*/

let users = [
    {
        username: "Alezzu",
        email: "alezzu@mail.com",
        password: "uno23",
        discordId: "Ale Z#777",
        SubscriptionStatus: "VIP",
        lessonsCompleted: [0, 1],
    },
    {
        username: "Neku",
        email: "Neku@mail.com",
        password: "one23",
        discordId: "Neku#333",
        SubscriptionStatus: "VIP",
        lessonsCompleted: [0, 1],
    },
    {
        username: "Abc",
        email: "abc@mail.com",
        password: "ichi23",
        discordId: "Abc#777",
        SubscriptionStatus: "VIP",
        lessonsCompleted: [0, 1],
    }
]

// console.log(users)

/* if we use console.log(user) it will call both users instead of just one,
we have to use .console.log(users[ number of user 0, 1, 2, etc. ])

*/

// console.log(users[0])

/* and with that we can now access their properties and use .map! */

// console.log(users[0].username)

/* with that we can even recreate how to log an user! */

/* function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email) {
            console.log(users[i]);
            if(users[i].password === password) {
                console.log('Welcome - details are correct!')
            }
            else {
                console.log('Incorrect details - Try again')
            }
            return
        }
    }
    console.log('Email does not match.')
}

login('alezzu@mail.com', 'uno23');


*/

/* What is happening here is that we are looping over every single object
in our users array and we're checking:

Does the user's email match the parameter from the login? (line 554)
If it doesn't match, move onto the next object.

But if it does match, let's check if the password matches as well (line 556)


The return serves to stop the function from looping once it has already found its match.


*/

/* Create a register function that accepts: username, email, password, subscriptionStatus,
discordId, lessonsCompleted.

Inside the register function: 
Create a user object
Push this user object onto the 'users' array

*/

function register(user) {
    users.push(user); //.push puts the object in whatever array is specified before the dot.
}

register( {
    username: "athos",
    email: "athos@sistemajudicial.com",
    password: "athos123",
    subscriptionStatus: "VIP",
    discordId: "Athos#01",
    lessonsCompleted: [0, 1]
});

    console.log(users);


/* DOM

Dom means Document Object Model, it allows you to access and change the styliling and content
of elements on a website.


Any element can be accessed by writting .document.querySector(' ')
*/


//1st way of accessing an element
console.log(document.querySelector('#title'));
//This works for both id and classes. If we convert this id to a class we have to use a dot.
//like css.

console.log(document.querySelector('h1'))
//you can also acces the element itself.


//2nd way of accessing an element, only works if the document has an id.
console.log(document.getElementById('title'))
//This is better practice if you have an ID.


//Remember, the orange text is what part will be changed.

// document.querySelector('#title').innerHTML = 'Hi'

/* When this code is active, the #title wil change from 
"Please open the console and check the app.js file", to "Hi"

Why is this useful?

When using an email, we could use "example@email.com" and change it via innerHTML to an
actual email, and make it dynamic!

*/


// We can also change CSS!


// document.querySelector("#title").style.fontSize = '50px'

// after the name of the section, we put .style and .whatever thing we want to edit.

function toggleDarkMode() {
document.querySelector('body').classList.toggle("dark-theme")
}

