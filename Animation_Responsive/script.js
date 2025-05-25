const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function fixed_frameHandling()
{
    var con = document.querySelector("#ele_container");
    var frame = document.querySelector("#fixed_frame");

    con.addEventListener("mouseenter",function(){
        frame.style.display="block";
    });

    con.addEventListener("mouseleave",function(){
        frame.style.display="none";
    });

    var eles = document.querySelectorAll("#ele");
    eles.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        frame.style.backgroundImage="url("+e.getAttribute("data-image")+")";
    })
    e.addEventListener("mouseleave",function(){
        frame.style.backgroundImage="";
    })
    });

    frame.addEventListener("mouseenter",function(){
        frame.style.zIndex=2000;
    });
}
fixed_frameHandling();

function swiperEdition(){
    
 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 10,
      freeMode: true,
    });
}
swiperEdition();

function loaderEdition(){
    
var loader = document.querySelector("#loader");
setTimeout(function(){
    loader.style.top="-100%";
},3000);

//show kar do
//&
//setup out animation

gsap.from(document.querySelectorAll("#loader h1"),{
    opactity:0,
    y:20,
    stagger:1,
    duration:1,
    display:"block",
});

//nashta kar do 
gsap.to(document.querySelectorAll("#loader h1"),{
    opactity:0,
    display:"none",
    stagger:1,
    duration:1,
});
}
loaderEdition();