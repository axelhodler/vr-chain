const test = require('tape')
import CameraChanged from './camera_changed';

let blockchainSpy = {
  renderCalled: false,
  render() {
    this.renderCalled = true;
  }
};

test('does not render a block if position has not changed', assert => {
  const camera = new CameraChanged(Object.create(blockchainSpy));
  camera.renderPreviousBlockIfNecessary({
    name: 'foo'
  })

  assert.false(blockchainSpy.renderCalled)
  assert.end()
})

test('does not render a block if the x position has not changed', assert => {
  const camera = new CameraChanged(Object.create(blockchainSpy));
  camera.renderPreviousBlockIfNecessary({
    name: 'position',
    oldData: {
      x: 1
    },
    newData: {
      x: 1
    }
  })

  assert.false(blockchainSpy.renderCalled)
  assert.end()
})