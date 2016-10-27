var app = app || {};

app.ReservationView = Backbone.View.extend({
  el: '#main',
  events: {
    'click .colorful': 'resSeat'
  },

  render:function() {
    var reservationTemplate = $('#flightid-template').html();
    var resMaker = _.template(reservationTemplate);
    this.$el.html( resMaker(this.model.toJSON()) );
    // doReservation: function(e){
    //   app.appRouter.navigate('flights/' + e.currentTarget.id, true);
    // },


    // console.log(this.model.attributes.id);

  var model = this.model;

  setInterval(function(){
      app.flightReservations = new app.Reservations(model.attributes.id);
      app.flightReservations.fetch().done(function(){
        // console.log(app.flightReservations);
        var pap = app.flightReservations;
        var seats = pap.pluck("seat");
        _(seats).each(function(reserved){
          $('#' + reserved).addClass('selected disabled')
        })
        // seats are our already reserved seats
      });
    }, 1000);

    // PSEUDOCODE For reserved seats:
    // Grab reservations seat value.
    // Make div ID of seat Value taken
    // On click+ submit, make new app.reservation for that ID, with that seat value.

    // console.log(this.model);

    var $seats = this.$el.find('#seats');

    var thisRow = this.model.attributes.airplane.row; //p.attributes.airplane.row;
    var thisCol = this.model.attributes.airplane.column; //p.attributes.airplane.column;

    console.log(thisRow, thisCol);

    seatCount = thisRow * thisCol;
  //
  var html = "";

  for (var row = 1; row <= thisRow; row ++) {
    html += '<div class="row" id="seat_rows">';
    for (var i = 0; i < thisCol; i ++) {
      var chr = String.fromCharCode(97 + i);

      html += '<div class="column colorful col-md-3" id='+row+chr+'>';
      $(this).attr('id', row + chr);

      html += row + chr;
      html += '</div>';
    };
      html += '</div>';
  };
  // var chr = String.fromCharCode(97 + i);

  for (var i = 0; i < seatCount; i++) {
    ($seats).append('<div class="colorful"></div>').html(html)
    };
},


resSeat: function(event){
  console.log('Ive been clicked');
  $('.thisSeat').append($(event.target).attr('id'));
  $(event.target).addClass('selected');
  }
});
