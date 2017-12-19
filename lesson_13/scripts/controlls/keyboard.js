define(["models/objects", "views/canvas"], function (objects, canvas) {

    function deleteObj(event) {
        //if delete key
        if (event.keyCode === 46) {
            canvas.ctx.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
            var obj = objects.getAllObjects();
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].isSelected()) {
                    obj.splice(i, 1);
                }
                obj[i].render(canvas.ctx);
            }
        }
    }

    function init() {
        document.addEventListener('keydown', deleteObj, false);
    }

    init();
});