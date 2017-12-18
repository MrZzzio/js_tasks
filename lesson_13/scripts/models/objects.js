define(["models/rect", "models/circle", "models/line"], function (rect, circle, line) {
    var objects = [];

    function addObject(object) {
        objects.push(object);
    }

    function getAllObjects() {
        return objects;
    }

    function getObject(type, startX, startY, endX, endY, color) {
        var obj;
        switch (type) {
            case "rect":
                obj = new rect(startX, startY, endX - startX, endY - startY, color);
                // obj = new rect(startX, startY, endX, endY, color);
                break;
            case "circle":
                obj = new circle(startX, startY, /*getRadius(startX, startY, endX, endY),*/ endX, endY, color);
                break;
            case "line":
                obj = new line(startX, startY, endX, endY, color);
                break;
        }
        return obj;
    }

    return {
        addObject: addObject,
        getAllObjects: getAllObjects,
        getObject: getObject
    }
});



