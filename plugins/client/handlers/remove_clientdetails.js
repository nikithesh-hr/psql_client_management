"use strict";

const Boom = require("@hapi/boom");
 

module.exports = async (request, h) => {
  const { params } = request;
  const id = params.id;

  try {
    const clientdetails =  await client.query("UPDATE users SET visibility = false WHERE id = $1",[id]);
   
    return {
      statusCode: 204,
      message: "clientdetails removed",
      data: {
        clientdetails,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
