var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  defaults: {
    flight_number: "BA000",
    origin: "",
    destination: ""
  }
});
