"use strict";

const Boom = require("@hapi/boom");
const Meetdetails = require("../schemas/meetdetails");
module.exports = async (request, h) => {
 
  const { params } = request;
  const id = params.id;

  try {

    const meetdetail =  await client.query("UPDATE users SET visibility = false WHERE id = $1",[id]);

    return {
      statusCode: 204,
      message: "meetdetail removed",
      data: {
        meetdetail,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
