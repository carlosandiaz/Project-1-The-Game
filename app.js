var turn, team, moveStep, angleStep, dirX, dirY, currIndex1, moveIndex1, moveIndex2, asteroidRadius;

function init() {

    canvas = document.getElementById("tankWarsCanvas");
    ctx = canvas.getContext("2d");

    canvas.height = 800;
    canvas.width = 1500;
    w = canvas.width;
    h = canvas.height;


    moveIndex1 = {
        x: -10,
        y: -10
    };
    moveIndex2 = {
        x: -10,
        y: -10
    };
    ballRadius = 8;

    dirX = 5;
    dirY = 5;

    score = {
        P1: 0,
        P2: 0
    };
    turn = 0;

    radius = 110;

    team = "none";

    moveStep = 4;

    angleStep = Math.PI / 40;

    score = {
        P1: 0,
        P2: 0
    };


    window.onkeydown = moveTank;

}

init();

function reinit() {
    dirX = 5;
    dirY = 5;
    moveIndex1 = {
        x: -10,
        y: -10
    };
    moveIndex2 = {
        x: -10,
        y: -10
    };
    if (turn) {
        $('#WhoseTurn').text('Player 1\'s Turn');
    } else {
        $('#WhoseTurn').text('Player 2\'s Turn');
    }
    return;
}


///////////////////////////////////////////// Tank 1


var addCannon1 = new Image();
addCannon1.onload = function () {
    ctx.drawImage(addCannon1, 250, 700);
}
addCannon1.src = "assets/canon.png"

var addTank1 = new Image();
addTank1.onload = function () {
    ctx.drawImage(addTank1, 100, 683);
}
addTank1.src = "assets/tank.png";

var tank1x = 50;

var tank1y = 700;

var angleCannon1 = 0;

function tank1() {

    ctx.translate(tank1x + 150, 700)
    ctx.rotate(angleCannon1)
    ctx.translate(-tank1x - 150, -700)
    ctx.drawImage(addCannon1, tank1x + 150, 700);
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.drawImage(addTank1, tank1x, 683);
}

///////////////////////////////////////////// Tank 2

var addCannon2 = new Image();
addCannon2.onload = function (x, y) {

    ctx.drawImage(addCannon2, 1165, 700);
}
addCannon2.src = "assets/canon2.png"

var addTank2 = new Image();
addTank2.onload = function () {
    ctx.drawImage(addTank2, 1150, 683);
}
addTank2.src = "assets/tank2.png";

var angleCannon2 = 0;

var tank2x = 1190;

var tank2y = 700;

function tank2() {

    ctx.translate(tank2x + 100, 700)
    ctx.rotate(angleCannon2)
    ctx.translate(-tank2x - 100, -700)
    ctx.drawImage(addCannon2, tank2x + 15, 700);
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.drawImage(addTank2, tank2x, 683);
}



///////////////////////////////////////////// Obstacle

var obstacleY = 500; // y position
function obstacle1() {

    ctx.fillStyle = "#727F5B";
    ctx.fillRect(750, obstacleY, 30, 1500);

}

var obstacleY1 = 520; // y position
function obstacle2() {

    ctx.fillStyle = "#84926C";
    ctx.fillRect(725, obstacleY1, 30, 1500);
}

var obstacleY2 = 520; // y position
function obstacle3() {

    ctx.fillStyle = "#84926C";
    ctx.fillRect(775, obstacleY2, 30, 1500);
}

///////////////////////////////////////////// Motion

function moveTank(e) {

    e.stopImmediatePropagation();
    var keyCode = e.which;
    if (keyCode == 37) { // Left
        if (!turn) {
            if (tank1x > 0) {
                tank1x = tank1x - moveStep;
            }
        } else {
            if (tank2x > 780) {
                tank2x = tank2x - moveStep;
            }
        }

    } else if (keyCode == 39) { // Right
        if (!turn) {
            if (tank1x < 498) {
                tank1x = tank1x + moveStep;
            }
        } else {
            if (tank2x < 1250) {
                tank2x = tank2x + moveStep;
            }
        }

    } else if (keyCode == 38) {
        if (!turn) {
            if (angleCannon1 <= 0 && angleCannon1 > -Math.PI / 2) {
                angleCannon1 -= angleStep;
            }

        } else {
            if (angleCannon2 >= 0 && angleCannon2 < Math.PI / 2) {
                angleCannon2 += angleStep;
            }
        }
    } else if (keyCode == 40) {
        if (!turn) {
            if (angleCannon1 <= 0 && angleCannon1 > - Math.PI / 2) {
                angleCannon1 += angleStep;
            }

        } else {
            if (angleCannon2 >= 0 && angleCannon2 < Math.PI / 2) {
                angleCannon2 -= angleStep;
            }
        }
    } else if (keyCode == 32) {

        if (!turn) {

            launchCannonball({
                x: tank1x + 150 + 85 * Math.cos(angleCannon1),
                y: 712 + 85 * Math.sin(angleCannon1)
            });

        } else {

            launchCannonball({
                x: tank2x + 100 - 85 * Math.cos(angleCannon2),
                y: 712 - 85 * Math.sin(angleCannon2)
            });

        }
    }
}

///////////////////////////////////////////// Collision Detection cannonball and tank

function detectCollision(x1, y1, r1, x2, y2, r2) {
    var dist2 = ((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    if (dist2 <= ((r2 + r1) * (r2 + r1)))
        return true;
    return false;
}


///////////////////////////////////////////// Test Collision

// function testCollision1(){

//     ctx.beginPath();
//     ctx.arc(180, 790, 110, 0, 2 * Math.PI);
//     ctx.stroke();

// };


// function testCollision2(){

//     ctx.beginPath();
//     ctx.arc(1315, 790, 110, 0, 2 * Math.PI);
//     ctx.stroke();

// };



var explosionAnimX = 0;
var explosionAnimY = 0;

var explosionAnim1 = new Image();

function explosionAnimFun () {

    ctx.drawImage(explosionAnim1, explosionAnimX, explosionAnimY);
    explosionAnim1.src = "assets/explosion.gif"
}


///////////////////////////////////////////// Collision Detection cannonball and boundary

function launchCannonball(index) {

    if (detectCollision(index.x, index.y, ballRadius, tank1x+130, tank1y+90, radius)) {

        explosionAnimX = tank1x+130;

        explosionAnimY = tank1y+90;

        explosionAnimFun();
        
        setInterval(explosionAnimFun, 10);

        score.P2 += 1;
        updateScoreP2();
        turn = 1 - turn;
        reinit();
        return;

    } else if (detectCollision(index.x, index.y, ballRadius, tank2x+125, tank2y+90, radius, explosionAnimX, explosionAnimY)) {

        score.P1 += 1;
        updateScoreP1();
        turn = 1 - turn;
        reinit();
        return;
    }

    if (index.x >= (w / 2) - 25 && index.x <= (w / 2) + 25 && index.y >= h - 300 && index.y <= h) {
        dirX = -dirX
    } else if (index.x < 0) {
        dirX = -dirX;
    } else if (index.x > w - 1) {
        dirX = -dirX;
    } else if (index.y < 0) {
        dirY = -dirY;
    } else if (index.y > h - 1) {
        turn = 1 - turn;
        reinit();
        return;
    }
    if (!turn) {
        moveIndex1.x = index.x + dirX * Math.cos(angleCannon1);
        moveIndex1.y = index.y + dirY * Math.sin(angleCannon1);
    } else {
        moveIndex2.x = index.x - dirX * Math.cos(angleCannon2);
        moveIndex2.y = index.y - dirY * Math.sin(angleCannon2);
    }
    ctx.beginPath();
    if (!turn) {
        ctx.arc(moveIndex1.x, moveIndex1.y, ballRadius, 0, 2 * Math.PI, false);
    } else {
        ctx.arc(moveIndex2.x, moveIndex2.y, ballRadius, 0, 2 * Math.PI, false);
    }

    ctx.fillStyle = "#374029";
    ctx.fill();


}

// Update score
function updateScoreP1() {
    $('#Player1Score').text(Number($('#Player1Score').text()) + 1);
}

function updateScoreP2() {
    $('#Player2Score').text(Number($('#Player2Score').text()) + 1);
}

///////////////////////////////////////////// Draw everything

function drawEverything() {
    ctx.clearRect(0, 0, 1500, 800);
    obstacle1();
    obstacle2();
    obstacle3();
    tank1();
    tank2();
    //explosionAnimFun();
    //testCollision1(); ////// Test Collision
    //testCollision2();
    if (!turn && moveIndex1.x != -10 && moveIndex1.y != -10) {
        launchCannonball(moveIndex1);
    } else if (turn && moveIndex2.x != -10 && moveIndex2.y != -10) {
        launchCannonball(moveIndex2);
    }

}

setInterval(drawEverything, 0.1)