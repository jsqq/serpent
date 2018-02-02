/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';
var field = {};
field.body = [];

field.init = function () {
    for (var x = 0; x < xCellAmt; x++) {
        this.body[x] = [];
        for (var y = 0; y < yCellAmt; y++) {
            this.body[x][y] = new Cell(x, y);
        }
    }
}