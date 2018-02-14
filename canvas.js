/**
 * Created by timoshenko.d on 01.02.2018.
 */
'use strict';
var Canvases = function (options) {

    this.id = options.id;
    this.xDimension = options.field.xDimension;
    this.yDimension = options.field.yDimension;
    this.width = options.field.width;
    this.height = options.field.height;
    this.style = options.style;
    this.fieldColor = options.fieldColor;
    this.serpentColor = options.serpentColor;
    var myLabel = document.getElementById('canvases');
    var createdCanvas = document.createElement('canvas');
    createdCanvas.id = 'myCanvas'+options.id;
    createdCanvas.width = this.width*this.xDimension;
    createdCanvas.height = this.height*this.yDimension;
    createdCanvas.style = this.style;
    myLabel.appendChild(createdCanvas);
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
    fieldGradient.addColorStop(0,this.fieldColor);
    var serpentGradient = context2D.createLinearGradient(0, 0, widthOfCell, heightOfCell);
    serpentGradient.addColorStop(1,this.serpentColor);

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