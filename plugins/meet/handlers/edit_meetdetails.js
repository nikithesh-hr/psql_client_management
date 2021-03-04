"use strict";

const Boom = require("@hapi/boom");
 
module.exports = async (request, h) => {
 
  const {payload } = request;
 
  const {date_of_meet, place_of_meet, remarks, status} = payload;
   
  const { params } = request;
  const id = params.id;

  try {
    const meetdetail = await client.query("UPDATE users SET date_of_meet =$1, place_of_meet =$2, remarks =$3, status=$4  WHERE id = $5",
    [date_of_meet, place_of_meet, remarks, status, id]);



    if (!meetdetail) {
      return Boom.badRequest("invalid meetdetail id");
    }

    return {
      statusCode: 204,
      message: "meetdetail updated!",
      meetdetail,
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
