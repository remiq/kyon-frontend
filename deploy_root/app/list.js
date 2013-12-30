define(function(require, exports, module) {
    "use strict";

    var Backbone = require("backbone");

    var ListModel = Backbone.Model.extend({
        url: 'fake/items.json',
        defaults: {
            "items": []
            ,"pager": {}
        }
    });
    var ListView = Backbone.View.extend({
        template: _.template($('#template-list').html())
        ,initialize: function(options) {
            this.model.on('change', this.render, this);
        }
        ,render: function() {
            $(this.el).html(this.template(this.model.toJSON()));
        }
    });



    module.exports.ListModel = ListModel;
    module.exports.ListView = ListView;
    module.exports.init = function(url) {
        var listModel = new ListModel();
        listModel.url = url;
        var v = new ListView({
            el: '#main'
            ,model: listModel
        });
        v.model.fetch();
        window.App.listModel = listModel;
        window.App.listView = v;
    };

});