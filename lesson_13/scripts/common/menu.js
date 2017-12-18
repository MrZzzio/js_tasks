define(["models/objects", "views/canvas"], function (objects, canvas) {
    var type;
    var rect = document.getElementById("button-rect");
    var circle = document.getElementById("button-circle");
    var line = document.getElementById("button-line");
    var color = document.getElementById("color");
    var saveButton = document.getElementById("save");
    var loadButton = document.getElementById("load");
    var inputField = document.getElementById("input");
    var clearButton = document.getElementById("clear");

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

    function save() {
        var json = JSON.stringify(objects.getAllObjects());
        inputField.value = json;
    }

    function load() {
        var json = inputField.value;
        var objts = JSON.parse(json);
        var o;
        for (var i = 0; i < objts.length; i++) {
            if (objts[i].type === "rect") {
                o = objects.getObject(objts[i].type, objts[i].x, objts[i].y, objts[i].endX + objts[i].x, objts[i].endY + objts[i].y, objts[i].color);
            } else {
                o = objects.getObject(objts[i].type, objts[i].x, objts[i].y, objts[i].endX, objts[i].endY, objts[i].color);
            }
            objects.addObject(o);
            o.render(canvas.ctx);
        }
    }

    function clear() {
        var objts = objects.getAllObjects();
        objts.length = 0;
        canvas.ctx.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    }

    function init() {
        rect.addEventListener('click', setRect, false);
        circle.addEventListener('click', setCircle, false);
        line.addEventListener('click', setLine, false);
        color.addEventListener('input', changeColor, false);
        saveButton.addEventListener('click', save, false);
        loadButton.addEventListener('click', load, false);
        clearButton.addEventListener('click', clear, false);
    }

    init();

    return {
        getType: getType,
        getColor: getColor
    }
});