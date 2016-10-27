var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    this.$el.html( $('#flights-home').html() )//.done();
    // this.$el.html( $('#appView').html() );
  }
});
