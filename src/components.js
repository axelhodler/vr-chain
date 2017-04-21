(function() {
  'use strict';

  var selections = require('./select-block')
  const gateway = require('./server/blockchaininfo-gateway')

  exports.init = () => {
    AFRAME.registerComponent('can-select', {
      init: function() {
        selections.changeColorOnSelection(this.el);
      }
    });

    AFRAME.registerComponent('block-number', {
      init: function() {
        gateway.latestBlock().then(latestBlock => {
          this.el.setAttribute('text', {
            zOffset: 1,
            width: 1,
            align: 'center',
            value: 'blockNumber: ' + latestBlock
          });
        })
      }
    });
  }
}())
