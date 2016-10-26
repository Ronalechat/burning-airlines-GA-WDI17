var app = app || {};

app.Search = Backbone.Model.extend({
   urlRoot: '/search',
   defaults: {
     date: '',
     flight_id: '',
     origin: '',
     destination: '',
     airplane: ''
   }
});
