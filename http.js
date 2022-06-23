import * as http from "http";

const options = {
  hostname: '10.25.0.249',
  port: 5000,
  path: '/api/securities',
  method: 'GET'
}

const req = http.request(options, res => {
  console.log(`code: ${res.statusCode}`);

  res.on('data', d => {
    console.log(d)
  })
})

req.on('error', err => {
  console.error(err)
})

req.end();
