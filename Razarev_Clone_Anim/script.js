function subnavHandller(){
        let tl = gsap.timeline();

    //for mouse enter 
    document.querySelectorAll("#part #partsec").forEach(function(ele){
    ele.addEventListener("mouseenter",function(){

        if(tl && tl.isActive()){
        tl.clear();
    }
        tl.to("#navbottom",{
            height:"200%",
            // duration:.5,
        })
        tl.to("#subnav",{
            display:"block",
            duration:0.1,
        })
        tl.to("#subnav h5",{
            duration:0.2,
            stagger:.2,
            display:"block",
             ease: "power1.in",
        })
    });
    });

    document.querySelectorAll("#part #partsec").forEach(function(ele){

    if(tl && tl.isActive()){
        tl.clear();
    }
      //for leave
    ele.addEventListener("mouseleave",function(){
    tl.to("#subnav h5",{
        duration:.2,
        stagger:.1,
        display:"none",
         ease: "power1.out",
    })
     tl.to("#subnav",{
        display:"none",
        // duration:0.5,
    })
     tl.to("#navbottom",{
        height:"0%",
        // duration:.5,
    })
    });
    });





   

}
subnavHandller();

function page3Effect(){
    document.querySelectorAll("#right_ele").forEach(function(ele){
        

    ele.addEventListener("mouseenter",function(det){
        gsap.to(ele.childNodes[3],{
            opacity:1,
            scale:1,
        })
    })

    ele.addEventListener("mousemove",function(det){
         gsap.to(ele.childNodes[3],{
           
            x:det.x - ele.getBoundingClientRect().x -100,
            y:det.y- ele.getBoundingClientRect().y - 100,
        })
        console.log(det.x +" sp"+det.y);
         console.log(ele.getBoundingClientRect().x +"did "+ele.getBoundingClientRect().y);
    })

    ele.addEventListener("mouseleave",function(){
         gsap.to(ele.childNodes[3],{
            opacity:0,
            scale:0,
        })
    })
    })
}
page3Effect();

function page4Play(){
    document.querySelector("#icon").addEventListener("click",function(){
        gsap.to(document.querySelector("#playvideo"),{
            opacity:1,
            zIndex:100,
            duration:1,
            scale:1,
        })
    })

    document.querySelector("#playvideo").addEventListener("click",function(){
        gsap.to(document.querySelector("#playvideo"),{
            zIndex:1,
            opacity:0,
            scale:0,
            duration:1,
        })
    })
}
page4Play();