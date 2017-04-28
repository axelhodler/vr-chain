export default class ComponentChanged {
  constructor(event) {
    this.name = event.detail.name
    this.newXCoordinate = event.detail.newData.x
    this.oldXCoordinate = event.detail.oldData.x
  }
}