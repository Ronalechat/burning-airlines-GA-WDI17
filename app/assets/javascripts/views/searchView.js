var app = app || {};

app.SearchView = Backbone.View.extend({
  el: '#main',
  events: {
    'click #doSearch': 'doSearch'
  },
  doSearch: function(){
    var origin = $('#origin').val();
    var destination = $('#destination').val();
    var f = app.burningFlights.where({ 'origin': origin, 'destination': destination });

    var searchResultsView = new app.SearchResultsView({'collection': f});
    searchResultsView.render();

    // console.log(f);
  },

  render: function () {
    this.$el.html( $('#search-template').html() );

    origins = _.uniq( app.burningFlights.pluck('origin') );
    destinations = _.uniq( app.burningFlights.pluck('destination') );

    _(origins).each(function(origin){
      $('<option>', {value: origin, text: origin}).appendTo('#origin');
    })

    _(destinations).each(function(dest){
      $('<option>', {value: dest, text: dest}).appendTo('#destination');
    })

    // this.$el.html( $('#appView').html() );
  }
});
