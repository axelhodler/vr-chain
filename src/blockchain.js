import Block from './block'

function repeatChainElement(block) {
  var mainScene = document.getElementById('main-scene')
  appendChainBlock(mainScene, block.zCoordinate)
  appendChainDescription(mainScene, block)
  appendChainLink(mainScene, block.zCoordinate)
}

function appendChainBlock(mainScene, zPosition) {
  var chainBlock = document.createElement('a-entity')
  chainBlock.setAttribute('id', 'outer-box')
  chainBlock.setAttribute('mixin', 'chain-block')
  chainBlock.setAttribute('position', '0 1.5 ' + zPosition)
  mainScene.appendChild(chainBlock)
}

function appendChainDescription(mainScene, block) {
  var blockDescription = document.createElement('a-entity')
  blockDescription.setAttribute('id', 'block-' + block.blockHeight + '-description')
  blockDescription.setAttribute('mixin', 'block-description')
  blockDescription.setAttribute('block-number', {height: block.blockHeight})
  blockDescription.setAttribute('position', '0 1.5 ' + block.zCoordinate)
  blockDescription.setAttribute('rotation', '0 -90 0')
  mainScene.appendChild(blockDescription)
}

function appendChainLink(mainScene, zPosition) {
  var chainLink = document.createElement('a-entity')
  chainLink.setAttribute('mixin', 'chain-link')
  chainLink.setAttribute('position', '0 1.5 ' + (zPosition - 2))
  mainScene.appendChild(chainLink)
}

export default class BlockChain {
  render(blockAmount, block) {
    var DISTANCE_BETWEEN_BLOCKS = 4;
    var currentBlockHeight = block.blockHeight;
    for (var i = 0; i < blockAmount; i++) {
      block.zCoordinate -= DISTANCE_BETWEEN_BLOCKS;
      repeatChainElement(new Block(block.zCoordinate, currentBlockHeight));
      currentBlockHeight--;
    }
  }
}
