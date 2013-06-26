/*global amsDemo, $*/


window.amsDemo = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        console.log('Hello from Backbone!');
    }
};

/* Order and include as you please. */
require('.tmp/scripts/templates');
require('app/scripts/views/*');
require('app/scripts/models/*');
require('app/scripts/controllers/*');
require('app/scripts/routers/*');

$(document).ready(function () {
    amsDemo.init();
});
