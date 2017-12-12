function Rect(startX, startY, endX, endY) {
    Shape.call(this, startX, startY);
    this.endX = endX;
    this.endY = endY;
}

Rect.prototype.getCoord = function () {
    return {
        startX: this.startX,
        startY: this.startY,
        endX: this.endX,
        endY: this.endY
    };
};

inheritPrototype(Rect, Shape);

function render(rect) {
    var coords = rect.getCoord();
    rect.fillStyle = "green";
    rect.fillRect(coords.startX, coords.startY, coords.endX, coords.endY);
}