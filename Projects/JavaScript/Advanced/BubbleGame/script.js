var hit=0;
var timer=60;
var score=0;
function Bubble(){
        var clutter=""
    for(var i=1;i<=100;i++){
    clutter += `<div id="blb">${Math.round(Math.random()*50)}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function changeHit(){
 hit = Math.floor(Math.random() * 50)
 document.querySelector("#hit").innerHTML=hit;
}

function setTimer(){
   var timeInterval= setInterval(function(){

        if(timer >0){
            timer--;
        document.querySelector("#timer").textContent=timer;
        }else {
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over! <br>Your Score is ${score} </h1>`
            clearInterval(timeInterval);
        }
    },1000)
}
function increaseScore(){
    score +=10
    document.querySelector("#points").textContent=score;
}

function matchValue(){
    document.querySelector("#pbtm").addEventListener("click",function(details){
       var val =Number(details.target.innerHTML);
       if(val ==hit ){
        Bubble();
        changeHit();
        increaseScore();
       }
       console.log(score)
    })
}

Bubble();
setTimer();
changeHit();
matchValue();


