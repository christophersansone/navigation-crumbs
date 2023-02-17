import Component from '@glimmer/component';

export default class LeftNavigationNavigationItemComponent extends Component {
  item = null;
  activeCrumb = null;

  get isActive() {
    const activeCrumb = this.args.activeCrumb || '';
    const current = activeCrumb.split('.')[0];
    const item = this.args.item;
    return item && item.id === current;
  }

  get childCrumb() {
    const activeCrumb = this.args.activeCrumb || '';
    return activeCrumb.split('.').slice(1).join('.');
  }
}
