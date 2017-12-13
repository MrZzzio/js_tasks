define(["models/rect"], function (rect) {


    var canvas, ctx;
    var mouseX, mouseY, mouseDown = 0,
        lastX, lastY;

    function draw(ctx, x, y, size) {
        if (lastX && lastY && (x !== lastX || y !== lastY)) {
            ctx.fillStyle = "#000000";
            ctx.lineWidth = 2 * size;
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        lastX = x;
        lastY = y;
    }

    
    // function clearCanvas(canvas, ctx) {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height)
    // }

    function onMouseDown() { //нажать мышь
        console.log(mouseX);
        console.log(mouseY);
        mouseDown = 1;
        var r = new rect(mouseX, mouseY, lastX, lastY);
        r.render(ctx);
    }

    function onMouseUp() { //отпустить мышь
        mouseDown = 0;
        lastX = 0;
        lastY = 0;
        console.log(mouseX);
        console.log(mouseY);
    }

    function onMouseMove(e) { //движение мыши, если нажата кнопка, перересовать канвас
        getMousePos(e)
        if (mouseDown == 1) {
            draw(ctx, mouseX, mouseY, 1)
        }
    }

    function getMousePos(e) {
        if (!e)
            var e = event
        if (e.offsetX) {
            mouseX = e.offsetX
            mouseY = e.offsetY
            console.log("offcet...");

        }
        else if (e.layerX) {
            mouseX = e.layerX
            mouseY = e.layerY
            console.log("layer...");

        }
    }

    function init() {
        canvas = document.getElementById('main-field')
        ctx = canvas.getContext('2d')
        canvas.addEventListener('mousedown', onMouseDown, false)
        canvas.addEventListener('mousemove', onMouseMove, false)
        window.addEventListener('mouseup', onMouseUp, false)
    }

    init();

});