/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

var message;

var moveDirection;
function onKeyDown(event){
    moveDirection = undefined;
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
    moveSerpent0();
}

function moveSerpent0(){
    if (!mySerpent0.alive) {
        alert(message);
        mySerpent0.init(myField0, xStartCell, yStartCell);
        myCanvas0.draw(myField0);
        myCanvas0.draw(mySerpent0);
        moveDirection = undefined;
    } else {
        if (moveDirection) {
            mySerpent0.move(moveDirection);
            myCanvas0.draw(mySerpent0);
        }
    }
}

var myField0 = new Fields(0, xCellAmt, yCellAmt, colorOfField);
myField0.init();

var mySerpent0 = new Serpents(0, startLengthOfSerpent, colorOfSerpent);
mySerpent0.init(myField0, xStartCell, yStartCell);

var myCanvas0 = new Canvases(0, xCellAmt, yCellAmt, widthOfCell, heightOfCell, styleOfCanvas, colorOfField, colorOfSerpent);
myCanvas0.draw(myCanvas0);

myCanvas0.draw(myField0);
myCanvas0.draw(mySerpent0);

//window.addEventListener("keypress", onKeyPress, false);
window.addEventListener("keydown", onKeyDown, false);
window.setInterval(moveSerpent0, delay );