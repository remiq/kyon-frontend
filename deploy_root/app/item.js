define(function(require, exports, module) {
    "use strict";

    var Backbone = require("backbone");

    var ItemModel = Backbone.Model.extend({
        url: 'fake/item.json',
        defaults: {
            "items": []
            ,"pager": {}
        }
    });
    var ItemView = Backbone.View.extend({
        templateMain: _.template($('#template-item-main').html())
        ,templateSidebar: _.template($('#template-item-sidebar').html())
        ,initialize: function(options) {
            this.model.on('change', this.render, this);
        }
        ,renderSidebarButton: function() {
            var info = [];
            if (this.model.get('comments') && this.model.get('comments').length > 0) {
                info.push('<i class="uk-icon-comments"></i>' + this.model.get('comments').length);
            }
            if (this.model.get('fav') && this.model.get('fav').length > 0) {
                info.push('<i class="uk-icon-heart"></i>' + this.model.get('fav').length);
            }
            if (info.length === 0) {
                info.push('<i class="uk-icon-cog"></i>');
            }
            $('#sidebar-button').html(info.join('<br>'));
        }
        ,render: function() {
            $('#main').html(this.templateMain(this.model.toJSON()));
            $('#sidebar').html(this.templateSidebar(this.model.toJSON()));
            this.renderSidebarButton();
        }
    });

    module.exports.ItemModel = ItemModel;
    module.exports.ItemView = ItemView;
    module.exports.init = function(url) {
        var itemModel = new ItemModel();
        itemModel.url = url;
        var v = new ItemView({
            el: '#main'
            ,model: itemModel
        });
        v.model.fetch();
        window.App.itemModel = itemModel;
        window.App.itemView = v;
    }

});