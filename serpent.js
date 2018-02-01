/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

var serpent = {};
serpent.alive = true;
serpent.body = [];
serpent.grow = function () {
    // grow func there
}
serpent.move = function (md) {
    // move func there
    //alert(md);
}
serpent.init = function () {
    field[xStartCell][yStartCell].color = serpentColor;
    this.body[0] = field[xStartCell][yStartCell];
}