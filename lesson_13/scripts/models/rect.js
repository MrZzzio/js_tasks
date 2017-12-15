define(["models/shape", "common/helper"], function (Shape, helper) {
    function Rect(startX, startY, endX, endY, color) {
        Shape.call(this, startX, startY);
        this.endX = endX;
        this.endY = endY;
        this.type = "rect";
        color ? this.color = color : this.color = "#000";
    }
    helper.inheritPrototype(Rect, Shape);
    //TODO change method's name
    Rect.prototype.getCoord = function () {
        return {
            startX: this.x,
            startY: this.y,
            endX: this.endX,
            endY: this.endY,
            color: this.color
        };
    };
    Rect.prototype.render = function(ctx, color) {
        var coords = this.getCoord();
        ctx.fillStyle = this.color;
        if (color) {
            ctx.strokeStyle = color;
            ctx.beginPath();
            ctx.lineWidth="2";
            ctx.strokeStyle=color;
            ctx.rect(coords.startX, coords.startY, coords.endX, coords.endY);
            ctx.stroke();
        } else {
            ctx.fillRect(coords.startX, coords.startY, coords.endX, coords.endY);
        }
    };
    Rect.prototype.setSelect = function (x, y) {
        var props = this.getCoord();
        if ((x >= props.startX && (x - props.startX) <= props.endX) && (y >= props.startY && (y - props.startY) <= props.endY)) {
            this.select = true;
        } else {
            this.select = false;
        }
    };
    Rect.prototype.isEmpty = function () {
        var props = this.getCoord();
        return props.endX === 0;
    };
    return Rect;
});