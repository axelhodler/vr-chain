require('./components').init()
import ComponentChanged from './component_changed_event'
import Block from './block'
import BlockChain from './blockchain'
import {Config} from './config'

let xpositionUnchanged = function(event) {
  return event.name !== 'position' || event.oldXCoordinate === event.newXCoordinate
}

let nextBlockShouldBeRendered = function(nextBlock, componentChangedEvent) {
  return Math.abs(nextBlock.zCoordinate) < Math.abs(componentChangedEvent.newZCoordinate)
}

$(document).ready(function() {
  var blockchain = new BlockChain()

  blockchain.render(new Block(Config.initialZIndex, Config.LATEST_BLOCK_HEIGHT));
  let currentBlockHeight = Config.LATEST_BLOCK_HEIGHT
  let zIndexLastRenderedBlock = Config.initialZIndex
  var nextBlock =
    new Block(-(zIndexLastRenderedBlock + Config.initialZIndex - 2), currentBlockHeight);

  document.getElementById('camera').addEventListener('componentchanged', event => {
    var componentChangedEvent = new ComponentChanged(event)
    if (xpositionUnchanged(componentChangedEvent)) {
      return;
    }

    if (nextBlockShouldBeRendered(nextBlock, componentChangedEvent)) {
      blockchain.render(Object.assign({}, nextBlock))
      nextBlock = new Block(nextBlock.zCoordinate - Config.initialZIndex - 1,
        currentBlockHeight - 1)
    }
  });
})
