/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

var Serpents = function (options) {
    this.id = options.id;
    this.length = options.length;
    this.alive = false;
    this.body = [];
    this.tail = [];
    this.leftKey = options.leftKey;
    this.upKey = options.upKey;
    this.rightKey = options.rightKey;
    this.downKey = options.downKey;
    this.moveVector = [];
}

Serpents.prototype.init = function(options) {
    this.alive = true;
    this.message = "";
    this.field = options.field;
    this.canvas = options.canvas;
    this.body.splice(0,this.body.length,this.field.body[options.xStart][options.yStart]);
    this.tail.splice(0,this.tail.length);
    this.moveVector.splice(0,this.moveVector.length);
}

Serpents.prototype.changeMoveDirection = function(md) {
    this.moveVector.splice(0, 1, md);
}

Serpents.prototype.grow = function(cell) {
    this.body.splice(0, 0, cell);
}

Serpents.prototype.leave = function() {

    if (this.body.length > this.length) {
        this.tail.splice(0, 1, this.body[this.body.length-1]);
        this.body.splice(this.body.length-1,1);
    }
}

Serpents.prototype.kill = function(message) {
    this.alive = false;
    this.message = message;
}

Serpents.prototype.move = function() {
    if (this.moveVector.length > 0) {
        var serpentHead = this.body[0];
        var moveToX = serpentHead.x+this.moveVector[0][0];
        var moveToY = serpentHead.y+this.moveVector[0][1];
        if ((moveToX < 0)||(moveToX == this.field.xDimension)||
            (moveToY < 0)||(moveToY == this.field.yDimension)) {
            this.kill(" is over the field!");
        } else {
            var cellOnTheWay = this.field.body[moveToX][moveToY];
            if (this.body.indexOf(cellOnTheWay)>0) {
                if (cellOnTheWay !== this.body[this.body.length-1]) {
                    this.kill(" eat himself!");
                }
            }
        }
        if (this.alive) {
            this.grow(cellOnTheWay);
            this.leave();
        }
    }
}