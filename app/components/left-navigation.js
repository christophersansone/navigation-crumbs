import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

const NAVIGATION_TREE = [
  {
    id: 'conversations',
    title: 'Conversations',
    icon: 'fa-comment',
    route: 'messages',
    children: [
      {
        id: 'messages',
        title: 'Messages',
        icon: 'fa-comment',
        route: 'messages',
      },
      {
        id: 'templates',
        title: 'Templates',
        icon: 'fa-file',
        route: 'templates',
      },
    ],
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: 'fa-chart',
    route: 'dashboard',
    children: [
      {
        id: 'messages',
        title: 'Messages',
        icon: 'fa-comments',
        route: 'dashboard.messages',
      },
      {
        id: 'payments',
        title: 'Payments',
        icon: 'fa-money',
        route: 'dashboard.payments',
      },
    ],
  },
];

export default class LeftNavigationComponent extends Component {
  navigationTree = NAVIGATION_TREE;

  @service router;

  get currentRouteInfo() {
    return this.router.currentRoute;
  }

  get currentNavigationCrumb() {
    let route = this.currentRouteInfo;
    while (route) {
      if (route.metadata && route.metadata.navigationCrumb) {
        return route.metadata.navigationCrumb;
      }
      route = route.parent;
    }
  }
}
