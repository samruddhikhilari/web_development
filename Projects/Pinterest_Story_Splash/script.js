const users=[
    {
        pimg:"https://i.pinimg.com/236x/23/3b/6d/233b6d8bbb584037a41654550301db7d.jpg",
        dimg:"https://i.pinimg.com/736x/c4/91/84/c491843ee652cd971ea4724f7a87a31d.jpg",
        pendingmsg:4,
        location:"pune , india",
        name:"priya",
        age:7,
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga perspiciatis, porro non temporibus neque optio odit praesentium culpa suscipit!",
        interest:[
            { "interest":"music","icon":`<i class="ri-file-music-fill bg-zinc-400 rounded-full capitalize"></i>`},
            { "interest":"reading","icon":`<i class="ri-git-repository-fill" bg-zinc-400 rounded-full capitalize"></i>`},
        ],
    },
    {
        pimg:"https://i.pinimg.com/236x/23/3b/6d/233b6d8bbb584037a41654550301db7d.jpg",
        dimg:"https://i.pinimg.com/236x/67/5e/8e/675e8ecc65b71a4d6a564d2ca8602daf.jpg",
        pendingmsg:9,
        location:"dubai , world",
        name:"mansi",
        age:7,
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga perspiciatis, porro non temporibus neque optio odit praesentium culpa suscipit!",
        interest:[
            { "interest":"music","icon":`<i class="ri-file-music-fill bg-zinc-400 rounded-full capitalize"></i>`},
            { "interest":"reading","icon":`<i class="ri-git-repository-fill" bg-zinc-400 rounded-full capitalize"></i>`},
        ],
    },
    {
        pimg:"https://i.pinimg.com/236x/cd/53/df/cd53df87a861ed76aaf869186ee69455.jpg",
        dimg:"https://i.pinimg.com/236x/bf/b4/8c/bfb48c0c791a51e0e86acdc1caa0afaa.jpg",
        pendingmsg:498,
        location:"junnar , maharashtra",
        name:"shreu",
        age:7,
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga perspiciatis, porro non temporibus neque optio odit praesentium culpa suscipit!",
        interest:[
            { "interest":"music","icon":`<i class="ri-file-music-fill bg-zinc-400 rounded-full capitalize"></i>`},
            { "interest":"reading","icon":`<i class="ri-git-repository-fill" bg-zinc-400 rounded-full capitalize"></i>`},
        ],
    },
    {
        pimg:"https://i.pinimg.com/236x/23/3b/6d/233b6d8bbb584037a41654550301db7d.jpg",
        dimg:"https://i.pinimg.com/236x/2e/53/36/2e5336c860e794342826316e6b650bee.jpg",
        pendingmsg:10,
        location:"karnataka , india",
        name:"gomu",
        age:7,
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga perspiciatis, porro non temporibus neque optio odit praesentium culpa suscipit!",
        interest:[
            { "interest":"music","icon":`<i class="ri-file-music-fill bg-zinc-400 rounded-full capitalize"></i>`},
            { "interest":"reading","icon":`<i class="ri-git-repository-fill" bg-zinc-400 rounded-full capitalize"></i>`},
        ],
    },
]

let curr=0;
let deny = document.querySelector(".deny");
let accept = document.querySelector(".accept");
let main = document.querySelector("#main");
let incoming = document.querySelector("#incoming");

function dataChange(index){
    if(users[index]){
        document.querySelector(".pimg img").src=users[index].pimg;
        document.querySelector("#main img").src= users[index].dimg;
    
        if(users[index+1])
    {    document.querySelector("#incoming img").src = users[index+1].dimg
    }
        document.querySelector("#pmsg").innerHTML=users[index].pendingmsg;
        document.querySelector(".location").innerHTML = users[index].location;
        document.querySelector(".name").innerHTML = users[index].name;
        document.querySelector(".age").innerHTML = users[index].age;
        //interest load
        let clutter=""
        users[index].interest.forEach(interest => {
         clutter +=  `<div
                  class="rounded-xl bg-white opacity-75 flex justify-between items-center p-1 gap-1"
                >
                  ${interest.icon}
                  <h1 class="font-bold text-normal text-black capitalize">${interest.interest}</h1>
                </div>`
        });
        document.querySelector(".bio").innerHTML= users[index].bio;
    
        curr=2;
    }
}

function formContainers(){
    document.querySelectorAll(".details .ele").forEach((ele)=>{
        let div = document.createElement("div");
        div.classList.add(`${ele.classList[1]}-container`,'overflow-hidden')
        div.appendChild(ele)
        document.querySelector(".details").appendChild(div);
    })
}

function anim(){
    document.querySelectorAll(".details>div").forEach((ele)=>{
        let tl = gsap.timeline();

        tl.from(ele,{
            delay:1,
           y: "100%",
           duration : 1,
           opacity: 0,
           stagger :1
        })
    })
}

function changeSlide(){
    let tl = gsap.timeline({
        onComplete :()=>{
            
            gsap.to(main,{
                opacity:1
            })

            if(curr == users.length-1)curr=0;
            document.querySelector("#main img").src = users[curr].dimg;
            dataChange(curr-1)
            curr++;

            main.classList.remove(`z[3]`)
            main.classList.add(`z[2]`)

            incoming.classList.remove(`z-[2]`)
            incoming.classList.add(`z-[3]`)

            
        }
    })

    tl.to(main,{
        scale : 1.1,
        opacity :0,
        duration :.5
    })

    tl.from(incoming,{
        opacity :0,
        duration :.5,
        ease:Power4,
    })
}

deny.addEventListener("click",()=>{

    //structure div's 
    formContainers()
    anim()

    //change slides
    changeSlide();
});

accept.addEventListener("click",()=>{

    //structure div's 
    formContainers()
    anim()

    //change slides
    changeSlide();
});


