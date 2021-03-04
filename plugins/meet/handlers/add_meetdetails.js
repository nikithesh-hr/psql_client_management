"use strict";

const Boom = require("@hapi/boom");
const Meetdetails = require("../schemas/meetdetails");

module.exports = async (request, h) => {
  const {payload } = request;
 
  const { date_of_meet, place_of_meet, remarks, status  } = payload;
                                        
   
 try {
    
    const meetdetail = await client.query("INSERT INTO clients ( date_of_meet, place_of_meet, remarks, status) VALUES ($1, $2, $3, $4) RETURNING *",
    [date_of_meet, place_of_meet, remarks, status]);


return {
      statusCode: 201,
      message: `meetdetails added`,
      data: {
        meetdetail,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
