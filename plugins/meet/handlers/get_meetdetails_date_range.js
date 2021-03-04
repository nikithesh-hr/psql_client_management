"use strict";

const Boom = require("@hapi/boom");
 

module.exports = async (request, h) => {
  
 try {
        const startdate = new  Date(request.params.start_date);
        const endate = new  Date(request.params.end_date);
        const meetdetail = await client.query("SELECT date_of_meet FROM meet WHERE startdate>= $1  AND endate<=$2", [startdate,endate]); 

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
