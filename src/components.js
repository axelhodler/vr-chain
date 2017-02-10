(function() {
  'use strict';

  var selections = require('./select-block');

  exports.init = () => {
    AFRAME.registerComponent('can-select', {
      init: function() {
        selections.changeColorOnSelection(this.el);
      }
    });

    AFRAME.registerComponent('block-number', {
      init: function() {
        this.el.setAttribute('text', 'width: 15; align: center; value: blockNumber: ' + parseInt(JSON.parse(block).number, 16))
      }
    });
  }
}())
