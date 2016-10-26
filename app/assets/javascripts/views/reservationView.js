var app = app || {};

app.ReservationView = Backbone.View.extend({
  el: '#main',
  render:function() {
    var reservationTemplate = $('#flightid-template').html();
    var resMaker = _.template(reservationTemplate);
    this.$el.html( resMaker(this.model.toJSON()) );

    // var $seats = this.$el.find('#seats');
    //
    // var p = app.burningFlights;
    // var thisRow = p.attributes.airplane.row;
    // var thisCol = p.attributes.airplane.column;
    //
    // seatCount = thisRow.to_i * thisCol.to_i;
    //
    // // adds in seats according to number of rows and columns multiplied together and appends them as seat image divs.
    // // broken
    // $(document).ready(function(){
    //   for (var i = 0; i < seatCount; i++) {
    //   ($seats).append('<img src="http://www.4wd.com/aux_incl/images.ashx?i=TR6701MB.jpg&partNo=CBU&w=50&h=50" alt="">');
    // });




    // get the plane info from flight, find row column from plane, return the plane's seat fields

    // this.$el.html( $('#flightid-template').html() );
  }
})
