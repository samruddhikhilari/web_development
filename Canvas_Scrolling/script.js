const frame ={
    curr:0,
    max:382,
}

const images=[];
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
let loaded=0;

function loadedimg(index){
    if(index >=0 && index<= frame.max){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const img = images[index];

        const scalex = canvas.width / img.width;
        const scaley= canvas.height / img.height;

        const scale = Math.max(scalex,scaley);

        const nwidth = img.width * scale;
        const nheight = img.height * scale;

        const offSetx = (canvas.width - nwidth) /2;
        const offSety = (canvas.height - nheight) /2;

        context.imageSmoothingEnabled ="true";
        context.imageSmoothingQuality="high"
        context.clearRect(0,0,canvas.width,canvas.height);
        context.drawImage(img,offSetx,offSety,nwidth,nheight);

        frame.curr = index;
    }
}

function accesImg(){

    for(let i=1;i<=frame.max;i++){

        const imgurl = `./images/frame_${i.toString().padStart(4,'0')}.jpeg`
        const img = new Image();
        img.src =imgurl;

        img.onload = ()=>{
            loaded= loaded+1;
            if(loaded === frame.max){
                loadedimg(curr);
            }
        }

        images.push(img);
    }
}

accesImg();