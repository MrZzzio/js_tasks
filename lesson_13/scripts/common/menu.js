define(["models/objects", "views/canvas"], function (objects, canvas) {
    var type;
    var rect = document.getElementById("button-rect");
    var circle = document.getElementById("button-circle");
    var line = document.getElementById("button-line");
    var color = document.getElementById("color");

    function getType() {
        return type;
    }

    function getColor() {
        return color.value;
    }

    function changeColor() {
        var obj = objects.getAllObjects();
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].isSelected()) {
                obj[i].color = color.value;
                obj[i].render(canvas.ctx);
            }
        }
    }

    function setType(t) {
        type = t;
    }

    function setRect() {
        setType("rect");
        rect.style.backgroundColor = "#ff0000";
        circle.style.backgroundColor = "#939699";
        line.style.backgroundColor = "#939699";
    }

    function setCircle() {
        setType("circle");
        rect.style.backgroundColor = "#939699";
        circle.style.backgroundColor = "#ff0000";
        line.style.backgroundColor = "#939699";
    }

    function setLine() {
        setType("line");
        rect.style.backgroundColor = "#939699";
        circle.style.backgroundColor = "#939699";
        line.style.backgroundColor = "#ff0000";
    }

    function init() {
        rect.addEventListener('click', setRect, false);
        circle.addEventListener('click', setCircle, false);
        line.addEventListener('click', setLine, false);
        color.addEventListener('input', changeColor, false);
    }

    init();

    return {
        getType: getType,
        getColor: getColor
    }
});