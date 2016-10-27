var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: '/reservations/:id',
  defaults: {
    flight_id: '',
    user_id: '',
    seat: ''
  }
});
