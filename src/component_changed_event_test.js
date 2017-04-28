const tape = require('tape')
import ComponentChangedEvent from './component_changed_event';

tape('wraps componentchangedevent to provide a cleaner api', assert => {
  let aframeComponentChangedEvent = {
    detail: {
      name: 'aName',
      newData: {
        x: 1,
        z: 3
      },
      oldData: {
        x: 1
      }
    }
  }

  const componentChanged = new ComponentChangedEvent(aframeComponentChangedEvent)

  assert.equals(componentChanged.name, 'aName')
  assert.equals(componentChanged.newXCoordinate, 1)
  assert.equals(componentChanged.oldXCoordinate, 1)
  assert.equals(componentChanged.newZCoordinate, 3)
  assert.end()
})

tape('wraps componentchangedevent to provide a cleaner api - triangulate', assert => {
  let aframeComponentChangedEvent = {
    detail: {
      name: 'anotherName',
      newData: {
        x: 2,
        z: 42
      },
      oldData: {
        x: 3
      }
    }
  }

  const componentChanged = new ComponentChangedEvent(aframeComponentChangedEvent)

  assert.equals(componentChanged.name, 'anotherName')
  assert.equals(componentChanged.newXCoordinate, 2)
  assert.equals(componentChanged.oldXCoordinate, 3)
  assert.equals(componentChanged.newZCoordinate, 42)
  assert.end()
})
