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
                break;
            case "circle":
                obj = new circle(startX, startY, endX, endY, color);
                break;
            case "line":
                obj = new line(startX, startY, endX, endY, color);
                break;
        }
        return obj;
    }

    function deleteObject(object) {
        var index = objects.indexOf(object);
        if (index > -1) {
            objects.splice(index, 1);
        }
    }

    return {
        addObject: addObject,
        getAllObjects: getAllObjects,
        getObject: getObject,
        deleteObject: deleteObject
    }
});



