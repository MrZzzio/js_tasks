define(function () {
    var type;

    function getType() {
        return type;
    }

    function setType(t) {
        type = t;
    }

    return {
        getType: getType
    }
});