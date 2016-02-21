(function Manager() {
    "use strict";

    window.onload = function() {
        debugger;
        var unorderedList = document.getElementById("list");
        var itemList = List.generateList(5);

        for (var i = 0; i < 5; i++) {
            var item = document.createElement("li");
            var text = document.createTextNode(JSON.stringify(itemList[i], null, "\t"));

            item.appendChild(text);
            unorderedList.appendChild(item);
        }
    }
    
})();