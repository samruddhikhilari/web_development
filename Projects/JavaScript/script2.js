var rect = document.querySelector("#rect");
window.addEventListener("mousemove",function(details){

    var exactX = gsap.utils.mapRange(0,this.window.innerWidth,10 + rect.getBoundingClientRect().width,this.window.innerWidth -(10 + rect.getBoundingClientRect().width),details.clientX);
    var exactY = gsap.utils.mapRange(0,this.window.innerHeight,150,this.window.innerHeight - (100 +rect.getBoundingClientRect().width/2),details.clientY);
    gsap.to("#rect",{
        left:exactX,
        top:exactY,
        ease:Power4
    })
})
