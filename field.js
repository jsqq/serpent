/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';
var myField = function (id, xDimension, yDimension) {
    this.id = id;
    this.xDimension = xDimension;
    this.yDimension = yDimension;
    this.body = [];
}
myField.prototype.init = function() {
    for (var x = 0; x < this.xDimension; x++) {
        this.body[x] = [];
        for (var y = 0; y < this.yDimension; y++) {
            this.body[x][y] = new Cell(x, y);
        }
    }
}