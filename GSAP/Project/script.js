function heroAnimation(){
    var tl = gsap.timeline();
var nav = document.querySelector("nav")

tl.from("nav h2, nav h4 , nav button",{
    opacity:0,
    y:-40,
    duration:0.4,
    stagger:.15
})

tl.from("#center-part1 h2, #center-part1 p , #center-part1 button",{
    opacity:0,
    x:-100,
    duration:.5,
    stagger:.15,
},"-=.2")

tl.from("#center-part2 img",{
    opacity:0,
    scale:0,
    duration:0.5,
},"-=.4")

tl.from("#hero-bottom img",{
opacity:0,
y:50,
duration:1,
stagger:.15,
})
}

function section2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            scroller:"body",
            trigger:"#section2",
            start:"top 50%",
            end:"top 0%",
            scrub:1,
        }
    });
    
    tl2.from("#section2 #services",{
        opacity:0,
        y:"-100%",
        duration:1,
    })
    
    tl2.from(".line.left",{
        opacity:0,
        x:"-300%",
        stagger:.50,
        duration:1,
    },"anim1")
    
    tl2.from(".line-black.right",{
        opacity:0,
        x:"300%",
        stagger:.50,
        duration:1,
    },"anim1")
    
    tl2.from(".line-black.left",{
        opacity:0,
        x:"-300%",
        stagger:.50,
        duration:1,
    },"anim2")
    
    tl2.from(".line.right",{
        opacity:0,
        x:"300%",
        stagger:.50,
        duration:1,
    },"anim2")
}

heroAnimation()
section2Animation()

