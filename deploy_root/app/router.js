define(function(require, exports, module) {
    "use strict";

    var Backbone = require("backbone");
    var $ = require("jquery");

    module.exports = Backbone.Router.extend({
        routes: {
            "": "index"
        },
        index: function() {
            var List = require("list");
            List.init();
        }

    });

});