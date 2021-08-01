

var mili = 0;
var sec = prompt("Enter a Second")
var min = prompt("Enter a Minutes");
var hours = prompt("Enter a Hours");
var displayMili = document.getElementById("milisec1")
var displaySec = document.getElementById("sec1")
var displayMin = document.getElementById("min1")
var displayHours = document.getElementById("hours")
var interval;

function result(){
    mili++
    displayMili.innerHTML = mili
    if(mili == 100){
        sec--
        displaySec.innerHTML = sec
        mili = 0;
        if(sec < 1){
            min--
            displayMin.innerHTML = min
            sec = 60
        }
        else if (min < 1){

            hours--
            displayHours.innerHTML = hours
            min = 60
        }


    }


}


function start(){

    interval = setInterval(result,10);
}

function pause(){

    clearInterval(interval)

}


function reset(){

    pause()
    mili = 0
    sec = 0
    min = 0
    displayMili.innerHTML = mili
    displaySec.innerHTML = sec
    displayMin.innerHTML = min
    
}