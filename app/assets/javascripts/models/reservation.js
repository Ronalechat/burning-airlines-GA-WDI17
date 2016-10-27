var app = app || {};

app.Reservations = Backbone.Model.extend({
  urlRoot: '/reservations/:id',
  defaults: {
    flight_id: '',
    user_id: '',
    seat: ''
  }
});
