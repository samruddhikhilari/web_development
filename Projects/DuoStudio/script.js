function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
document.addEventListener("DOMContentLoaded", function () {
    init(); // Initialize Locomotive Scroll and ScrollTrigger

    gsap.to("#page1 h1", {
        x: -100,
        scrollTrigger: {
            trigger: "#page1 h1",
            scroller:"#main",
            start: "top 30%",
            end: "top 0%",
            scrub: 3
        }
    });

    gsap.to("#page1 h2", {
        x: 100,
        scrollTrigger: {
            trigger: "#page1 h2",
            scroller:"#main",
            start: "top 30%",
            end: "top 0%",
            scrub: 3
        }
    });

    gsap.to("#page1 video", {
        width:"80%",
        scrollTrigger: {
            trigger: "#page1 h2",
            scroller:"#main",
            start: "top 30%",
            end: "top 0%",
            scrub: 3
        }
    });
});
