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

    // console.log(this.model);

    var $seats = this.$el.find('#seats');

    var thisRow = this.model.attributes.airplane.row; //p.attributes.airplane.row;
    var thisCol = this.model.attributes.airplane.column; //p.attributes.airplane.column;

    console.log(thisRow, thisCol);

    seatCount = thisRow * thisCol;
  //
  var html = "";

  for (var row = 1; row <= thisRow; row ++) {
    html += '<div class="row">';
    for (var i = 0; i < thisCol; i ++) {
      var chr = String.fromCharCode(97 + i);
      html += '<div class="column colorful col-md-3">';
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

resSeat: function(){
  console.log('ive been clicked')
}

});
