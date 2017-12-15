define(["models/shape", "common/helper"], function (Shape, helper) {
    function Line(startX, startY, endX, endY, color) {
        Shape.call(this, startX, startY);
        this.endX = endX;
        this.endY = endY;
        color ? this.color = color : this.color = "#000";
    }
    helper.inheritPrototype(Line, Shape);
    Line.prototype.getCoord = function () {
        return {
            startX: this.x,
            startY: this.y,
            endX: this.endX,
            endY: this.endY,
            color: this.color
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