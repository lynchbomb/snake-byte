import SnakeByte from 'snake-byte';

QUnit.module('tests/canvas-util');

QUnit.test('clearCanvas', function(assert) {
  let game = new SnakeByte();

  assert.equal(game.someNum, 1, 'They are the same 1 === 1');
});
