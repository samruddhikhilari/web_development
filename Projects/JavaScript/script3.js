function throttle(mainFunction, delay) {
    let timerFlag = null; 
  
    return (...args) => {
      if (timerFlag === null) { 
        mainFunction(...args); 
        timerFlag = setTimeout(() => { 
          timerFlag = null; 
        }, delay);
      }
    };
  }

document.querySelector("#center").addEventListener("mousemove",throttle((details)=>{
    var div = document.createElement("div");
    div.classList.add("imagediv")
    div.style.left = details.clientX+"px";
    div.style.top = details.clientY+"px";

    var img = document.createElement("img");
    img.setAttribute("src","https://i.pinimg.com/236x/64/8d/13/648d1336053ef00459eaad0d682c1099.jpg")
    img.classList.add("img")
    document.body.appendChild(div)
    div.appendChild(img)

    gsap.to(img,{
        y:0,
        ease:Power1,
        duration:0.2
    })

    gsap.to(img,{
        y:"100%",
        delay:.4,
        duration:0.2
    })

    setTimeout(function(){
        div.remove();
    },2000)
},300)
);