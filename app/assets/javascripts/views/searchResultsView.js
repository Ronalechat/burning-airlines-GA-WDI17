var app = app || {};

app.SearchResultsView = Backbone.View.extend({
  el: '#search_results',
  events: {
    'click .flightnum': 'doReservation'
  },

  doReservation: function(e){
    app.appRouter.navigate('flights/' + e.currentTarget.id, true);
  },
  // this.collection

  render: function () {
    this.$el.html( $('#search-results-template').html() );

    console.log('searchResultsView', this.collection);

    _(this.collection).each(function(result){
      $tr = $('<tr>');
      $('<td>', {text: result.attributes.date}).appendTo($tr);
      $('<td>', {text: result.attributes.flight_num, class: 'flightnum', id: result.attributes.flight_num}).appendTo($tr);
      $('<td>', {text: result.attributes.origin}).appendTo($tr);
      $('<td>', {text: result.attributes.destination}).appendTo($tr);
      $('<td>', {text: result.attributes.airplane.name}).appendTo($tr);
      $tr.appendTo('#searchResultsTable');
    })

  }
});
