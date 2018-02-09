/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

var Serpents = function (id, length) {
    this.id = id;
    this.length = length;
    this.alive = false;
    this.body = [];
    this.tail = [];
}

Serpents.prototype.init = function(field, xStart, yStart) {
    this.alive = true;
    this.message = "";
    this.field = field;
    this.body.splice(0,this.body.length);
    this.body.splice(0,0,field.body[xStart][yStart]);
    this.tail.splice(0,this.tail.length);
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

Serpents.prototype.move = function(md) {
    if (md) {
        var serpentHead = this.body[0];
        var moveToX = serpentHead.x+md[0];
        var moveToY = serpentHead.y+md[1];
        if ((moveToX < 0)||(moveToX == this.field.xDimension)||(moveToY < 0)||(moveToY == this.field.yDimension)) {
            this.kill("Serpent is over the field!");
        } else {
            var cellOnTheWay = this.field.body[moveToX][moveToY];
            if (this.body.indexOf(cellOnTheWay)>0) {
                if (cellOnTheWay !== this.body[this.body.length-1]) {
                    this.kill("Serpent eat himself!");
                }
            }
        }
        if (this.alive) {
            this.grow(cellOnTheWay);
            this.leave();
        }
    }
}