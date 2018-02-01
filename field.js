/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

var field;
field = new Array(xCellCount, yCellCount);

for (var x = 0; x < xCellCount; x++) {
    for (var y = 0; y < yCellCount; y++) {
        var currentColor = emptyColor;
        if ((x == xStartCell)&&(y == yStartCell)) {
            currentColor = serpentColor;
        }
        field[x, y] = new Cell(x, y, widthOfCell, heightOfCell, currentColor);
    }
}
//alert(field[xStartCell, yStartCell].color+field[xStartCell, yStartCell].x+field[xStartCell, yStartCell].y);