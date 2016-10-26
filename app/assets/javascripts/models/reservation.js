var app = app || {};

app.Reservations = Backbone.Model.extend({
  urlRoot: '/flights/:id',
  defaults: {
    flight_id: '',
    user_id: '',
    seat: ''
  }
});
