var cur= document.querySelector("#cursor")
var par = document.querySelector("#main")
var img = document.querySelector("#image")

par.addEventListener("mousemove",(dets)=>{
    
    gsap.to(cur,{
        left:dets.x,
        top:dets.y,
        duration:1,
    })
})

img.addEventListener("mouseenter",()=>{
    gsap.to(cur,{
        scale:5,
        backgroundColor:"transparent",
    })
})

img.addEventListener("mouseleave",()=>{
    gsap.to(cur,{
        scale:1,
        backgroundColor:"white"
    })
})
