export default Ember.Route.extend({

  model: function() {
  	return [
  		{id: 0, name: 'Item 0'},
  		{id: 1, name: 'Item 1'},
  		{id: 2, name: 'Item 2'}
  	];
  }

});