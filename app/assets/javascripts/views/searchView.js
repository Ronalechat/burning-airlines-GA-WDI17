var app = app || {};

app.SearchView = Backbone.View.extend({
  el: '#main',
  render: function () {
    this.$el.html( $('#searchView-template').html() );

    // this.$el.html( $('#appView').html() );
  }
});
