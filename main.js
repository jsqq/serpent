/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

function onKeyDown(event){
    var keyCode = event.keyCode;
    var moveDirection;

    if ([left, numpadleft].indexOf(keyCode)>-1) {
        moveDirection = [-1, 0];
    }
    if ([up, numpadup].indexOf(keyCode)>-1) {
        moveDirection = [0, -1];
    }
    if ([right, numpadright].indexOf(keyCode)>-1) {
        moveDirection = [1, 0];
    }
    if ([down, numpaddown].indexOf(keyCode)>-1) {
        moveDirection = [0, 1];
    }

    if (moveDirection) {
        for (var i = 0; i < allSerpents.length; i++) {
            var currentSerpent = allSerpents[i];
            if ([currentSerpent.leftKey,
                    currentSerpent.upKey,
                    currentSerpent.rightKey,
                    currentSerpent.downKey].indexOf(keyCode)>-1) {
                currentSerpent.changeMoveDirection(moveDirection);
            }
        }
    }
}

function moveSerpents(){
    var isAllSerpentsAlive = true;
    var message = "";
    for (var i = 0; i < allSerpents.length; i++) {
        var currentSerpent = allSerpents[i];
        if (!currentSerpent.alive) {
            message = message + "\n Serpent" +
                currentSerpent.id + ": " +
                currentSerpent.message;
        }
        isAllSerpentsAlive = isAllSerpentsAlive && currentSerpent.alive;
    }

    if (isAllSerpentsAlive) {
        for (var i = 0; i < allSerpents.length; i++) {
            var serpentToMove = allSerpents[i];
            if (serpentToMove.moveVector.length > 0) {
                serpentToMove.move();
                var currentCanvas = serpentToMove.canvas;
                currentCanvas.draw(serpentToMove);
            }
        }
    }  else {
        alert(message);
        for (var i = 0; i < allSerpents.length; i++) {
            var serpentToInit = allSerpents[i];
            var fieldOfSerpent = serpentToInit.field;
            var canvasOfSerpent = serpentToInit.canvas;
            serpentToInit.init(fieldOfSerpent, canvasOfSerpent, xStartCell, yStartCell);
            canvasOfSerpent.draw(fieldOfSerpent);
            canvasOfSerpent.draw(serpentToInit);
        }
    }
}

var allSerpents = [];

var myField0 = new Fields(0, xCellAmt, yCellAmt, widthOfCell, heightOfCell);
var myCanvas0 = new Canvases(0, myField0, styleOfCanvas, colorOfField, colorOfSerpent);
var mySerpent0 = new Serpents(0, startLengthOfSerpent, left, up, right, down);
mySerpent0.init(myField0, myCanvas0, xStartCell, yStartCell);

allSerpents.push(mySerpent0);

myCanvas0.draw(myCanvas0);
myCanvas0.draw(myField0);
myCanvas0.draw(mySerpent0);

// var myField1 = new Fields(1, xCellAmt, yCellAmt, widthOfCell, heightOfCell);
// var myCanvas1 = new Canvases(1, myField1, styleOfCanvas, colorOfField, colorOfSerpent);
// var mySerpent1 = new Serpents(1, startLengthOfSerpent, numpadleft, numpadup, numpadright, numpaddown);
// mySerpent1.init(myField1, myCanvas1, xStartCell, yStartCell);
//
// allSerpents.push(mySerpent1);
//
// myCanvas1.draw(myCanvas1);
// myCanvas1.draw(myField1);
// myCanvas1.draw(mySerpent1);

// var myField2 = new Fields(2, xCellAmt, yCellAmt, widthOfCell, heightOfCell);
// var myCanvas2 = new Canvases(2, myField2, styleOfCanvas, colorOfField, colorOfSerpent);
// var mySerpent2 = new Serpents(2, startLengthOfSerpent, numpadleft, numpadup, numpadright, numpaddown);
// mySerpent2.init(myField2, myCanvas2, xStartCell, yStartCell);
//
// allSerpents.push(mySerpent2);
//
// myCanvas2.draw(myCanvas2);
// myCanvas2.draw(myField2);
// myCanvas2.draw(mySerpent2);


window.addEventListener("keydown", onKeyDown, false); // keypress not work on Chrome
window.setInterval(moveSerpents, delay);