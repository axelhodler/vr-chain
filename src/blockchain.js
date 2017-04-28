(function() {
  'use strict'

  var DISTANCE_BETWEEN_BLOCKS = 4;
  exports.render = (blockAmount, currentZPosition, height) => {
    var currentBlockHeight = height;
    for (var i = 0; i < blockAmount; i++) {
      currentZPosition = currentZPosition - DISTANCE_BETWEEN_BLOCKS;
      repeatChainElement(currentZPosition, currentBlockHeight);
      currentBlockHeight--;
    }
  }

  function repeatChainElement(zPosition, blockNumber) {
    var mainScene = document.getElementById('main-scene')
    appendChainBlock(mainScene, zPosition)
    appendChainDescription(mainScene, zPosition, blockNumber)
    appendChainLink(mainScene, zPosition)
  }

  function appendChainBlock(mainScene, zPosition) {
    var chainBlock = document.createElement('a-entity')
    chainBlock.setAttribute('id', 'outer-box')
    chainBlock.setAttribute('mixin', 'chain-block')
    chainBlock.setAttribute('position', '0 1.5 ' + zPosition)
    mainScene.appendChild(chainBlock)
  }

  function appendChainDescription(mainScene, zPosition, height) {
    var blockDescription = document.createElement('a-entity')
    blockDescription.setAttribute('id', 'block-' + height + '-description')
    blockDescription.setAttribute('mixin', 'block-description')
    blockDescription.setAttribute('block-number', { height: height})
    blockDescription.setAttribute('position', '0 1.5 ' + zPosition)
    blockDescription.setAttribute('rotation', '0 -90 0')
    mainScene.appendChild(blockDescription)
  }

  function appendChainLink(mainScene, zPosition) {
    var chainLink = document.createElement('a-entity')
    chainLink.setAttribute('mixin', 'chain-link')
    chainLink.setAttribute('position', '0 1.5 ' + (zPosition - 2))
    mainScene.appendChild(chainLink)
  }
}());
