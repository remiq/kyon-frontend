define(function(require, exports, module) {
    "use strict";

    var Backbone = require("backbone");

    var ReportModel = Backbone.Model.extend({
        url: 'fake/comments.json',
        defaults: {
            "items": []
            ,"pager": {}
        }
    });
    var ReportView = Backbone.View.extend({
        template: _.template($('#template-report-main').html())
        ,initialize: function(options) {
            this.model.on('change', this.render, this);
        }
        ,renderSidebarButton: function() {
            $('#sidebar-button').html('<i class="uk-icon-cog"></i>');
        }
        ,render: function() {
            $('#main').html(this.template(this.model.toJSON()));
            this.renderSidebarButton();
        }
    });

    module.exports.ReportModel = ReportModel;
    module.exports.ReportView = ReportView;
    module.exports.init = function(url) {
        var reportModel = new ReportModel();
        reportModel.url = url;
        var v = new ReportView({
            el: '#main'
            ,model: reportModel
        });
        v.model.fetch();
        window.App.ReportModel = reportModel;
        window.App.reportView = v;
    }

});