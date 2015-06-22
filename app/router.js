import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('favorites');
});

Router.map(function() {
  this.route('favorite-view', {path: '/favorites/:id/view'});
});

Router.map(function() {
  this.route('favorite-edit', {path: '/favorites/:id/edit'});
});

Router.map(function() {
  this.route('components');
});

Router.map(function() {
  this.route('helpers');
});

export default Router;