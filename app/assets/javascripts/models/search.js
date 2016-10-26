var app = app || {};

app.Search = Backbone.model.extend({
   urlRoot: '/search',
   defaults: {
     date: '',
     flight_id: '',
     origin: '',
     destination: '',
     airplane: ''
   }
});
