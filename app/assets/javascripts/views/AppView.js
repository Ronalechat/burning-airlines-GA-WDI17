var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#pages',
  render: function () {
    this.$el.html( $('#appView').html() );

    // this.$el.html( $('#appView').html() );
  }
});
