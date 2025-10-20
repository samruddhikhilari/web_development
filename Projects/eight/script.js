const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let tl = gsap.timeline();

tl.to("#page1",{
    y:"100vh",
    duration:0,
    //delay:1,
    scale:0.5,
})

tl.to("#page1",{
    y:"0vh",
    duration:1.5,
    delay:.5,
})

tl.to("#page1",{
    y:"0vh",
    rotate:"-360",
    scale:1,
    duration:1,
})