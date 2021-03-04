"use strict";

const Boom = require("@hapi/boom");
 
module.exports = async (request, h) => {
  try {
    const clientdetails =  await client.query("SELECT * FROM clients ORDER BY id ASC");

    return {
      statusCode: 200,
      message: `client details`,
      data: {
        clientdetails,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
