define(["models/rect", "models/circle", "models/line", "views/canvas", "common/menu"], function (rect, circle, line, canv, menu) {

    var canvas = canv.canvas;
    var ctx = canv.ctx;
    var startX, startY, endX, endY, mouseDown = 0;

    function draw(object) {
        object.render(ctx);
    }

    function clearCanvas(canvas, ctx) {
        var objects = canv.getAllObjects();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < objects.length; i++) {
            draw(objects[i]);
        }
    }

    function onMouseDown() {
        var mousePos = getMousePos(canvas, event);
        mouseDown = 1;
        startX = mousePos.x;
        startY = mousePos.y;
    }

    function onMouseUp() {
        var mousePos = getMousePos(canvas, event);
        var obj = getObject();
        mouseDown = 0;
        endX = mousePos.x;
        endY = mousePos.y;
        canv.addObject(obj);
    }

    function getObject() {
        var obj;
        switch (menu.getType()) {
            case "rect":
                obj = new rect(startX, startY, endX - startX, endY - startY);
                break;
            case "circle":
                obj = new circle(startX, startY, getRadius());
                break;
            case "line":
                obj = new line(startX, startY, endX, endY);
                break;
        }
        return obj;
    }

    function getRadius() {
        return Math.sqrt(Math.pow(Math.abs(startX - endX), 2) + Math.pow(Math.abs(startY - endY), 2));
    }

    function onMouseMove() {
        var mousePos = getMousePos(canvas, event);
        var object = getObject();
        endX = mousePos.x;
        endY = mousePos.y;
        if (mouseDown === 1) {
            clearCanvas(canvas, ctx);
            draw(object);
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