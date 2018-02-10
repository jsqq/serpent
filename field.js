/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';
var Fields = function (id, xDimension, yDimension, widthOfCell, heightOfCell) {
    this.id = id;
    this.xDimension = xDimension;
    this.yDimension = yDimension;
    this.width = widthOfCell;
    this.height = heightOfCell;
    this.body = [];
    for (var x = 0; x < this.xDimension; x++) {
        this.body[x] = [];
        for (var y = 0; y < this.yDimension; y++) {
            this.body[x][y] = new Cell(x, y);
        }
    }
}