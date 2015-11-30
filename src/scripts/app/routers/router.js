window.EventAggregator = _.extend({}, Backbone.Events);

define([], function () {
    var Router = Backbone.Router.extend({
        routes: {
            "*route":"defaultAction",
            "Home": "Home",
            "Contact": "Contact"
        },
        defaultAction: function (route) {            
            if (route === null) {
                route = 'Home';
            }
            EventAggregator.trigger("render:route", route);
        }
    });
    
    return Router;
});

// Set the app namespace instancing the router
// Start the Backbone push navigation