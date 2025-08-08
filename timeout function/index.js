

let timeoutId;
function startTimer(){
    setTimeout(() => window.alert("Timeout function"),3000);
    console.log("Started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared");

}