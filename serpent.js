/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

var Serpents = function (id, length, leftKey, upKey, rightKey, downKey) {
    this.id = id;
    this.length = length;
    this.alive = false;
    this.body = [];
    this.tail = [];
    this.leftKey = leftKey;
    this.upKey = upKey;
    this.rightKey = rightKey;
    this.downKey = downKey;
    this.moveVector = [];
}

Serpents.prototype.init = function(field, canvas, xStart, yStart) {
    this.alive = true;
    this.message = "";
    this.field = field;
    this.canvas = canvas;
    this.body.splice(0,this.body.length,field.body[xStart][yStart]);
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