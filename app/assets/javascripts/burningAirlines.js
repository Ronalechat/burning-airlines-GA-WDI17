// MAIN JS file.

var app = app || {};

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

  // Use {{ Handlebar tags }} instead of ERB tags, to avoid conflict.


  app.burningFlights.fetch().done(function () {
    app.appRouter = new app.AppRouter();

  render: function (){
    var origin = app.burningFlights.pluck('origin');
    this.$el.text( origin ); // What would happen if we used .html instead?
    $('#origin').prepend( this.$el);
};

    // Start history when fetch is ready.
    Backbone.history.start()
  });
});
