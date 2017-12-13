define(["models/shape", "common/helper"], function (Shape, helper) {
    function Rect(startX, startY, endX, endY) {
        Shape.call(this, startX, startY);
        this.endX = endX;
        this.endY = endY;
    }
    helper.inheritPrototype(Rect, Shape);
    Rect.prototype.getCoord = function () {
        return {
            startX: this.x,
            startY: this.y,
            endX: this.endX,
            endY: this.endY
        };
    };
    Rect.prototype.render = function(ctx) {
        var coords = this.getCoord();
        ctx.fillStyle = "green";
        ctx.fillRect(coords.startX, coords.startY, coords.endX, coords.endY);
    };
    return Rect;
});