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
            optionsToInitSerpent = {field: fieldOfSerpent, canvas: canvasOfSerpent, xStart: xStartCell, yStart: yStartCell};
            serpentToInit.init(optionsToInitSerpent);
            canvasOfSerpent.draw(fieldOfSerpent);
            canvasOfSerpent.draw(serpentToInit);
        }
    }
}

var allSerpents = [];

var optionsToCreateField = {id: 0, xDimension: xCellAmt, yDimension: yCellAmt, width: widthOfCell, height: heightOfCell};
var myField0 = new Fields(optionsToCreateField);

var optionsToCreateCanvas = {id: 0,  field: myField0, style: styleOfCanvas, fieldColor: colorOfField, serpentColor: colorOfSerpent};
var myCanvas0 = new Canvases(optionsToCreateCanvas);

var optionsToCreateSerpent = {id: 0, length: startLengthOfSerpent, leftKey: left, upKey: up, rightKey: right, downKey: down};
var mySerpent0 = new Serpents(optionsToCreateSerpent);

var optionsToInitSerpent = {field: myField0, canvas: myCanvas0, xStart: xStartCell, yStart: yStartCell};
mySerpent0.init(optionsToInitSerpent);

allSerpents.push(mySerpent0);

myCanvas0.draw(myCanvas0);
myCanvas0.draw(myField0);
myCanvas0.draw(mySerpent0);

window.addEventListener("keydown", onKeyDown, false); // keypress not work on Chrome
window.setInterval(moveSerpents, delay);