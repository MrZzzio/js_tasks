define(["models/shape", "common/helper", "common/menu"], function (Shape, helper, menu) {
    function Rect(startX, startY, endX, endY) {
        Shape.call(this, startX, startY);
        this.endX = endX;
        this.endY = endY;
        this.color = menu.getColor();
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
        ctx.fillStyle = this.color;
        ctx.fillRect(coords.startX, coords.startY, coords.endX, coords.endY);
    };
    return Rect;
});