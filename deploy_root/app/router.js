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
            var List = require("list");
            List.init('fake/items.json');
            $('#sidebar-button').html('<i class="uk-icon-cog"></i>');
        }
        ,item: function(item) {
            var Item = require("item");
            Item.init(item);
        }
        ,comments: function() {
            var Report = require("report");
            Report.init("fake/comments.json");
        }
        ,recent: function() {
            var Report = require("report");
            Report.init("fake/recent.json");
        }
        ,fav: function() {
            var List = require("list");
            List.init('fake/items.json');
            $('#sidebar-button').html('<i class="uk-icon-cog"></i>');
        }

    });

});