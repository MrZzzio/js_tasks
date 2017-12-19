define(["models/rect", "models/circle", "models/line", "models/objects", "views/canvas", "common/menu"],
    function (rect, circle, line, objects, canv, menu) {

    var canvas = canv.canvas;
    var ctx = canv.ctx;
    var pointX, pointY, startX, startY, endX, endY, mouseDown = 0;
    var selected = null;

    function draw(object) {
        object.render(ctx);
    }

    function clearCanvas(canvas, ctx) {
        var obj = objects.getAllObjects();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < obj.length; i++) {
            draw(obj[i]);
        }
    }

    function onMouseDown() {
        var mousePos = getMousePos(canvas, event);
        mouseDown = 1;
        startX = mousePos.x;
        startY = mousePos.y;
        clearCanvas(canvas, ctx);
        var obj = objects.getAllObjects();
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].type === "rect" || obj[i].type === "circle" /*|| obj[i].type === "line"*/) {
                obj[i].setSelect(mousePos.x, mousePos.y);
                if (obj[i].isSelected()) {
                    selected = obj[i];
                    obj[i].render(ctx, "red");
                    pointX = mousePos.x;
                    pointY = mousePos.y;
                    break;
                } else {
                    obj[i].render(ctx);
                    selected = null;
                }
            }
        }
    }

    function onMouseUp() {
        var mousePos = getMousePos(canvas, event);
        var obj = objects.getObject(menu.getType(), startX, startY, endX, endY, menu.getColor());
        if (!selected) {
            mouseDown = 0;
            endX = mousePos.x;
            endY = mousePos.y;
            if (!obj.isEmpty()) {
                objects.addObject(obj);
            }
        } else {
            mouseDown = 0;
        }

    }

    function onMouseMove() {
        var mousePos = getMousePos(canvas, event);
        var object;
        endX = mousePos.x;
        endY = mousePos.y;
        if (!selected && mouseDown === 1) {
            clearCanvas(canvas, ctx);
            object = objects.getObject(menu.getType(), startX, startY, endX, endY, menu.getColor());
            draw(object);
        }
        if (selected && mouseDown === 1) {
            objects.deleteObject(selected);
            clearCanvas(canvas, ctx);
            var deltaX = mousePos.x - pointX;
            var deltaY = mousePos.y - pointY;
            if (selected.type === "rect") {
                object = objects.getObject(selected.type, selected.x + deltaX, selected.y + deltaY, selected.endX + selected.x + deltaX, selected.endY + selected.y + deltaY, selected.color);
            } else {
                object = objects.getObject(selected.type, selected.x + deltaX, selected.y + deltaY, selected.endX + deltaX, selected.endY + deltaY, selected.color);
            }
            draw(object);
            objects.addObject(object);
            selected = object;
            pointX = endX;
            pointY = endY;
        }
    }

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY- rect.top
        };
    }

    function init() {
        canvas.addEventListener('mousedown', onMouseDown, false);
        canvas.addEventListener('mousemove', onMouseMove, false);
        canvas.addEventListener('mouseup', onMouseUp, false);
    }

    init();

});