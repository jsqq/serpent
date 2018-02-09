/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';
var Canvases = function (id, xDimension, yDimension, width, height, style, fieldColor, serpentColor) {

    var myLabel = document.getElementById('canvases');
    var createdCanvas = document.createElement('canvas');
    createdCanvas.id = 'myCanvas'+id;
    createdCanvas.width = width*xDimension;
    createdCanvas.height = height*yDimension;
    createdCanvas.style = style;
    myLabel.appendChild(createdCanvas);

    this.id = id;
    this.xDimension = xDimension;
    this.yDimension = yDimension;
    this.width = width;
    this.height = height;
    this.style = style;
    this.fieldColor = fieldColor;
    this.serpentColor = serpentColor;
    this.body = createdCanvas;
}


Canvases.prototype.draw = function(objectToDraw) {
    if (!objectToDraw) {
        return;
    }
    var context2D = this.body.getContext('2d');

    if (objectToDraw instanceof Canvases) {
        for (var i = 0; i < this.xDimension+1; i++) {
            context2D.moveTo(i*this.width, 0);
            context2D.lineTo(i*this.width, this.height*this.yDimension);
            context2D.stroke();
        }
        for (var j = 0; j < this.yDimension+1; j++) {
            context2D.moveTo(0, j*this.height);
            context2D.lineTo(i*this.width*this.xDimension, j*this.height);
            context2D.stroke();
        }
        return;
    }

    var fieldGradient = context2D.createLinearGradient(0, 0, widthOfCell, heightOfCell);
    fieldGradient.addColorStop(0,objectToDraw.color);
    var serpentGradient = context2D.createLinearGradient(0, 0, widthOfCell, heightOfCell);
    serpentGradient.addColorStop(1,objectToDraw.color);

    if (objectToDraw instanceof Fields) {
        context2D.fillStyle = fieldGradient;
        for (var i = 0; i < objectToDraw.body.length; i++) {
            for (var j = 0; j < objectToDraw.body[i].length; j++) {
                context2D.fillRect(
                    objectToDraw.body[i][j].x*widthOfCell+xdelta,
                    objectToDraw.body[i][j].y*heightOfCell+ydelta,
                    widthOfCell-xdelta,
                    heightOfCell-ydelta);
            }
        }
    }
    if (objectToDraw instanceof Serpents) {
        context2D.fillStyle = serpentGradient;
        for (var i = 0; i < objectToDraw.body.length; i++) {
            context2D.fillRect(
                objectToDraw.body[i].x*widthOfCell+xdelta,
                objectToDraw.body[i].y*heightOfCell+ydelta,
                widthOfCell-xdelta,
                heightOfCell-ydelta);
        }
        if (objectToDraw.tail[0]!==undefined) {
            context2D.fillStyle = fieldGradient;
            if (objectToDraw.tail[0]!==objectToDraw.body[0]) {
                context2D.fillRect(
                    objectToDraw.tail[0].x*widthOfCell+xdelta,
                    objectToDraw.tail[0].y*heightOfCell+ydelta,
                    widthOfCell-xdelta,
                    heightOfCell-ydelta);
            }
        }
    }

}