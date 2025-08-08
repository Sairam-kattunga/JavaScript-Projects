

//Random number between 1 and 6

//randomNum=Math.floor(Math.random()*6)+1;
//console.log(randomNum);
const button = document.getElementById("button");
const label = document.getElementById("label");
const min=1;
const max=6;
let randomNum;

button.onclick = function(){
    randomNum=Math.floor(Math.random()*max)+min;
    label.textContent=randomNum;
}
