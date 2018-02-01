/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

var serpent = new Object();
serpent.alive = true;
serpent.body = new Array();
serpent.grow = function () {
    // grow func there
}
serpent.move = function (md) {
    // move func there
    alert(md);
}
serpent.init = function () {
    this.body[this.body.length] = field[xStartCell, yStartCell];
}