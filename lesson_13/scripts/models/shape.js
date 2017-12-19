define(function () {
    var id = 0;

    function Shape(x, y) {
        this.id = ++id;
        this.select = false;
        this.x = x;
        this.y = y;
    }
    Shape.prototype.isSelected = function () {
        return this.select;
    };

    Shape.prototype.getCoord = function () {
        return {
            x: this.x,
            y: this.y
        };
    };

    Shape.prototype.getId = function () {
        return this.id;
    };

    Shape.prototype.getType = function () {
        return this.type;
    };

    return Shape;
});
