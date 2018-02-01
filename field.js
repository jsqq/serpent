/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

var field = [];

for (var x = 0; x < xCellCount; x++) {
    field[x] = [];
    for (var y = 0; y < yCellCount; y++) {
        field[x][y] = new Cell(x, y, emptyColor);
    }
}