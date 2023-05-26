const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 100, 50, 200);
ctx.fillRect(400, 100, 50, 200);
ctx.lineWidth = 2;
ctx.fillRect(300, 200, 50, 100);
ctx.fillRect(200, 100, 200, 20);
ctx.moveTo(200, 100);
ctx.lineTo(325, 00);
ctx.lineTo(450, 100);
ctx.fill();

ctx.beginPath();
ctx.fillRect(210 - 40, 400, 15, 100);
ctx.fillRect(350 - 40, 400, 15, 100);
ctx.fillRect(260 - 40, 400, 60, 200);

ctx.arc(250, 350, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(260, 330, 10, Math.PI, 2 * Math.PI);
ctx.arc(220, 330, 10, Math.PI, 2 * Math.PI);
ctx.fill();
