define(["models/shape", "common/helper", "common/menu"], function (Shape, helper, menu) {
    function Circle(x, y, radius) {
        Shape.call(this, x, y);
        this.radius = radius;
        this.sAngel = 0;
        this.eAngel = 2*Math.PI;
        this.color = menu.getColor();
    }
    helper.inheritPrototype(Circle, Shape);
    Circle.prototype.getCoord = function () {
        return {
            startX: this.x,
            startY: this.y,
            radius: this.radius
        };
    };
    Circle.prototype.render = function(ctx) {
        var coords = this.getCoord();
        ctx.beginPath();
        ctx.arc(coords.startX, coords.startY, coords.radius, this.sAngel, this.eAngel);
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
    };
    return Circle;
});