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

    //
    //   initialize: function() {
    //   },
    //   el: '#main',
    //
    // render: function() {
    //
    //   var origin = app.burningFlights.pluck('origin');
    //   this.$el.text( origin );
    //   $('#origin').prepend(this.$el);
    // };
    app.appRouter = new app.AppRouter();
    Backbone.history.start();

  });
});
