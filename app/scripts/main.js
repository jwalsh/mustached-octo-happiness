/*global amsDemo, $*/

// Since the implementation is simply a list of strings that are
// coupled to a parent identifier.

// This appears just to be for inspection.
window.amsDemo = {
    Models: {
      Item: Backbone.Model.extend({
        defaults: function() {
          return {
            pkey: 'aff',
            pval: 'site-uid12345'
          };
        }
      })
    },
    Collections: {
      ItemsList: Backbone.Collection.extend({
        model: amsDemo.Models.Item,
        localStorage: new Backbone.LocalStorage('ams-demo-backbone')
      })
    },
    Views: {},
    Routers: {},
    init: function() {
      console.log('Hello from Backbone!');
      var Items = new amsDemo.Collection.ItemsList();
      console.log(Items);
    }
};

/* Order and include as you please. */
require('.tmp/scripts/templates');
require('app/scripts/views/*');
require('app/scripts/models/*');
require('app/scripts/controllers/*');
require('app/scripts/routers/*');

$(document).ready(function() {
    amsDemo.init();
});
