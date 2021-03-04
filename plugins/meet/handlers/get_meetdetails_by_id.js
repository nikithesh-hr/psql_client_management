"use strict";

const Boom = require("@hapi/boom");
 



module.exports = async (request, h) => {
    
  const { params } = request;
  const id = params.id;

 
  try {
   
    const meetdetail = await client.query("SELECT * FROM meet WHERE id = $1", [id]); 

    return {
      statusCode: 200,
      message: `meet details by id`,
      data: {
        meetdetail,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
