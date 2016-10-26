var app = app || {};

app.AirplaneView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #create-airplane': 'createAirplane',
    'click #save-airplane': 'showAirplane',
    'click #cancel-airplane': 'clearAirplane'

  }




});
