app = app || {};

app.AppRouter = Backbone.Router.extend({
  // initialize:function(){
  //   alert("Index is working");
  // },

  routes: {
    "": "index",
    "airplanes": "viewAirplane",
    "flights": "viewFlight",
    "flights/:id":"viewReservation",
    "search": "viewSearch"
  },

  index: function() {
    alert("Index is working");
    $('#main').hide();
  },

  // viewAirplane: function(id) {

// }

  viewFlight: function(id) {
    alert('View Flight is working')
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
    alert('Routes for Reservation view is working')
    $('#main').show();
    app.burningFlights.fetch().done(function (){
      var flight = app.burningFlights.get(id);
      // var airplane_id = flight.attributes.airplane_id
      var options = {
        flight: app.burningFlights.get(id),
        // airplane_id: flight.attributes.airplane_id,
        // airplane: app.burningAirplanes.get(airplane_id)
      }
      var reservationView = new app.ReservationView({model: options});
      reservationView.render(options.airplane);
    });
  },

  viewSearch: function () {
    alert('Routes for search view is working')
    $('#main').show();
    $('#main').empty();
    console.log('search');
    // TODO Make a collection for app.Flights
    var searchView = new app.SearchView({collection: app.Flights});
    //TODO Make searchView
    searchView.render()
  }

});
