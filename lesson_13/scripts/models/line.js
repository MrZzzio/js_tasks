define(["models/shape", "common/helper"], function (Shape, helper) {

    function Line(startX, startY, endX, endY, color) {
        Shape.call(this, startX, startY);
        this.endX = endX;
        this.endY = endY;
        this.type = "line";
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

    Line.prototype.setSelect = function (x, y) {
        this.select = false;
    };

    Line.prototype.isEmpty = function () {
        var props = this.getCoord();
        return (props.startX === props.endX + 5) && (props.startY === props.endY + 5);
    };

    return Line;
});