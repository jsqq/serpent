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
    this.context2D = createdCanvas.getContext('2d');
    this.fieldGradient = this.context2D.createLinearGradient(0, 0, this.width, this.height);
    this.fieldGradient.addColorStop(0,this.fieldColor);
    this.serpentGradient = this.context2D.createLinearGradient(0, 0, this.width, this.height);
    this.serpentGradient.addColorStop(1,this.serpentColor);
}

Canvases.prototype.drawGrid = function() {
    for (var i = 0; i < this.xDimension+1; i++) {
        this.context2D.moveTo(i*this.width, 0);
        this.context2D.lineTo(i*this.width, this.height*this.yDimension);
        this.context2D.stroke();
    }
    for (var j = 0; j < this.yDimension+1; j++) {
        this.context2D.moveTo(0, j*this.height);
        this.context2D.lineTo(i*this.width*this.xDimension, j*this.height);
        this.context2D.stroke();
    }
}

Canvases.prototype.drawField = function(fieldToDraw) {
    this.context2D.fillStyle = this.fieldGradient;
    for (var i = 0; i < fieldToDraw.body.length; i++) {
        for (var j = 0; j < fieldToDraw.body[i].length; j++) {
            this.context2D.fillRect(
                fieldToDraw.body[i][j].x*this.width+xdelta,
                fieldToDraw.body[i][j].y*this.height+ydelta,
                this.width-xdelta,
                this.height-ydelta);
        }
    }
}

Canvases.prototype.drawSerpent = function(serpentToDraw) {
    this.context2D.fillStyle = this.serpentGradient;
    for (var i = 0; i < serpentToDraw.body.length; i++) {
        this.context2D.fillRect(
            serpentToDraw.body[i].x*this.width+xdelta,
            serpentToDraw.body[i].y*this.height+ydelta,
            this.width-xdelta,
            this.height-ydelta);
    }
    if (serpentToDraw.tail[0]!==undefined) {
        this.context2D.fillStyle = this.fieldGradient;
        if (serpentToDraw.tail[0]!==serpentToDraw.body[0]) {
            this.context2D.fillRect(
                serpentToDraw.tail[0].x*this.width+xdelta,
                serpentToDraw.tail[0].y*this.height+ydelta,
                this.width-xdelta,
                this.height-ydelta);
        }
    }
}