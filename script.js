const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const frame = new Image();
frame.src = "frame.png";

document.getElementById("upload").addEventListener("change", function(e){

const reader = new FileReader();

reader.onload = function(event){

const img = new Image();

img.onload = function(){

ctx.clearRect(0,0,canvas.width,canvas.height);

// desenha foto
ctx.drawImage(img,0,0,1080,1080);

// desenha moldura
ctx.drawImage(frame,0,0,1080,1080);

}

img.src = event.target.result;

}

reader.readAsDataURL(e.target.files[0]);

});

function download(){

const link = document.createElement("a");
link.download = "endometriose-marco.png";
link.href = canvas.toDataURL();
link.click();

}
