define(["models/shape", "common/helper"], function (Shape, helper) {
    function Circle(x, y, /*radius,*/ endX, endY, color) {
        Shape.call(this, x, y);
        this.radius = this.getRadius(x, y, endX, endY);
        this.endX = endX;
        this.endY = endY;
        this.sAngel = 0;
        this.eAngel = 2*Math.PI;
        this.type = "circle";
        color ? this.color = color : this.color = "#000";
    }
    helper.inheritPrototype(Circle, Shape);
    Circle.prototype.getCoord = function () {
        return {
            startX: this.x,
            startY: this.y,
            radius: this.radius,
            color: this.color
        };
    };
    Circle.prototype.render = function(ctx, color) {
        var coords = this.getCoord();
        ctx.beginPath();
        ctx.arc(coords.startX, coords.startY, coords.radius, this.sAngel, this.eAngel);
        if (color) {
            ctx.strokeStyle = color;
        } else {
            ctx.strokeStyle = this.color;
        }
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
    };
    Circle.prototype.getRadius = function (startX, startY, endX, endY) {
        return Math.sqrt(Math.pow(Math.abs(startX - endX), 2) + Math.pow(Math.abs(startY - endY), 2));
    };
    Circle.prototype.setSelect = function (x, y) {
        var props = this.getCoord();
        if (((Math.pow((x - props.startX), 2) + (Math.pow((y - props.startY), 2)) <= Math.pow(props.radius, 2)))) {
            this.select = true;
        } else {
            this.select = false;
        }
    };
    Circle.prototype.isEmpty = function () {
        var props = this.getCoord();
        return props.radius === 0;
    };
    return Circle;
});