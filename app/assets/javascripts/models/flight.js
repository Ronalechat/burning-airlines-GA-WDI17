var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  // Default values for creating a new flight model.
  defaults: {
    flight_number: "BA000",
    origin: "",
    destination: ""
  }
});
