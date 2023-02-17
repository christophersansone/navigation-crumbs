import Route from '@ember/routing/route';

export default class TemplatesTemplateRoute extends Route {
  model(params) {
    return { id: params.template_id };
  }
}
