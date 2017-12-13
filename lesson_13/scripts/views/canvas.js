define(["models/rect", "models/circle", "models/line"], function (rect, circle, line) {
    var canvas = document.getElementById("main-field"),
        ctx = canvas.getContext('2d');
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // var r = new rect(10, 10, 50, 50);
    // var c = new circle(100, 100, 25);
    // var l = new line(150, 150, 155, 50);
    //
    // console.log(r);
    // console.log(c);
    // console.log(l);
    //
    // r.render(ctx);
    // c.render(ctx);
    // l.render(ctx);
});