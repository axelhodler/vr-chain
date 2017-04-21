const Nightmare = require('nightmare')
const test = require('tape')

test('Smoke', assert => {
  let nightmare = new Nightmare()

  nightmare.goto('http://localhost:3000')
    .evaluate(() => {
      return document.body.innerHTML
    })
    .end()
    .then(result => {
      assert.false(result.includes('Cannot find module'), 'Finds required modules')
      assert.end()
    })
})