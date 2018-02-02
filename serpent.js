/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

var serpent = {};
serpent.alive = false;
serpent.body = [];
serpent.tail = [];
serpent.kill = function () {
    // kill func there
}
serpent.grow = function (cell) {
    this.body.splice(0, 0, cell);
}
serpent.leave = function () {
    if (this.body.length > startLengthOfSerpent) {
        this.tail.splice(0, 1, this.body[this.body.length-1]);
        this.body.splice(this.body.length-1,1);
        // if (this.tail[0]!==this.body[0]) {
        //     this.body.splice(this.body.length-1,1);
        // }
    }
}

serpent.move = function (md) {
    var serpentHead = this.body[0];
    var moveToX = serpentHead.x+md[0];
    var moveToY = serpentHead.y+md[1];
    var message = "";
    if ((moveToX < 0)||(moveToX == xCellAmt)||(moveToY < 0)||(moveToY == yCellAmt)) {
        message = "Serpent is over the field!";
        this.alive = false;
    } else {
        var cellOnTheWay = field.body[moveToX][moveToY];
        if (this.body.indexOf(cellOnTheWay)>0) {
            if (cellOnTheWay !== this.body[this.body.length-1]) {
                message = "Serpent eat himself!";
                this.alive = false;
            }
        }
    }
    if (!this.alive) {
        alert(message);
        serpent.kill();
    } else {
        this.grow(cellOnTheWay);
        this.leave();
    }
}
serpent.init = function () {
    this.alive = true;
    this.body.splice(0,this.body.length);
    this.body.splice(0,0,field.body[xStartCell][yStartCell]);
}