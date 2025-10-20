var h1 = document.querySelector("h1")
var text = h1.innerText

var data = text.split("")

var len = Math.floor(data.length/2)

var clutter=""
data.forEach((ele,idx)=>{
    if(idx < len){
        clutter += `<span class='a'>${ele}</span>`
    }else {
        clutter += `<span class='b'>${ele}</span>`
    }
})


h1.innerHTML = clutter
console.log(h1)

gsap.from("h1 .a",{
    opacity:0,
    y:50,
    duration:1.5,
    stagger:0.1,
    ease: "elastic.out(1,0.3)",
})

gsap.from("h1 .b",{
    opacity:0,
    y:50,
    duration:1.5,
    stagger:-0.1,
    ease: "elastic.out(1,0.3)",
})
