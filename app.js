

var turn, team, moveStep, angleStep;

function init (){

    canvas = document.getElementById("tankWarsCanvas");
    ctx = canvas.getContext("2d");
    
    canvas.height = 800;
    canvas.width = 1500;
    w = canvas.width;
    h = canvas.height;
    
    window.onkeydown = moveTank1;

    turn = 0;
    team ="none";
    moveStep = 4;
    angleStep = Math.PI/40;


}

init()

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

var tank1x = 50;

var angleCannon1 = 0;

function tank1 () {
    
    ctx.translate(tank1x + 150, 700)
    ctx.rotate(angleCannon1)
    ctx.translate(-tank1x - 150, -700)
    ctx.drawImage(addCannon1, tank1x + 150, 700);
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.drawImage(addTank1, tank1x, 683);


}


///////////////////////////////////////////// Tank 2

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

var angleCannon2 = 0;

var tank2x = 1150;

function tank2 () {

    ctx.translate(tank2x + 15, 700)
    ctx.rotate(angleCannon2)
    ctx.translate(-tank2x - 15, -700)
    ctx.drawImage(addCannon2, tank2x + 15, 700);
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.drawImage(addTank2, tank2x, 683);
}


///////////////////////////////////////////// Obstacle

var obstacleY = 400; // y position
var obstacleSpeed = 5; // y speed

function obstacle1 () {

    ctx.fillStyle = "#73815C";
    ctx.fillRect(750, obstacleY, 30, 800);

    if (obstacleY > 400 || obstacleY < 0){

        obstacleSpeed = -obstacleSpeed;
    }
    obstacleY += obstacleSpeed;
}

///////////////////////////////////////////// Motion

function moveTank1 (e) {
    e.stopImmediatePropagation();
    var keyCode = e.which;
    if(keyCode == 37) { // Left
        if(!turn) {
            if(tank1x > 0) {
                tank1x = tank1x - moveStep;
            }
        } else {
            if(tank2x > 502) {
                tank2x = tank2x - moveStep;
            }
        }

    } else if(keyCode == 39) { // Right
        if(!turn) {
            if(tank1x < 498) {
                tank1x = tank1x + moveStep;
            }
        } else {
            if(tank2x < 999) {
                tank2x = tank2x + moveStep;
            }
        }

    }else if(keyCode == 38) { 
        if(!turn) {
            if(angleCannon1 <= 0){
                angleCannon1 -= angleStep;
            }
                
        } else {
            if(angleCannon2 <= 0){
                angleCannon2 -= angleStep;
            }
        }
    }else if(keyCode == 40) { 
        if(!turn) {
            if(angleCannon1 <= 90 * (Math.PI/180)){
                angleCannon1 += angleStep;
            }
            
        } else {
            if(angleCannon2 <= 90 * (Math.PI/180)){
                angleCannon2 += angleStep;
            } 
        }
    }     
}


///////////////////////////////////////////// Draw everything

function drawEverything() {
    ctx.clearRect(0,0, 1500, 800);
    obstacle1();
    tank1();
    tank2();
}

setInterval(drawEverything, 10)





