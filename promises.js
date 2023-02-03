// this part is only to take notes on promises.

/*

PROMISES

Easy definition:
Promises is something that gives you a value some time in the future.



Promises are for things like saving values in a database, to register, to log in to a site, to save a progress from a course, etc.

All these features have something in common, they talk to a backend server. Communication through an API.

The object used for this, is a promise.

The Backend CREATES the promise, and the Frontend USES the promise.

https://jsonplaceholder.typicode.com/users/

This page is a backend API, and if we ever want to show the example data in our page, we have to use a promise.

But how could we use this data? 

We need to wrap it in something called a "fetch"

(fetch("https://jsonplaceholder.typicode.com/users/1"))

*/

// this code shows a pending promise console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))


/* Ok, we fetch the data, but how do we show it?

We can either user

1. Then


2. Async/Await (Best practice in most cases.)

---


1. Then

(fetch("https://jsonplaceholder.typicode.com/users/1")).then((response)=> {
console.log(response)
})

After the .then in the ((  ), we can name it whatever we want, best practice is "response"

If we run this code we can see in the console that we cannot udnerstand or use this code in Frontend.
We need to add in line 50 console.log(response .json() )

*/

/* 

(fetch("https://jsonplaceholder.typicode.com/users/1")).then((response)=> {
console.log(response.json())
})

//This does not gives us the full data, it gives us our data INSIDE of another promise.

*/

//this part of the code was added after explaining the full process.

//const emailRef = document.querySelector(".email");
// console.log(emailRef)

//.
/*

example 1, this is a good method but is not as readble.

fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
    response.json().then(data => {
        emailRef.innerHTML = data.email;
    })
})

*/


//cleaner way of doing it

// fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
//    return response.json() //if we return a promise inside a .then, lines 91, 92 become the promise
//   //response.json
// }).then((data) => {
//    console.log(data);
//    emailRef.innerHTML = data.email
// }) //and with this code we access the data.

//Example 1: Now it gives us the user's data. We use two promises, one to fetch from the backend,
//And another to make it compatible with the frontend.
//we cannot use the data outside of the code, meaning if we want to console.log
//our data, it should be on line 97 inside the brackets, unlike async/await that
// can be used outside of the code/brackets

/*

-----------------------------------------------------
2. Async/Await

Better practice and more cleaner.

The way it works is that when you write your fetch (promise), instead of breaking it down like lines 92-97,
we only have to 'await' the promise

The thing here, it needs to be in a async function, or it will give an error.
that means, before function, write async

*/

/*

async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json() //whenever you have a promise, await it and you'll unlock it.
    console.log(data)
    emailRef.innerHTML = data.email
}



main();

*/

//this method runs line by line, unlike .then that runs in the background, meaning lines 91 1st, line 96 2nd and line 93 3rd

//from lines 94 to 97, that was the way we unlocked our data, how do we unlock it here?
//by making it a variable, in this case 'response'\



/*
-----------------------------


How to create a promise


In this example we are going to create a subscription plan promise

1. First we create a function, in this case getSubcriptionStatus 


function getSubscriptionStatus() {

}


2. We want to then return a new promise, like this



function getSubscriptionStatus() {
    return * new Promise *
}


without the *


3. Now we use a callback on it, which accepts resolve and rejects


function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {

    })
}


If the promise is succesful, we want to resolve it, if not, we'll reject it
The status of the user is VIP, so we'll resolve it.


function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })
}


On the page, it won't show anything, but if we console.log our function it will show


"   Promise {<fulfilled>: 'VIP"   "


4. The promise is resolved, meaning it was successful, how do we use the data?

We use .then or async, in this case, we'll use async and await



function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })
}

async function main() {
console.log(await getSubscriptionStatus())
}

main()


In the console now, running this code, will show only "VIP"

*/


/*

Full code without showing it on the screen, only on console

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })
}

async function main() {
console.log(await getSubscriptionStatus())
}

main()

*/

//full code that shows on screen

/*

const statusRef = document.querySelector(".status");

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })
}

async function main() {
const status = (await getSubscriptionStatus())
statusRef.innerHTML = status
}

main()

*/

const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");


function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })
}

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("show video")
        }
        else if (subscriptionStatus === "Free") {
            resolve("show trailer")
        }
        else {
            reject("no video")
        }
    })
}

async function main() {
    const status = await getSubscriptionStatus();
    statusRef.innerHTML = status;
    try {
        videoRef.innerHTML = await getVideo(status)
    }
    catch (e) {
        console.log(e)
        videoRef.innerHTML = e;
    }
}

main()