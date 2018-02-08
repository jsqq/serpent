/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

var message;

var moveDirection;
function onKeyPress(event){
    if (!serpent.alive) {
        return;
    }

    var keyCode = event.keyCode;
    switch (keyCode) {
        case left:
            moveDirection = [-1,0];
            break;
        case up:
            moveDirection = [0,-1];
            break;
        case right:
            moveDirection = [1,0];
            break;
        case down:
            moveDirection = [0,1];
            break;
    }
    if (moveDirection) {
        move();
    }
}

function move() {
    if (serpent.alive) {
        if (moveDirection!==undefined) {
            serpent.move(moveDirection);
            canvas.drawserpent(serpent);
        }
    } else {
        alert(message);
        moveDirection = undefined;
        serpent.init();
        canvas.drawfield(field);
        canvas.drawserpent(serpent);
        return;
    }
}
var field = new myField(1,xCellAmt,yCellAmt);
field.init();
serpent.init();
canvas.drawfield(field);
canvas.drawserpent(serpent);
addEventListener("keypress", onKeyPress);
setInterval( move, delay );