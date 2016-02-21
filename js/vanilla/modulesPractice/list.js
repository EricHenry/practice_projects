var List = (function List() {
    "use strict";

    var publicAPI;

    publicAPI = {
        generateList: generateList
    };

    return publicAPI;

    function generateList(size) {
        var list = [];

        for (var i = 0; i < size; i++) {
            list.push(Item.getItem());
        }

        return list;
    }

})();