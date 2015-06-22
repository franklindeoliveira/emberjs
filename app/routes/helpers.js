import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
  	return {
  		date: new Date('01/01/2015'),
  		foo: '   foo   ',
  		uppercase: 'uppercase'
  	};
  }

});