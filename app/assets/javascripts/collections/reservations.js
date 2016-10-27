var app = app || {};

app.Reservations = Backbone.Collection.extend({
  initialize: function(id) {
    this.id = id;
  },
  url: function(){
    return '/reservations/' + this.id;
  },
  model: app.Flight
});
