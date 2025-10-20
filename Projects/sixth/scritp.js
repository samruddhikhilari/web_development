gsap.to(".imgcontainer",{
    width:"100%",
    stagger:2,
    ease:"expo.inOut",
});

gsap.to(".text h1",{
    top:0,
    stagger:2,
    ease:"expo.inOut",
    color:"blue"
});
gsap.to(".text h1",{
    delay:2,
    top:"-100%",
    stagger:2,
    ease:"expo.inOut",
});