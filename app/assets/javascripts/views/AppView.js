var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    this.$el.html( $('#flightid-template').html() );
    // this.$el.html( $('#appView').html() );
  }
});
