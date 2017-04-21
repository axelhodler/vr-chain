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
      schema: {
        blockId: {type: 'number'}
      },
      init: function() {
        gateway.blockById(this.data.blockId).then(block=> {
          this.el.setAttribute('text', {
            zOffset: 1.001,
            width: 3,
            align: 'center',
            value: 'blockNumber: ' + block.id
          });
        })
      }
    });
  }
}())
