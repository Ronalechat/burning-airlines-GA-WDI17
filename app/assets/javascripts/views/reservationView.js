var app = app || {};

app.ReservationView = Backbone.View.extend({

  el: '#main',
  render: function () {
    console.log(this.model);
    var reservationTemplate = $('#flightid-template').html();
    var resMaker = _.template(reservationTemplate);
    this.$el.html( resMaker(this.model.toJSON()) );
    //this.$el.html( $('#flightid-template').html() );
  }
})
