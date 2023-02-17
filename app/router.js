import EmberRouter from '@ember/routing/router';
import config from 'navigation-crumbs/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('messages');
  this.route('templates', function () {
    this.route('template', { path: ':template_id' }, function () {
      this.route('edit');
    });
  });
  this.route('dashboard', function () {
    this.route('messages');
    this.route('payments');
  });
});
