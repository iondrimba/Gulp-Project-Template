﻿define(['backbone'], function(Backbone) {
    var Contact = Backbone.View.extend({
        el: '.contact',
        initialize: function() {
            this.render();
        },
        render: function() {
            return this;
        },
        dispose: function() {
            this.undelegateEvents();
            $(this.el).removeData().unbind();
        },
        events: {
        }
    });

    return Contact;
});