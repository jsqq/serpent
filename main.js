/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

function onKeyPress(event){
    var keyCode = event.keyCode;
    var moveDirection;
    switch (keyCode) {
        case left:
            moveDirection = [-1,0];
            break;
        case up:
            moveDirection = [0,-1];
            break;
        case right:
            moveDirection = [1,0];
            break;
        case down:
            moveDirection = [0,1];
            break;
    }
    if (moveDirection) {
        serpent.move(moveDirection);
        drawer.draw(serpent.body);
    }
}
serpent.init();
drawer.draw(serpent.body);
// переделеть на событие отпускания клавиши
addEventListener("keypress", onKeyPress);