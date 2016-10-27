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
    console.log("Index is working");
    $("#main").show();
    $("#main").empty();
    var appView = new app.AppView({});
    appView.render();
  },

  // viewAirplane: function(id) {

// }

  viewFlight: function(id) {
    console.log('View Flight is working');
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

  viewReservation: function (num) {
    console.log('in viewReservation', num);
    $('#main').show();
    var f = app.burningFlights.findWhere({'flight_num': num});
    console.log('flight', f);
    var reservationView = new app.ReservationView({model: f});
      reservationView.render();

  },

  viewSearch: function () {
    console.log('Routes for search view is working');
    $('#main').show();
    $('#main').empty();
    console.log('search');
    // TODO Make a collection for app.Flights
    var searchView = new app.SearchView({collection: app.Flights});
    //TODO Make searchView
    searchView.render();


  }

});
