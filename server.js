"use strict";
const express = require("express");
const ParseServer = require("parse-server").ParseServer;
const path = require("path");

const app = express();

const port = process.env.PORT || 1337;
const api = new ParseServer({
  appId: process.env.APP_ID || "myAppId",
  masterKey: process.env.MASTER_KEY || "myMasterKey",
  databaseURI: process.env.MONGODB_URI || "mongodb://localhost:27017/dev",
  port: port,
  cloud: path.join(__dirname, "cloud/main.js")
});

app.use(express.static(path.join(__dirname, "public")));
app.use("/parse", api);

const httpServer = require("http").createServer(app);
httpServer.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
ParseServer.createLiveQueryServer(httpServer);
