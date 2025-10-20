let i1 = document.querySelector("#img1")
let i2 = document.querySelector("#img2")
let i3 = document.querySelector("#img3")
let h1 = document.querySelector("#nav h1")

gsap.from(i1,{
    y:"10%",
    opacity:0,
    duration:1
})
gsap.from(i2,{
    x:"20%",
    duration:1,
    opacity:0,
})
gsap.from(i3,{
    x:"-15%",
    duration:1,
    opacity:0,
})
gsap.from(h1,{
    opacity:0,
    duration:.5,
    x:"-100%",
})