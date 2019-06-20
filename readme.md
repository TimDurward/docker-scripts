# Docker Utils

### Utility Functions for interacting with Docker

## Install
`npm i docker-utilities`

## How to use:

### Client
```js
// Default Client
const { Docker } = require('docker-utilities');
const client = new Docker().client();
```

```js
// Custom Docker Client
const { Docker } = require('docker-utilities');
const config = {
  host: '10.0.1.1',
  port: 2375,
  ca: [fs.readFileSync('ca.pem'), fs.readFileSync('intermediateCA.pem')],
  cert: fs.readFileSync('cert.pem'),
  key: fs.readFileSync('key.pem'),
  protocol: 'https',
  timeout: 60
};

const client = new Docker(config).client();
```


### Build
```js
// Build Docker Image with Name:Tag

const { Docker, Build } = require('docker-utilities');
const client = new Docker().client();
const build = new Build(client);

build
  .withTag({
    file: '/the/best/dir',
    name: 'coolname:1.0.0',
    stream: true
  })
  .then(success => console.log(succcess));
```
