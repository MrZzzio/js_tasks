define(["models/shape", "common/helper"], function (Shape, helper) {
    function Rect(startX, startY, endX, endY, color) {
        Shape.call(this, startX, startY);
        this.endX = endX;
        this.endY = endY;
        color ? this.color = color : this.color = "#000";
    }
    helper.inheritPrototype(Rect, Shape);
    Rect.prototype.getCoord = function () {
        return {
            startX: this.x,
            startY: this.y,
            endX: this.endX,
            endY: this.endY,
            color: this.color
        };
    };
    Rect.prototype.render = function(ctx) {
        var coords = this.getCoord();
        ctx.fillStyle = this.color;
        ctx.fillRect(coords.startX, coords.startY, coords.endX, coords.endY);
    };
    return Rect;
});