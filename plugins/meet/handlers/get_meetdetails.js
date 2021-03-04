"use strict";

const Boom = require("@hapi/boom");
 

module.exports = async (request, h) => {
  try {
    const meetdetail =  await client.query("SELECT * FROM meet ORDER BY id ASC");

    return {
      statusCode: 200,
      message: `meet details`,
      data: {
        meetdetail,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
