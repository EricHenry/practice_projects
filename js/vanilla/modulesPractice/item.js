var Item = (function Item() {
    "use strict";

    var publicAPI;

    publicAPI = {
        getItem: getItem
    };

    return publicAPI;

    function generateItem() {
        var item = {
            movie: "Star Wars",
            genre: "Sci-Fi",
            rating: "Amazing!"
        }

        return item;
    }

    function getItem() {
        return generateItem();
    }

})();