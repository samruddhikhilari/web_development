document.addEventListener("DOMContentLoaded", function() {
    gsap.to("#nav", {
        backgroundColor:"#000",
        duration:1,
        height:"7.5%",
        scrollTrigger:{
            trigger:"#nav",
            scroller:"body",
            start:"top -10%",
            scrub:1
        }
    });
});

document.addEventListener("DOMContentLoaded",function(){
    gsap.to("#main",{
        backgroundColor:"#000",
        scrollTrigger:{
            scroller:"body",
            trigger:"#main",
            start:"top -50%",
            end:"top -60%",
            scrub:2
        }
    });
});

document.addEventListener("mousemove", function(dets){
    var cur = document.querySelector("#cursor"); 
    var blur= document.querySelector("#cursor-blur");

    if(cur){
        cur.style.left = dets.clientX + "px"
        cur.style.top = dets.clientY + "px"

        if(blur){
            blur.style.left = dets.clientX -150 + "px"
            blur.style.top = dets.clientY -150 + "px"
        }
    }
});

document.addEventListener("DOMContentLoaded",function(){
    
    var cur = document.querySelector("#cursor"); 

    var h4all = document.querySelectorAll("#nav .tab h4");
    h4all.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
        cur.style.scale = 3
        cur.style.border = "1px solid #fff "
        elem.style.color="yellow"
        cur.style.backgroundColor = "transparent"
        })
    });

    h4all.forEach(function(elem){
        elem.addEventListener("mouseleave",function(){
        cur.style.scale = 1
        elem.style.color="white"
        cur.style.border = "0px solid #fff "
        cur.style.backgroundColor = "green"
        })
    });
});


document.addEventListener("DOMContentLoaded", function() {
   
    document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);
    });

        gsap.from("#about-us img, #about-us-in",{
            y:50,
            opacity: 0,
            duration :1,
            stagger :0.4,
            scrollTrigger:{
                scroller : "body",
                trigger : "#about-us",
                start: "top 60% ",
                end:"top 58%",
                scrub:3
            }
        });
});


document.addEventListener("DOMContentLoaded", function() {
   
    document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);
    });

        gsap.from(".cards",{
            scale:0.8,
            opacity: 0,
            duration :1,
            scrollTrigger:{
                scroller : "body",
                trigger : ".cards",
                start: "top 70% ",
                end:"top 68%",
                scrub:2
            }
        });
});


document.addEventListener("DOMContentLoaded", function() {
   
    document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);
    });

       gsap.from("#colon1",{
        x:-70,
        y:-70,
        scrollTrigger:{
            scroller:"body",
            trigger:"#colon1",
            scrub:4,
            start:"top 55%",
            end:"top 45%"
        }

       })
});


document.addEventListener("DOMContentLoaded", function() {
   
    document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);
    });

       gsap.from("#colon2",{
        x:70,
        y:70,
        scrollTrigger:{
            scroller:"body",
            trigger:"#colon2",
            scrub:4,
            start:"top 75%",
            end:"top 85%"
        }

       })
});

document.addEventListener("DOMContentLoaded", function() {
   
    document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);
    });

       gsap.from("#page4 h1",{
        y:50,
        scrollTrigger:{
            scroller:"body",
            trigger:"#page4 h1",
            scrub:4,
            start:"top 75%",
            end:"top 70%"
        }

       })
});

