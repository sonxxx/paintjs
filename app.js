const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");

//context는 canvas에서 픽셀을 다루는 것
context.strokeStyle = "#2c2c2c";
context.lineWidth = 2.5;

let painting = false;

function stopPainting(){
  painting = false;
}

function startPainting(){
  painting = true;
}

function onMouseMove(event){
  const x = event.offsetX;
  const y = event.offsetY;

  if(!painting){
    context.beginPath();
    context.moveTo(x, y);
  } else {
    context.lineTo(x, y);
    context.strokeStyle();
  }
}

function onMouseDown(event){
  painting = true;
}



if(canvas){
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}