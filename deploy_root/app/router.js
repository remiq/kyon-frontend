define(function(require, exports, module) {
    "use strict";

    var Backbone = require("backbone");
    var $ = require("jquery");

    module.exports = Backbone.Router.extend({
        routes: {
            "": "index"
            ,"item/:item": "item"
            ,"comments": "comments"
            ,"recent": "recent"
            ,"fav": "fav"
        }
        ,index: function() {
            window.App.emptySidebar();
            var List = require("list");
            List.init('/frontend/browse.json');
        }
        ,item: function(item) {
            var Item = require("item");
            Item.init('/frontend/item.json?id=' + item);
        }
        ,comments: function() {
            window.App.emptySidebar();
            var Report = require("report");
            Report.init("fake/comments.json");
        }
        ,recent: function() {
            window.App.emptySidebar();
            var Report = require("report");
            Report.init("fake/recent.json");
        }
        ,fav: function() {
            window.App.emptySidebar();
            var List = require("list");
            List.init('fake/items.json');
        }

    });

});