define(function(require, exports, module) {
    "use strict";

    var _ = require("underscore");
    var $ = require("jquery");
    var Backbone = require("backbone");
    var uikit = require("uikit");

    var app = module.exports;
    app.root = "/";
    window.App = app;

    app.switchCSS = function(css) {
        $('#custom-css').attr('href', css);
        // XXX: write to localStorage
    };

    app.onChangeTag = function(form) {
        // XXX: autocomplete for tag form
    }

    app.onFormTag = function(form) {
        var data = {};
        _.each($(form).serializeArray(), function(i) {
            data[i.name] = i.value;
        });
        $.ajax({
            type: "GET" // XXX: should be post
            ,url: 'fake/item.json' // XXX: adding tag
            ,data: data
            ,success: function(data) {
                if (data.success) {
                    console.log(data.message);
                    window.App.itemModel.fetch();
                } else {
                    console.log(data.error);
                }
            }
        });
        return false;
    }

    app.onFormSearch = function(form) {
        var data = {};
        _.each($(form).serializeArray(), function(i) {
            data[i.name] = i.value;
        });
        var List = require("list");
        List.init('fake/items.json?q=' + data.q);
        $('#sidebar-button').html('<i class="uk-icon-cog"></i>');
        return false;
    };







});