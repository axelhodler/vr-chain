const test = require('tape');
const rp = require('request-promise-native')
const server = require('./server')

test('can query latestblock', assert => {
  const runningServer = server.start()
  rp('http://localhost:3001/latestblock').then(resp => {
    assert.equal(JSON.parse(resp).latest_block, 453470)
  }).then(() => {
    runningServer.close()
    assert.end()
  })
})

test('can query blocks by their id', assert => {
  const runningServer = server.start()
  rp('http://localhost:3001/blocks/453471').then(resp => {
    assert.equal(JSON.parse(resp).height, 453471)
  }).catch(() => {
    assert.fail('route not available');
  }).then(() => {
    runningServer.close()
    assert.end()
  })
})

test('handles server not present gracefully', assert => {
  rp('http://localhost:3001/latestblock').then(() => {
    assert.fail('server should not respond')
    assert.end()
  }).catch(() => {
    assert.true('error was thrown')
    assert.end()
  })
})
