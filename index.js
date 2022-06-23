import net from 'net';

const client = new net.Socket();
try {

  client.connect('10.25.0.249:5000/api/securities', () => {
    console.log('Connected!');
  })
  client.on('data', (data) => {
    console.log(`Received: ${data}`);
    client.destroy();
  })
  client.on('close', () => {
    console.log('Connection closed');
  })
} catch (e) {
  console.log(e)
}
