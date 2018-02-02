/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

var canvas = document.getElementById('myCanvas');
canvas.width = widthOfCell*xCellAmt;
canvas.height = heightOfCell*yCellAmt;
canvas.style = styleOfCanvas;

var ctx = canvas.getContext("2d");

var serpentGradient = ctx.createLinearGradient(0,0,200,0);
serpentGradient.addColorStop(0,serpentColor);
var emptyGradient = ctx.createLinearGradient(0,0,200,0);
emptyGradient.addColorStop(1,emptyColor);


for (var i = 1; i < xCellAmt; i++) {
    ctx.moveTo(i*widthOfCell, 0);
    ctx.lineTo(i*widthOfCell, heightOfCell*yCellAmt);
    ctx.stroke();
}

for (var j = 1; j < yCellAmt; j++) {
    ctx.moveTo(0, j*heightOfCell);
    ctx.lineTo(widthOfCell*xCellAmt, j*heightOfCell);
    ctx.stroke();
}

var drawer = {};
drawer.drawserpent = function (serpentToDraw) {
    for (var i = 0; i < serpentToDraw.body.length; i++) {
        ctx.fillStyle = serpentGradient;
        ctx.fillRect(
            serpentToDraw.body[i].x*widthOfCell+xdelta,
            serpentToDraw.body[i].y*heightOfCell+ydelta,
            widthOfCell-xdelta,
            heightOfCell-ydelta);
    }
    if (serpentToDraw.tail[0]!==undefined) {
        if (serpentToDraw.tail[0]!==serpentToDraw.body[0]) {
            ctx.fillStyle = emptyGradient;
            ctx.fillRect(
                serpentToDraw.tail[0].x*widthOfCell+xdelta,
                serpentToDraw.tail[0].y*heightOfCell+ydelta,
                widthOfCell-xdelta,
                heightOfCell-ydelta);
        }
    }
}

drawer.drawfield = function (fieldToDraw) {
    ctx.fillStyle = emptyGradient;
    for (var i = 0; i < fieldToDraw.body.length; i++) {
        for (var j = 0; j < fieldToDraw.body[i].length; j++) {
            ctx.fillRect(
                fieldToDraw.body[i][j].x*widthOfCell+xdelta,
                fieldToDraw.body[i][j].y*heightOfCell+ydelta,
                widthOfCell-xdelta,
                heightOfCell-ydelta);

        }
    }
}