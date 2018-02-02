/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';

function onKeyPress(event){
    if (!serpent.alive) {
        if (confirm("Заново?")) {
            serpent.init();
            drawer.drawfield(field);
            drawer.drawserpent(serpent);
            return;
        }
    }


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
        drawer.drawserpent(serpent);
    }
}
field.init();
serpent.init();
drawer.drawfield(field);
drawer.drawserpent(serpent);
// переделеть на событие отпускания клавиши
addEventListener("keypress", onKeyPress);