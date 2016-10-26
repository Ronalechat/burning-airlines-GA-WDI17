var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click a': 'showSeats'
  },
  render: function() {

    //
    // TODO: Add variable, template, and JQUERY to create new flights. 
    var flightViewHTML = $('#flights-template').html();
    this.$el

  }



});
