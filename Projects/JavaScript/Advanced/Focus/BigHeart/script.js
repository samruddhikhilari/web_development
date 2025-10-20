var card = document.querySelector("#card")
var heart = document.querySelector("#heart")
var main=document.querySelector("#main")

card.addEventListener("dblclick",function(){
    heart.classList.add("pos")
    heart.style.transform="transform: translate(-20%,-50%) scale(1);"
    
    setTimeout(function(){
        heart.classList.remove("pos")
    },1200);
})
