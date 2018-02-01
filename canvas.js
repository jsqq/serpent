/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

var canvas = document.getElementById('myCanvas');
canvas.width = widthOfCell*xCellCount;
canvas.height = heightOfCell*yCellCount;
canvas.style = styleOfCanvas;

var ctx = canvas.getContext("2d");

var serpentGradient = ctx.createLinearGradient(0,0,200,0);
serpentGradient.addColorStop(0,serpentColor);
var emptyGradient = ctx.createLinearGradient(0,0,200,0);
emptyGradient.addColorStop(1,emptyColor);


for (var i = 1; i < xCellCount; i++) {
    ctx.moveTo(i*widthOfCell, 0);
    ctx.lineTo(i*widthOfCell, widthOfCell*xCellCount);
    ctx.stroke();

}
for (var j = 1; j < yCellCount; j++) {
    ctx.moveTo(0, j*heightOfCell);
    ctx.lineTo(widthOfCell*yCellCount, j*heightOfCell);
    ctx.stroke();
}
var drawer = {};
drawer.draw = function (arrayOfCells) {
    for (var i = 0; i < arrayOfCells.length; i++) {
        if (arrayOfCells[i].color = serpentColor) {
            ctx.fillStyle = serpentGradient;
        } else {
            ctx.fillStyle = emptyGradient;
        }
        ctx.fillRect(
            arrayOfCells[i].x*widthOfCell+xdelta,
            arrayOfCells[i].y*heightOfCell+ydelta,
            widthOfCell-xdelta,
            heightOfCell-ydelta);
    }
}