import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value, options) {
  return moment(value).fromNow();
});