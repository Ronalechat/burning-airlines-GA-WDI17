var app = app || {};

app.ReservationView = Backbone.View.extend({

  el: '#main',
  render: function () {
    var reservationTemplate = $('#flightid-template').html();
    var resMaker = _.template(reservationTemplate);
    this.$el.html( resMaker(this.model.toJSON()) );

    var $seats = this.$el.find('#seats');
    console.log($seats);

    // this.$el.html( $('#flightid-template').html() );
  }
})
