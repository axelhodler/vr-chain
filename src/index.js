require('./components').init()
import ComponentChanged from './component_changed_event'
import Block from './block'
import BlockChain from './blockchain'
import {Config} from './config'

let xpositionUnchanged = function(event) {
  return event.name !== 'position' || event.oldXCoordinate === event.newXCoordinate
}

$(document).ready(function() {
  var blockchain = new BlockChain()

  blockchain.render(Config.initialBlocks,
    new Block(Config.initialBlocks, Config.LATEST_BLOCK_HEIGHT));
  let currentBlockHeight = Config.LATEST_BLOCK_HEIGHT - Config.initialBlocks;
  let zIndexLastRenderedBlock = Config.initialZIndex * (Config.initialBlocks + 1);

  document.getElementById('camera').addEventListener('componentchanged', event => {
    var componentChangedEvent = new ComponentChanged(event)
    if (xpositionUnchanged(componentChangedEvent)) {
      return;
    }

    if (zIndexLastRenderedBlock < Math.abs(componentChangedEvent.newZCoordinate)) {
      blockchain.render(1, new Block(-zIndexLastRenderedBlock, currentBlockHeight))
      zIndexLastRenderedBlock += Config.initialZIndex
      currentBlockHeight--
    }
  });
})
