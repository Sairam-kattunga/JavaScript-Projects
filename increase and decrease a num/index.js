//console.log(`hello`);
//window.alert(`this is an alert`);

//document.getElementById("myh1").textContent="Hello";
//document.getElementById("myp").textContent="i like pizzaa";
/*
let age=25;
console.log(age);
console.log(typeof age);
alert(`Your age is ${age}`);
*/
/*
let online=true;
console.log(`sairam is online: ${online}`);


let fullname="sairam";
let age="20";
let student=''true";
*/
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const countNumber = document.getElementById("countNumber");

let count=0;

increaseBtn.onclick = function(){
    count++; 
    countNumber.textContent=count;

}
decreaseBtn.onclick = function(){
    count--; 
    countNumber.textContent=count;

}
resetBtn.onclick = function(){
    count=0; 
    countNumber.textContent=count;

}
