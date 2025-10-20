var main = document.querySelector("#main")
var cur = document.querySelector("#cursor")

main.addEventListener("mousemove",function(details){
    cur.style.left = details.clientX-10 +"px";
    cur.style.top= details.clientY-10 +"px";
})