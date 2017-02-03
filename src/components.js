(function(vr) {
  'use strict';

  vr.registerComponent('can-select', {
    init: function() {
      this.el.addEventListener('click', function() {
        this.el.setAttribute('material', {
          side: 'double',
          color: 'red'
        })
      }.bind(this));
    }
  });

  vr.registerComponent('block-number', {
    init: function() {
      this.el.setAttribute('text', 'text: blockNumber: ' + parseInt(JSON.parse(block).number, 16))
    }
  });
}(AFRAME))
