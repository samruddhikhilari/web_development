var initialPath=`M 5 150 Q 250 150 1000 150`
var finalPath=`M 5 150 Q 250 150 1000 150`


var box = document.querySelector("#box")

box.addEventListener("mousemove",(dets)=>{
 
    var initialPath=`M 5 150 Q ${dets.x} ${dets.y} 1000 150`
    
    gsap.to("svg path",{
        attr:{d:initialPath},
        ease:"elastic.out(2,0.1)",
        duration:5,
    })
})

box.addEventListener("mouseleave",(dets)=>{
    console.log("mouse leave"+dets.x)
    gsap.to("svg path",{
        attr:{d:finalPath},
        ease:"power4",

    })
})