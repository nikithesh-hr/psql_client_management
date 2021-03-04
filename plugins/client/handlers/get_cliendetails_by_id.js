
"use strict";

const Boom = require("@hapi/boom");
 
 
module.exports = async (request, h) => {
    const { params } = request;
    const id = params.id;


  try {
   
    const clientdetails = await client.query("SELECT * FROM clients WHERE id = $1", [id]);


    return {
      statusCode: 200,
      message: `client details by id`,
      data: {
        clientdetails,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
