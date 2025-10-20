var arr =[
    "https://i.pinimg.com/236x/d5/68/19/d56819229ebbf3673e20181403d66ce8.jpg",
    "https://i.pinimg.com/474x/e6/24/7e/e6247ec05d8cbf7ca624432e64ca8824.jpg",
    "https://i.pinimg.com/474x/90/68/59/90685992346f61334debbd0b0c50f176.jpg",
    "https://i.pinimg.com/736x/ed/73/a4/ed73a41c162458fca5afaf4f8e5d5f1a.jpg",
    "https://i.pinimg.com/236x/d5/68/19/d56819229ebbf3673e20181403d66ce8.jpg",
    "https://i.pinimg.com/474x/e6/24/7e/e6247ec05d8cbf7ca624432e64ca8824.jpg",
    "https://i.pinimg.com/474x/90/68/59/90685992346f61334debbd0b0c50f176.jpg",
    "https://i.pinimg.com/736x/ed/73/a4/ed73a41c162458fca5afaf4f8e5d5f1a.jpg"
]

var sec = document.querySelector("#storiyan");

var clutter=""
arr.forEach(function(ele,idx){
    clutter +=`<div class="story">
            <img id="${idx}"
              src="${ele}"
              alt=""
            />
          </div>`
})

sec.innerHTML=clutter;
var fscreen =  document.querySelector("#fullscreen");

sec.addEventListener("click",function(details){

   fscreen.style.backgroundImage = `url(${arr[details.target.id]})`
    fscreen.style.display="block"

    setTimeout(function(){
       fscreen.style.display="none"
    },2500)
})

