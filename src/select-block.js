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
