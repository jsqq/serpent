/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';
var Fields = function (options) {
    this.id = options.id;
    this.xDimension = options.xDimension;
    this.yDimension = options.yDimension;
    this.width = options.width;
    this.height = options.height;
    this.body = [];
    for (var x = 0; x < this.xDimension; x++) {
        this.body[x] = [];
        for (var y = 0; y < this.yDimension; y++) {
            this.body[x][y] = new Cell(x, y);
        }
    }
}