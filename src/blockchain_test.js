const test = require('tape');
var blockchain = require('./blockchain')

test('renders the block and the chain', (assert) => {
  let scene = document.createElement('div')
  scene.setAttribute('id', 'main-scene')
  document.body.appendChild(scene)

  blockchain.render(1)

  assert.equals(scene.getElementsByTagName('a-entity').length, 2)
  assert.end()
})