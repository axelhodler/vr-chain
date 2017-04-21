module.exports = {
  latestBlock() {
    return fetch('http://localhost:3001/latestblock').then(resp => {
      return resp.json()
    }).then(parsedResponse => {
      return parsedResponse.latest_block;
    })
  },
  blockById(id) {
    return fetch('http://localhost:3001/blocks/' + id).then(resp => {
      return resp.json()
    }).then(parsedResponse => {
      return parsedResponse
    })
  }
}
