define([], function() {
    var Router = Backbone.Router.extend({
        initialize: function(options) {
        },
        routes: {
            ":page": "site",
        },
        site: function(route) {
            console.log('site', route);
        }
    });

    return Router;
});