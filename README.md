# requesturl-stream

```javascript
var requestStream = require('requesturl-stream')
var pumpify = require('pumpify')

var requestOptions = {
  json: true,
  headers: headers = { 'User-Agent': 'request' }
}

var pipeline = pumpify.obj(
  requestStream(requestOptions),
  process.stdout
)

pipeline.write('http://google.com')
```
