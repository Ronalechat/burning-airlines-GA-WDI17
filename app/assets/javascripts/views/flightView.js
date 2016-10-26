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
      var flightListViewTemplate = $('#flightListView-template').html();
      var flightListViewHTML = _.template(flightListViewTemplate);

      // Iterates through all flights and gets plane name for flight list.
      for (var i = 0; i < app.burningFlights.models.length; i++) {

        var currentAirplane = app.burningPlanes.get(app.burningFlights.models[i].attributes.airplane_id);
        if (currentAirplane) {
        var name = currentPlane.attributes.name;
        app.burningFlights.models[i].attributes.name = name;

        //calculate remaining seats;
        var totalSeats = currentAirplane.attributes.rows * currentAirplane.attributes.columns
        var reservedSeats = app.burningFlights.models[i].attributes.reservations.length
        var remainingSeats = totalSeats - reservedSeats

        // Creates options to pass both
        var option = {
          flight: app.burningFlights.models[i].attributes,
          seats: remainingSeats
        }
        var compiledHTML = flightListViewHTML(options)
        // $("Thread.threa")
      }
    };
    });

  }



});
