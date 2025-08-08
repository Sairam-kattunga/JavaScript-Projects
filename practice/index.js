/*

let Username="SairamKattunga";

console.log(Username.charAt(2));
console.log(Username.indexOf("S"));
console.log(Username.lastIndexOf("t"));//gives the last given character index
console.log(Username.length);
console.log(Username.trim());//removes whitespaces from the character
console.log(Username.toUpperCase());
console.log(Username.toLowerCase());
console.log(Username.repeat(3));
console.log(Username.startsWith(" "));//if the username starts with space it says true.else false
console.log(Username.replaceAll("t","-"));//replaces the t character with - symbol
console.log(Username.padStart(20,"A"));//add the remaining characters at the start with A until it reaches 20
console.log(Username.padEnd(20,"A"));
console.log();
console.log();
*/




/*
// string slicing in javascript

const UserName="Sairam Kattunga";

let firstName = UserName.slice(0,6);
let firstname = UserName.slice(0, UserName.indexOf(" "));
let lastname = UserName.slice(UserName.indexOf(" ")+1);

console.log(firstName);
console.log(UserName.slice(-8));
console.log(firstname);
console.log(lastname);
*/



/*
//method chaining
let UserName = window.prompt("Enter your Name: ");

UserName=UserName.trim().charAt(0).toUpperCase()+UserName.trim().slice(1).toLowerCase();
console.log(UserName);
*/


/* 
//forEach() = method used to iterate over the elements of an array and apply a specified function (callback)

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);

function display(Element){
    console.log(Element);
}
*/

/*
//forEach method example
let fruits = ["orange", "apple","banana", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(display);

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}
*/



/*

//callback = a function that is passed as an argument to another function
sum(displayConsole, 1, 2);

function sum(callback, x, y){
    let result = x+y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}


*/ 



/*
//  map() = accepts a callback and applies that function to each element of an array, then return a new array

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

 function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
 }
 */

 
/*
 // filter() = creates a new array by filtering out elements

 const numbers = [1, 2, 3, 4, 5];
 const squares = numbers.map(function(element){
    return Math.pow(element, 2);
 });
 const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
 });
 
const evenNums = numbers.filter(function(element){
    return element%2 === 0;
});

const oddNums = numbers.filter(function(element){
    return element%2 !== 0;
});

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
})
console.log(evenNums);
console.log(oddNums);
console.log(total);
*/



/*
//arrow functions = a concise way to write function expressions good for simple that you use only once
  //                  (parameters) => some code
const numbers = [1, 2, 3, 4, 5, 6];
 
const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element%2 === 0);
const oddNums = numbers.filter((element) => element%2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);

*/


/*
// this = reference the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
    name:"sairam",
    favFood:"biriyani",
    sayHello : function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`i am eating ${this.favFood}`)} // if we remove "this" then the favFood will not return in the function
}

person1.eat();

*/

/*
// constructor = special method for defining the properties and methods of objects
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`you drive the ${this.model}`)}
}

const car1 = new Car("ford", "Mustang", 2024, "red");
const car2 = new Car("Dodge", "Cahrger", 2025, "blue");

car1.drive();
console.log(car1.model);
*/



/*

// class = (E56 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions
//         ex. static keyword, encapsulation, inheritance

class product{
    constructor(name, price){
        this.name=name;
        this.price=price;

    }
    displayProduct(){
        console.log(`product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }

}

const  salesTax = 0.05;

const product1 = new product("Shirt",19.99);
const product2 = new product("Pants", 22.50);


product2.displayProduct();
const total = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
*/



/*
// static = keyword that defines properties or methods   that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)
 
class User{
    static userCount = 0;

    constructor(username){
        this.username= username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }
    sayHello(){
        console.log(`My user name is ${this.username}`);
    }
}
const user1 = new User("Sairam");
const user2 = new User("Bhanu");
const user3 = new User("Hari");



console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

user1.sayHello();
user2.sayHello();
user3.sayHello();


User.getUserCount();
*/



/*
//Inheritance = allows a new class to inherit properties and methods from an existing class 
//              (parent -> child)
//              helps with code reusability

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);

    }
}
class Rabbit extends Animal{
    name = "Rabbit";
}
const rabbit = new Rabbit();

rabbit.eat();
rabbit.sleep();
 
*/



/*

// super = keyword is used in classes to call the constructor or acccess the properties and methods of a parent (super class)
// this = this object
// super = the parent

class Animal{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }

}
class Rabbit extends Animal{
    constructor (name, age, runspeed){
        super(name,age);
        this.runspeed = runspeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runspeed);
    }

}
class Fish extends Animal{
    constructor (name, age, swimspeed){
        super(name,age);
        this.swimspeed = swimspeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimspeed);
    }

}
class Hawk extends Animal{
    constructor (name, age, flyspeed){
        super(name,age);
        this.flyspeed = flyspeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flyspeed);
    }

}

const rabbit = new Rabbit("rabbit", 2,25);
const fish = new Fish("fish", 3, 23);
const hawk = new Hawk("hawk", 5, 50);

rabbit.run();
fish.swim();
hawk.fly()

*/



//getter = specila methods that make a property readable
// setter =  special methods that make a property writable

//validate and modify a value when reading/writing a property

 

/*
//destructuring = extract values from arrays and objects,
//                then assign them to variable in a convinient way
//                [] = to perform array destructuring
//                {} = to perform object destructuring

// Example 1 = swapping two variables
let a=1;
let b=2;
[a,b] = [b,a];
console.log(a);
console.log(b);


//Example 2 = swap two elements in an array
const colors = ["Red", "Blue", "Green", "Yellow", "Orange"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);


//Example 3 = Assign array elements to variables
const colors = ["Red", "Blue", "Green", "Yellow", "Orange"];
const[firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);


//Example 4 = Extract Values from objects
const person1 = {
    firstName:"Sairam",
    lastname:"Kattunga",
    age:20,
    job:"Student",
}
const person2 = {
    firstName:"manikanta",
    lastname:"sairam",
    age:42,
}

const {firstName, lastname, age, job = "Freelancer"} = person2;

console.log(firstName);
console.log(job);


//Example 5 = Destructure in function parameters

function displayPerson({firstName, lastname, age, job="Unemployed"}){  //job is set to unemployed if there is no value in job then the unemployed will display
    console.log(`Name:${firstName} ${lastname}`);
    console.log(`Age:${age}`);
    console.log(`Job:${job}`);
}
 
const person1 = {
    firstName:"Sairam",
    lastname:"Kattunga",
    age:20,
    job:"Student",
}
const person2 = {
    firstName:"manikanta",
    lastname:"sairam",
    age:42,
}

displayPerson(person1);
displayPerson(person2);
*/



/*
//nested objects = Objects inside of other objects.
//                 Allows you to represent more complex data structures
//                 Child object is enclosed by a parent object
//                   
//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

class Person{
    constructor(name, age, ...address){
        this.name= name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
const person1 = new Person("Sairam",20, "Bhimavaram", "Andhra Pradesh", "India");

const person2 = new Person("Manikanta",22, "Bhimavaram", "Andhra Pradesh", "India");

const person3 = new Person("Venkat",25, "Bhimavaram", "Andhra Pradesh", "India");


console.log(person1.name);
console.log(person2.age);
console.log(person3.address.street);
console.log(person3.address);
*/



/*
// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabets + numbers + symbols) as strings


const people = [{name:"Sairam", age:20, cgpa: 8.5},
                {name:"Manikanta", age:25, cgpa: 8.9},
                {name:"Rama", age:18, cgpa: 9}, 
                {name:"Venkat", age:19, cgpa: 9.5},]

people.sort((a,b)=> a.age-b.age); // will sort the given array according to the age in ascending order
people.sort((a,b)=> b.age-a.age); // will sort in descending order
people.sort((a,b)=> a.cgpa-b.cgpa);
people.sort((a,b)=> a.name.localeCompare(b.name));
people.sort((a,b)=> b.name.localeCompare(a.name));// for reverse lexicographic order



console.log(people);

*/



/*
const date = new Date();
console.log(date);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay(); 
const hour = date.getHours();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
*/



/*
//setTimeout() = function in javascript that allows you to schedule the execution
//              of a function after an amount of time (milli seconds)
//              Times are approximate(variables based on workload of the javascript runtime now env)
//              setTimeout(callback, delay);


function sayHello(){
    window.alert("Hello");

}
setTimeout(sayHello, 3000);


setTimeout(function(){window.alert("Hello")},6000);

 const timeoutId = setTimeout(() => window.alert("Hello AP"),8000);
 clearTimeout(timeoutId); //clears the timeoutId functions and stops working

*/

//E56 Module = An external file that contains reusable code that  can be imported
//             into other javascript files can contain variables, classes, functions ...
//             and more
//             Introduced as a part of ECMAScript 2015 Update



/*
//Synchronous = Executes line by line consecutively in a sequential manner code that waits for an operation to complete
//Asynchronous = Allows multiple operations to be performed concurrently without waiting 
//              Doesn't block tthe execution flow and allows the program to continue (I/O operations, network requests, fetching data )
//              Handled with : Callback , promises Async/Await

 function func1(callback){
    setTimeout(() => {console.log("Task 1");
                      callback()}, 3000);

 }
 function func2(){
    console.log("Task2");
    console.log("Task3");
    console.log("Task4");
 }
 func1(func2);

*/



/*
//Error = An Object is created to represent  a problem that occurs Occur often with user input or establishing a connection
try{
    const divident = Number(window.prompt("Enter Divident"));
    const divisor = Number(window.prompt('Enter Divisor'));

    if(divisor == 0){
        throw new Error ("You can't divide by zero");
    }
    if(isNaN(divident) || isNaN(divisor)){                  //NaN = Not a Number 
        throw new Error("Values should be Numbers");
    }

    const result = divident / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
console.log("you have reached the end");
*/




// element selectors = methods used to manipulate HTML Elements.Theyallow you to select one or multiple HTML Elements 
//                      form the DOM(Document Object Model)
//1.document.gerElementById()           //Element or null
//2.document.gerElementByClassName()    // HTML COllection
//3.document.gerElementByTagName()      //HTML Collection
//4.document.querySelector()            //Element or Null.When we select any list of elements it selects first matching element
//5.document.querySelectorAll()         //Nodelist

//DOM Navigation = The process of Navigating through the structure of an HTML document using javascript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children



// eventListener = Listen for a specific events to create interactive web pages 
//                 events: click, mouveover, mouseout
//                 .addEventListener(event, callback)

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event=>{
    myBox.style.backgroundColor="tomato";
    myBox.textContent="Oouch ! ";
})

myButton.addEventListener("mouseover", event=>{
    myBox.style.backgroundColor="yellow";
    myBox.textContent="Dont do it ";
})
myButton.addEventListener("mouseout", event=>{
    myBox.style.backgroundColor="lightgreen";
    myBox.textContent="Click me";
})





























