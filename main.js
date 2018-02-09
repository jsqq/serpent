/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

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
        alert(mySerpent0.message);
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

var myField0 = new Fields(0, xCellAmt, yCellAmt, widthOfCell, heightOfCell);
myField0.init();

var mySerpent0 = new Serpents(0, startLengthOfSerpent);
mySerpent0.init(myField0, xStartCell, yStartCell);

var myCanvas0 = new Canvases(0, myField0, styleOfCanvas, colorOfField, colorOfSerpent);
myCanvas0.draw(myCanvas0);

myCanvas0.draw(myField0);
myCanvas0.draw(mySerpent0);

// var myField1 = new Fields(1, xCellAmt+1, yCellAmt+1, widthOfCell+5, heightOfCell-5);
// myField1.init();
//
// var mySerpent1 = new Serpents(1, startLengthOfSerpent+1);
// mySerpent1.init(myField1, xStartCell-2, yStartCell+2);
//
// var myCanvas1 = new Canvases(1, myField1, styleOfCanvas, colorOfField, colorOfSerpent);
// myCanvas1.draw(myCanvas1);
//
// myCanvas1.draw(myField1);
// myCanvas1.draw(mySerpent1);


//window.addEventListener("keypress", onKeyPress, false); // keypress not work on Chrome
window.addEventListener("keydown", onKeyDown, false);
window.setInterval(moveSerpent0, delay );