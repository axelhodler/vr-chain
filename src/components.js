(function() {
  'use strict';

  var selections = require('./select-block');
  const block = require('./block-gateway').block;

  exports.init = () => {
    AFRAME.registerComponent('can-select', {
      init: function() {
        selections.changeColorOnSelection(this.el);
      }
    });

    AFRAME.registerComponent('block-number', {
      init: function() {
        var parsedBlockNumber = parseInt(JSON.parse(block).number, 16);
        this.el.setAttribute('text', {
          width: 15,
          align: 'center',
          value: 'blockNumber: ' + parsedBlockNumber
        });
      }
    });
  }
}())
