// (function(){
//    // Global variables
//    var canvas, ctx, w, h, player1X, player2X, playerY, radius, backImg, angle1, angle2, currIndex1, currIndex2;

//    //init function
//    function init (){

//       canvas = document.getElementById("tankWarsCanvas");
//       ctx = canvas.getContext("2d");

//       canvas.height = window.innerHeight;
//       canvas.width = window.innerWidth;
//       w = canvas.width;
//       h = canvas.height;

//       ////////////////////

//       player1X = w/4;
// 		player2X = 3*(w/4);
// 		centerY = h-200;
//       radius = 10;
//       angle1 = 0;
//       angle2 = Math.PI;
//       currIndex1 = {x: 0, y: 0};
//       currIndex2 = {x: 0, y: 0};
//       addBackground();
//     }
    
//     backImg = new Image();

//     backImg.onload = function() {
//       ctx.drawImage(backImg, 0, 0, w, h);
//       drawPlayer1(player1X, centerY, angle1);
//       drawLayout();

//     }

//     function addBackground() {
// 		backImg.src = "assets/bg.png";
//    }
   
//    function addTank() {
// 		backImg.src = "assets/tank.png";
// 	}


//     // Draw Layout
//     function drawLayout() {
// 		ctx.strokeStyle = "black";
// 		ctx.lineWidth = 1;
// 		ctx.strokeRect(0, 0, w, h);
// 		ctx.strokeStyle = "#929E7F";
//       ctx.lineWidth = 80;
// 		ctx.beginPath();
// 		ctx.moveTo(w/2, h);
// 		ctx.lineTo(w/2, h-500);
// 		ctx.stroke();
//    }
   
//    // Draw Player 1

//    function drawPlayer1(x, y, angle) {
// 		currIndex1.x = x + 35*Math.cos(angle);
// 		currIndex1.y = y - 35*Math.sin(angle);
//       ctx.strokeStyle = "#869371";
//       ctx.translate(x, y);
//       ctx.rotate(0.5);
//       ctx.translate(-x, -y);
// 		ctx.beginPath();
// 		ctx.moveTo(x,y);
// 		ctx.lineTo(currIndex1.x,currIndex1.y);
// 		ctx.stroke();
// 		var grd = ctx.createRadialGradient(x+8, y-8, 2, x, y, radius);
// 		grd.addColorStop(0, '#869371');
// 		grd.addColorStop(1, '#869371');
// 		ctx.beginPath();
// 		ctx.arc(x, y, radius, 0, 2*Math.PI, false);
// 		ctx.fillStyle = grd;
//       ctx.fill();
//       ctx.setTransform(1, 0, 0, 1, 0, 0);
// 	}

     
//     // Call the init function
//     init();
// }());

// console.log("hello");

canvas = document.getElementById("tankWarsCanvas");
ctx = canvas.getContext("2d");

canvas.height = 800;
canvas.width = 1500;
w = canvas.width;
h = canvas.height;


///////// Separator


x = 750;
function obstacle1 () {
   
    requestAnimationFrame(obstacle1);

    ctx.fillStyle = "#697752";
    ctx.fillRect(x, 450, 30, 800);
    // ctx.fillStyle = "#697752";
    // ctx.fillRect(750, 50, 30, 350);

    x += 1;
    


};

obstacle1 ();




///////// Tank 1

var addCannon1 = new Image();
addCannon1.onload = function () {
    ctx.drawImage(addCannon1, 250, 700);
}
addCannon1.src ="assets/canon.png"

var addTank1 = new Image();
addTank1.onload = function () {
    ctx.drawImage(addTank1, 100, 683);
}
addTank1.src = "assets/tank.png";



///////// Tank 2

var addCannon2 = new Image();
addCannon2.onload = function () {
    ctx.drawImage(addCannon2, 1165, 700);
}
addCannon2.src ="assets/canon2.png"

var addTank2 = new Image();
addTank2.onload = function () {
    ctx.drawImage(addTank2, 1150, 683);
}
addTank2.src = "assets/tank2.png";










