require.config({
    paths: {
        "vendor": "../vendor",
        "almond": "../vendor/bower/almond/almond",
        "underscore": "../vendor/lodash/dist/lodash.underscore",
        "jquery": "../vendor/jquery/jquery",
        "backbone": "../vendor/backbone/backbone",
        "moment": "../vendor/momentjs/moment",
        "uikit": "../vendor/uikit/dist/js/uikit"
    },
    shim: {
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        "uikit": {
            deps: ["jquery"]
        }
    }
});