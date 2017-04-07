const test = require('tape');
const rp = require('request-promise-native')
const server = require('./server')

test('can query latestblock', (assert) => {
  const runningServer = server.start()
  rp('http://localhost:3001/latestblock').then(resp => {
    assert.equal(JSON.parse(resp).latest_block, 453470)
  }).then(() => {
    runningServer.close()
    assert.end()
  })
})
