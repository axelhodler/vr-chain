exports.latestBlock = () => {
  return fetch('http://localhost:3001/latestblock').then(resp => {
    return resp.json()
  }).then(parsedResponse => {
    return parsedResponse.latest_block;
  })
}