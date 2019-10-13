const express = require('express')
const server = express()

/* route requests for static files to appropriate directory */
server.use('/public', express.static(__dirname + '/public'))



/* final catch-all route to index.html defined last */
server.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/main.html');
})

const port = 5000;
server.listen(port, function() {
  console.log('server listening on port ' + port)
});