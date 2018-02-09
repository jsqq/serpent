/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

var Serpents = function (id, length, color) {
    this.id = id;
    this.length = length;
    this.color = color;
    this.alive = false;
    this.body = [];
    this.tail = [];
}

Serpents.prototype.init = function(field, xStart, yStart) {
    this.alive = true;
    this.field = field;
    this.body.splice(0,this.body.length);
    this.body.splice(0,0,field.body[xStart][yStart]);
    this.tail.splice(0,this.tail.length);
}

Serpents.prototype.grow = function(cell) {
    //alert(cell);
    this.body.splice(0, 0, cell);
}

Serpents.prototype.leave = function() {
    //alert(this.body.length+" $$ "+this.length);
    if (this.body.length > this.length) {
        this.tail.splice(0, 1, this.body[this.body.length-1]);
        this.body.splice(this.body.length-1,1);
    }
    //alert(this.body[this.body.length-1]);
    //alert(this.tail[0].x+" % "+this.tail[0].y);
}

Serpents.prototype.move = function(md) {
    if (md) {
        var serpentHead = this.body[0];
        var moveToX = serpentHead.x+md[0];
        var moveToY = serpentHead.y+md[1];
        if ((moveToX < 0)||(moveToX == this.field.xDimension)||(moveToY < 0)||(moveToY == this.field.yDimension)) {
            message = "Serpent is over the field!";
            this.alive = false;
        } else {
            var cellOnTheWay = this.field.body[moveToX][moveToY];
            if (this.body.indexOf(cellOnTheWay)>0) {
                if (cellOnTheWay !== this.body[this.body.length-1]) {
                    message = "Serpent eat himself!";
                    this.alive = false;
                }
            }
        }
        if (this.alive) {
            this.grow(cellOnTheWay);
            this.leave();
        }
    }
}