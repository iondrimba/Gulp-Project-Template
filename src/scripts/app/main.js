require(['underscore', 'backbone', 'routers', 'views/home', 'views/contact'], function(_, Backbone, Router, Home, Contact) {
    window.dispatcher = _.extend({}, Backbone.Events);

    Backbone.history.start({ pushState: true });

    var home = new Home();
    var contact = new Contact();
    var router = new Router();


    router.on('route:site', function(route) {
        $('div').hide();
        $('.' + route).show();
    });

    $('.btn').on('click', function(evt) {
        var path = $(evt.currentTarget).attr('id');
        router.navigate(path, { trigger: true });
    });
});