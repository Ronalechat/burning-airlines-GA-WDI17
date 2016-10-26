var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click a': 'showSeats'
  },
  render: function() {

    //
    // TODO: Add variable, template, and JQUERY to create new flights.
    var flightViewHTML = $('#flightsView-template').html();
    this.$el.html(flightViewHTML)

    app.burningFlights.fetch().done(function(result) {
      console.log(result);
      var flightListViewTemplate = $('#flight')


    });

  }



});
