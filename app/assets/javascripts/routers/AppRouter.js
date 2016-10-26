app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "airplanes": "airplane",
    "flights": "flight",
    "flights/:id":"reservation",
    "search": "viewSearch"
  },

  index: function() {
    $('#main').hide();
  },

  // viewAirplane: function(id) {

// }

  viewFlight: function(id) {
    $("#main").show();
    $("#main").empty();
    app.burningAirplanes.fetch().done(function () {
      //TODO make an app.burningFlights
      var flight = app.burningFlights.get(id);
      // TODO make an app for flight view.
      //TODO Make model for flights.
      var flightView = new app.FlightView({model: flight});
      flightView.render();
    });
  },

  viewReservation: function (id) {
    $('#main').show();
    app.burningFlights.fetch().done(function (){
      var flight = app.burningFlights.get(id);
      var airplane_id = flight.attributes.airplane_id
      var options = {
        flight: app.burningFlights.get(id),
        airplane_id: flight.attributes.airplane_id,
        airplane: app.burningAirplanes.get(airplane_id)
      }
      var reservationView = new app.ReservationView({model: options});
      reservationView.render(options.airplane);
    });
  },

  viewSearch: function () {
    $('#main').show();
    $('#main').empty();
    console.log('search');
    // TODO Make a collection for app.Flights
    var searchView = new app.SearchView({collection: app.Flights});
    //TODO Make searchView
    searchView.render()
  }

});
