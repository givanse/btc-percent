import noExp from './helper';

const { module, test } = QUnit;

module('Helper: no-exp', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(noExp([]), undefined);
  });
});
