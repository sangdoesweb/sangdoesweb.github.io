let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let line = 5;
let lineMax = 6;
let lineMin = 3;
let lineCapped = false;

const canvas = document.querySelector("canvas");
cx = canvas.getContext("2d");

canvas.width = 350;
canvas.height = 350;
cx.strokeStyle = "#fff";

let myText = "Draw here";
function textCanvas() {
  cx.fillStyle = "#dedede";
  cx.font = "1.5em Quicksand";
  cx.fillText(
    myText,
    canvas.width - cx.measureText(myText).width,
    canvas.height - 2
  );
  cx.globalCompositeOperation = "hue";
}
textCanvas();
console.log();
function canvasDraw(event) {
  if (!isDrawing) return;
  console.log(event);
  cx.strokeStyle = `hsl(${hue}, 100%, 55%)`;
  cx.lineWidth = line;
  cx.lineJoin = "round";
  cx.lineCap = "round";
  cx.beginPath();
  cx.moveTo(lastX, lastY);
  cx.lineTo(event.offsetX, event.offsetY);
  cx.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];
  hue += 3;
  if (line > lineMax) {
    lineCapped = true;
  }
  if (line < lineMin) {
    lineCapped = false;
  }
  if (lineCapped) {
    line -= 0.1;
  } else line += 0.1;
}

canvas.addEventListener("mousemove", canvasDraw);
canvas.addEventListener("mousedown", () => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  //cx.clearRect(0, 0, canvas.width, canvas.height);
  /* textCanvas(); */
});

window.onresize = function () {
  canvas.width = 350;
  //canvas.style.width = window.innerWidth;
  canvas.height = 350;
  //canvas.style.height = window.innerHeight;
  /* textCanvas(); */
};
