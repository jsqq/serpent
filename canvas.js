/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

alert(1);
var canvas = document.getElementById('myCanvas');
canvas.width = widthOfCell*xCellCount;
canvas.height = heightOfCell*yCellCount;
canvas.style = styleOfCanvas;

var ctx = canvas.getContext("2d");

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