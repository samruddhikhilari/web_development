window.addEventListener("wheel",(dets)=>{
    if(dets.deltaY >0){
        gsap.to(".marque",{
            x:"-200%",
            duration:2,
            ease:"none",
        })

        gsap.to(".marque i",{
            rotate:180,
            ease:"none",
        })
    }else{
        gsap.to(".marque",{
            x:"0%",
            duration:2,
            ease:"none",
        })
        gsap.to(".marque i",{
            rotate:0,
            ease:"none",
        })
    }
})