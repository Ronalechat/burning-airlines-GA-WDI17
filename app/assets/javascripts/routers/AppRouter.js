app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "airplanes": "airplane",
    "flights": "flight",
    "flights/:id":"booking"
  },

  index: function() {
    // var appView = new app.AppView();
    // appView.render
  }
});
