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

        var currentAirplane = app.burningAirplanes.get(app.burningFlights.models[i].attributes.airplane_id);
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
        $("thead.thead").append(compiledHTML);
        }
      };
    });
    // Iterates through all Airplanes and get plane names for the selected drop down.
    // for (var i = 0; i < app.burningAirplanes.models.length; i++ ) {
    //   var name = app.burningAirplanes.models[i].attributes.name;
    //   var $dataid = app.burningAirplanes.models[i].attributes.id;
      // $option = $("<option data-id=\"" + $dataid + "\"></option>"); // For choose-plane
      // $option.text(name);
      // $option.appendTo($('.choose-plane')); // For new flight.
    // }
  },

  showSeats: function(result) {
    var id = result.currentTarget.id;
    app.appRouter.navigate('flights/' + id, true)
  }






});
