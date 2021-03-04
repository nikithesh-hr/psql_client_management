"use strict";

const Boom = require("@hapi/boom");
 
 module.exports = async (request, h) => {
 
  const { params } = request;
  const id = params.date_of_meet;

  try {
    const meetdetail = await client.query("SELECT date_of_meet FROM meet WHERE id = $1", [id]); 

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
 