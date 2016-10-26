var app = app || {};

app.Airplanes = Backbone.Collection.extend({
  url: '/airplanes',
  mode: app.Airplane
});
