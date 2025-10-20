const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouse(){
 window.addEventListener("mousemove",function(details){
 this.document.querySelector("#minicircle").style.transform=`translate(${details.clientX}px,${details.clientY}px)`
 })
}

circleMouse();