var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors());

app.get('/latestblock', (req, res) => {
  res.send({
    'latest_block': 453470
  });
})

module.exports = {
  start() {
    return app.listen(3001, () => {
      console.log('Example app listening on port 3001!')
    })
  }
}
