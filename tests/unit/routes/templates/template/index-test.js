import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | templates/template/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:templates/template/index');
    assert.ok(route);
  });
});
