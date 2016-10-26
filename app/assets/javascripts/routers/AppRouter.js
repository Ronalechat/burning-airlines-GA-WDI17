app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "airplanes": "airplane",
    "flights": "flight",
    "flights/:id":"booking",
    "search": "viewSearch"
  },

  index: function() {
    $('#main').hide();
  },

  // viewAirplane: function()

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
