"use strict";

const Boom = require("@hapi/boom");
 

module.exports = async (request, h) => {
  const payload = request.payload;
  const {client_name, adress, client_contact_number, strength_of_students, status, remarks, point_of_contact_client_id, syllabus, email, website, date_of_meeting, message, follow_up_person } = payload;
 
   
  const { params } = request;
  const id = params.id;
  try {
    const clientdetails = await client.query("UPDATE users SET first_name =$1, second_name =$2, user_name =$3, password=$4, email=$5, permission=$6  WHERE id = $7",
    [client_name, adress, client_contact_number, strength_of_students, status, remarks, point_of_contact_client_id, syllabus, email, website, date_of_meeting, message, follow_up_person, id]);

    console.log(clientdetails,"clientdetails");
    

if (!clientdetails) {
      return Boom.badRequest("invalid clientdetails id");
    }

    return {
      statusCode: 204,
      message: "clientdetails updated!",
      clientdetails,
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
