define(["models/rect", "models/circle", "models/line"], function (rect, circle, line) {
    var canvas = document.getElementById("main-field");
    var ctx = canvas.getContext('2d');

    return {
        canvas: canvas,
        ctx: ctx
    }
});