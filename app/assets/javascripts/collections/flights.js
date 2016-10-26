var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: '/flightsview',
  model: app.Flight
});
