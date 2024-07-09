const imageinput = document.querySelector("#imageinput");
const toptextinput = document.querySelector("#toptextinput");
const bottomtextinput = document.querySelector("#bottomtextinput");
const canvas = document.querySelector("#meme");

let image;

imageinput.addEventListener("change",()=> {
       const imagedataurl = URL.createObjectURL(imageinput.files[0]);

       image = new Image();
       image.src = imagedataurl;

       image.addEventListener("load", () => {
              updatecanvas(canvas,image,toptextinput.value,bottomtextinput.value);
       }, {once: true});
});

toptextinput.addEventListener("change", () => {
    updatecanvas(canvas,image,toptextinput.value,bottomtextinput.value);
});

bottomtextinput.addEventListener("change", () => {
    updatecanvas(canvas,image,toptextinput.value,bottomtextinput.value);
});

function updatecanvas(canvas,image,toptext,bottomtext){

    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width/10);
    const yoffset = height/25;

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);
 
    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize/4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px sans-serif`;

    ctx.textBaseline = `top`;
    ctx.strokeText(toptext,width/2,yoffset);
    ctx.fillText(toptext, width/2, yoffset);

    ctx.textBaseline = `bottom`;
    ctx.strokeText(bottomtext,width/2, height-yoffset);
    ctx.fillText(bottomtext, width/2, height-yoffset);

}

// function downloadImage(canvas) {
//     const canvas = document.getElementById('canvas');
//     const link = document.createElement('a');
//     link.href = canvas.toDataURL(canvas);
//     link.download = 'captioned_image.png';
//     link.click(downloadBtn);
// }