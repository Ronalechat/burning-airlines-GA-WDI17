var app = app || {};

app.Reservations = Backbone.Model.extend({
  urlRoot: '/reservations',
  defaults: {
    flight_id: '',
    user_id: '',
    seat: ''
  }


});