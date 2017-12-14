define(["models/shape", "common/helper", "common/menu"], function (Shape, helper, menu) {
    function Line(startX, startY, endX, endY) {
        Shape.call(this, startX, startY);
        this.endX = endX;
        this.endY = endY;
        this.color = menu.getColor();
    }
    helper.inheritPrototype(Line, Shape);
    Line.prototype.getCoord = function () {
        return {
            startX: this.x,
            startY: this.y,
            endX: this.endX,
            endY: this.endY
        };
    };
    Line.prototype.render = function(ctx) {
        var coords = this.getCoord();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.fill();
        ctx.moveTo(coords.startX, coords.startY);
        ctx.lineTo(coords.endX, coords.endY);
        ctx.stroke();
    };
    return Line;
});