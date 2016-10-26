var app = app || {};

app.ReservationView = Backbone.View.extend({
  el: '#main',
  render:function() {
    var reservationTemplate = $('#flightid-template').html();
    var resMaker = _.template(reservationTemplate);
    this.$el.html( resMaker(this.model.toJSON()) );

console.log(this.model);

    var $seats = this.$el.find('#seats');

    // var p = app.burningFlights;

    var thisRow = this.model.attributes.airplane.row; //p.attributes.airplane.row;
    var thisCol = this.model.attributes.airplane.column; //p.attributes.airplane.column;

    console.log(thisRow, thisCol);

    seatCount = thisRow * thisCol;

      for (var i = 0; i < seatCount; i++) {
        ($seats).append('<div class="col-md-3 colorful">Hi</div>');
      };

  }
})
