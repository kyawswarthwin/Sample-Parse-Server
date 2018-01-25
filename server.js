'use strict';
const express = require('express');
const ParseServer = require('parse-server').ParseServer;

const app = express();

const port = process.env.PORT || 1337;
const api = new ParseServer({
  appId: process.env.APP_ID || 'myAppId',
  masterKey: process.env.MASTER_KEY || 'myMasterKey',
  databaseURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/dev',
  port: port
});

app.use('/parse', api);

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
