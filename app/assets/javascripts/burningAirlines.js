// MAIN JS file.

var app = app || {};

app.burningAirplanes = new app.Airplanes();
app.burningFlights = new app.Flights();

$(document).ready(function(){
  // Check to see if main has content
  if ($('#main').length === 0 ) { return; }

  // Use {{ Handlebar tags }} instead of ERB tags, to avoid conflict.
  _.templateSettings = {
    evaluate: /\{\{(.+?)\}\}/g,
    interpolate: /\{\{=(.+?)\}\}/g,
    escape: /\{\{-(.+?)\}\}/g
  };

  app.burningAirplanes.fetch().done(function () {
    app.appRouter = new app.AppRouter();
    // Start history when fetch is ready.
    Backbone.history.start()
  });
});
