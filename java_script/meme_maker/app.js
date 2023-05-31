const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const eraseBtn = document.getElementById("erase-btn");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

let isPainting = false;
let isFilling = false;

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
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

function onDoubleClick(event) {
  const text = textInput.value;

  if (text !== "") {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = "48px serif";
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore();
  }
}

canvas.addEventListener("dblclick", onDoubleClick);
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

function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
destroyBtn.addEventListener("click", onDestroyClick);

function onCanvasClick(event) {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}
canvas.addEventListener("click", onCanvasClick);

function onEraseClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerHTML = "Fill";
}
eraseBtn.addEventListener("click", onEraseClick);

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);

  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  };
  fileInput.value = null;
}

fileInput.addEventListener("change", onFileChange);

function onSaveClick(event) {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}
saveBtn.addEventListener("click", onSaveClick);
