const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

let isPainting = false;
let isFilling = false;

ctx.lineWidth = lineWidth.value;
ctx.moveTo(200, 200);

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  } else {
    ctx.moveTo(event.offsetX, event.offsetY);
  }
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onDown(event) {
  isPainting = true;
}

function cancelPainting(event) {
  isPainting = false;
  ctx.beginPath();
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

function onColorClick(event) {
  color.value = event.target.dataset.color;

  ctx.strokeStyle = event.target.dataset.color;
  ctx.fillStyle = event.target.dataset.color;
}

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerHTML = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerHTML = "Draw";
  }
}
modeBtn.addEventListener("click", onModeClick);

function onCanvasClick(event) {
  if (isFilling) {
    ctx.fillRect(0, 0, 800, 800);
  }
}

canvas.addEventListener("click", onCanvasClick);
