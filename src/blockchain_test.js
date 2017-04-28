const test = require('tape');
import BlockChain from './blockchain'
import Block from './block'

const IRRELEVANT = 0;

test('renders the block and the chain', assert => {
  let scene = document.createElement('div')
  scene.setAttribute('id', 'main-scene')
  document.body.appendChild(scene)

  const ONE_BLOCK = 1;
  const blockchain = new BlockChain();
  blockchain.render(ONE_BLOCK, new Block(IRRELEVANT, IRRELEVANT))

  const PARTS_SINGLE_BLOCK_CONSISTS_OF = 3;
  assert.equals(scene.getElementsByTagName('a-entity').length,
    PARTS_SINGLE_BLOCK_CONSISTS_OF,
    'one block with description and link was rendered')
  document.body.removeChild(scene)
  assert.end()
})

test('counts back the ids from newest to oldest', assert => {
  let scene = document.createElement('div')
  scene.setAttribute('id', 'main-scene')
  document.body.appendChild(scene)

  const TWO_BLOCKS = 2;
  const NEWEST_BLOCK_HEIGHT = 42;
  const blockchain = new BlockChain();
  blockchain.render(TWO_BLOCKS, new Block(IRRELEVANT, NEWEST_BLOCK_HEIGHT))

  assert.true(document.getElementById('block-42-description'),
    'newest block is rendered')
  assert.true(document.getElementById('block-41-description'),
    'second newest block is rendered')
  document.body.removeChild(scene)
  assert.end()
})
