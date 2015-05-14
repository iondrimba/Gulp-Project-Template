define(['backbone'], function (Backbone) {
    var Home = Backbone.View.extend({
        el: '.home',
        initialize: function () {            
            this.render();
        },
        render: function () {
            console.log('Home');
            return this;
        },
        dispose: function () {
            this.undelegateEvents();
            $(this.el).removeData().unbind();
        },
        events: {
        }
    });

    return Home;
});