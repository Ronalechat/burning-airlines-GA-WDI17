// MAIN JS file.

var app = app || {};

// Use {{ Handlebar tags }} instead of ERB tags, to avoid conflict.
_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

app.burningAirplanes = new app.Airplanes();
app.burningFlights = new app.Flights();
// app.burningFlight = new app.flight();


$(document).ready(function(){
  // Check to see if main has content
  if ($('#main').length === 0 ) { return; };

  app.burningFlights.fetch().done(function () {
    app.appRouter = new app.AppRouter();
    // 
    // initialize: function() {
    // },
    // el: '#main',
    // render: function () {
    //     this.$el.html( $('#search-template').html(), {} );
    //     var aView = new TheView({el: $("#origin")})
    // };
    // };

  // render: function() {

  //   var origin = app.burningFlights.pluck('origin');
  //   this.$el.text( origin ); // What would happen if we used .html instead?
  //   $('#origin').prepend(this.$el);
  // };

    Backbone.history.start()
  });
});
