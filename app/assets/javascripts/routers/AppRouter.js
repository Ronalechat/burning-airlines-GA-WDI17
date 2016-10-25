app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "planes": "plane",
    "flights": "flight",
    "flights/:id":"book",
    "search": "search"
  },

  index: function() {
    // var appView = new app.AppView();
    // appView.render
  }
});
