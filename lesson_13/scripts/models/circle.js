define(["models/shape", "common/helper"], function (Shape, helper) {
    function Circle(x, y, radius) {
        Shape.call(this, x, y);
        this.radius = radius;
        this.sAngel = 0;
        this.eAngel = 2*Math.PI;
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
        ctx.strokeStyle = 'blue';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
    };
    return Circle;
});