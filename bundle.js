require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  'use strict'

  exports.changeColorOnSelection = (element) => {
    element.addEventListener('click', (event) => {
      event.target.setAttribute('material', {
        side: 'double',
        color: 'red'
      })
    })
  }
})()

},{}],"blockchain":[function(require,module,exports){
(function() {
  'use strict'

  var DISTANCE_BETWEEN_BLOCKS = 4;

  exports.render = (blockAmount) => {
    var currentZPosition = 3;
    for (var i = 0; i < blockAmount; i++) {
      currentZPosition = currentZPosition - DISTANCE_BETWEEN_BLOCKS;
      repeatChainElement(currentZPosition);
    }
  }

  function repeatChainElement(zPosition) {
    var mainScene = document.getElementById('main-scene')
    appendChainBlock(mainScene, zPosition)
    appendChainLink(mainScene, zPosition)
  }

  function appendChainBlock(mainScene, zPosition) {
    var chainBlock = document.createElement('a-entity')
    chainBlock.setAttribute('id', 'outer-box')
    chainBlock.setAttribute('mixin', 'chain-block')
    chainBlock.setAttribute('position', '0 1.5 ' + zPosition)
    mainScene.appendChild(chainBlock)
  }

  function appendChainLink(mainScene, zPosition) {
    var chainLink = document.createElement('a-entity')
    chainLink.setAttribute('mixin', 'chain-link')
    chainLink.setAttribute('position', '0 1.5 ' + (zPosition - 2))
    mainScene.appendChild(chainLink)
  }
}());

},{}],"components":[function(require,module,exports){
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
        this.el.setAttribute('text', 'text: blockNumber: ' + parseInt(JSON.parse(block).number, 16))
      }
    });
  }
}())

},{"./select-block":1}]},{},[]);
