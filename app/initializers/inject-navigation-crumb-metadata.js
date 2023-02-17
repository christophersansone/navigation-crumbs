import Route from '@ember/routing/route';

export function initialize() {
  Route.reopen({
    buildRouteInfoMetadata: function() {
      console.log("building route info metadata", this.routeName)
      return { navigationCrumb: this.navigationCrumb };
    }
  })
}

export default {
  initialize,
};
