"use strict";

const Glue = require("@hapi/glue");

const manifest = require("./manifest");

const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'clientmanage',
  password: 'nhr',
  port: 5432,
});



exports.deployment = async (start) => {
  try {
    const server = await Glue.compose(manifest, { relativeTo: __dirname });

    await server.initialize();

    if (!start) {
      return server;
    }

    await server.start();

    console.log(`Server started at ${server.info.uri}`);

    await  client.connect();

     

  } catch (e) {
    console.log(e);
  }
};

if (!module.parent) {
  exports.deployment(true);

  process.on("unhandledRejection", (err) => {
    throw err;
  });
}
