const test = require('tape');
var blockchain = require('./blockchain')
const latestBlock = 453470

test('renders the block and the chain', (assert) => {
  let scene = document.createElement('div')
  scene.setAttribute('id', 'main-scene')
  document.body.appendChild(scene)

  blockchain.render(1)

  assert.equals(scene.getElementsByTagName('a-entity').length, 3)
  document.body.removeChild(scene)
  assert.end()
})

test('counts back the ids', (assert) => {
  let scene = document.createElement('div')
  scene.setAttribute('id', 'main-scene')
  document.body.appendChild(scene)

  blockchain.render(2)

  assert.true(document.getElementById('block-453470-description'));
  assert.true(document.getElementById('block-453469-description'));
  document.body.removeChild(scene)
  assert.end()
})
