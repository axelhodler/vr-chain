const Nightmare = require('nightmare')
const test = require('tape')

test('Load a Page', assert => {
  let nightmare = new Nightmare()

  nightmare.goto('https://gethoodie.com')
    .end()
    .then(result => {
      console.log(result)
      assert.end()
    })
})