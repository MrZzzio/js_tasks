define(function () {
    var objects = [];

    function addObject(object) {
        objects.push(object);
    }

    function getAllObjects() {
        return objects;
    }

    return {
        addObject: addObject,
        getAllObjects: getAllObjects
    }
});



