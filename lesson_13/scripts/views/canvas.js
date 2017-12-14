define(["models/rect", "models/circle", "models/line"], function (rect, circle, line) {
    var canvas = document.getElementById("main-field");
    var ctx = canvas.getContext('2d');
    var objects = [];

    function addObject(object) {
        objects.push(object);
    }

    function getAllObjects() {
        return objects;
    }

    return {
        canvas: canvas,
        ctx: ctx,
        addObject: addObject,
        getAllObjects: getAllObjects
    }
});