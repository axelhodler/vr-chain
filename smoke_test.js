const Nightmare = require('nightmare')
const test = require('tape')

test('Load a Page', assert => {
  let nightmare = new Nightmare()

  nightmare.goto('http://localhost:3000')
    .evaluate(() => {
      return document.body.innerHTML
    })
    .end()
    .then(result => {
      assert.false(result.includes('Cannot find module'))
      assert.end()
    })
})