var rect = document.querySelector("#rect");

rect.addEventListener("mousemove",function(details){

    var loc = rect.getBoundingClientRect();
    var insideRect = details.clientX - loc.left;

    if(insideRect < loc.width/2){
        var redColor = gsap.utils.mapRange(0,loc.width/2,255,0,insideRect);
        gsap.to(rect,{
            backgroundColor:`rgb(${redColor},0,0)`,
            ease:Power4
        })

    }else{
        var blueColor = gsap.utils.mapRange(loc.width/2,loc.width,0,255,insideRect);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${blueColor})`,
            ease: Power3
        })
    }
})

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"pink"
    })
})