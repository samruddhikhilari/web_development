var menu = document.querySelector("#menu")
var tl = gsap.timeline()

tl.to(menu,{
    right:"0%",
    duration:.5,
})

tl.from("#menu h2",{
    x:300,
    duration:.1,
    stagger:1,
    opacity:0,
    ease:"power4"
})

tl.pause();
document.querySelector("nav i").addEventListener("click",()=>{
    console.log("enter")
    tl.play();
})

document.querySelector("#menu i").addEventListener("click",()=>{
    tl.reverse();
})