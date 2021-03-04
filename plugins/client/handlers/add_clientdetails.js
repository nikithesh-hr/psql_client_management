"use strict";

const Boom = require("@hapi/boom");
 

module.exports = async (request, h) => {
  const payload = request.payload;
  const {client_name, adress, client_contact_number, strength_of_students, status, remarks, point_of_contact_client_id, syllabus, email, website, date_of_meeting, message, follow_up_person } = payload;

  try {
   
    const clientdetail = await client.query("INSERT INTO clients (client_name, adress,client_contact_number, strength_of_students, status, remarks, point_of_contact_client_id, syllabus, email, website, date_of_meeting, message, follow_up_person) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
       [client_name, adress, client_contact_number, strength_of_students, status, remarks, point_of_contact_client_id, syllabus, email, website, date_of_meeting, message, follow_up_person]);

    
    return {
      statusCode: 201,
      message: `clientdetails added`,
      data: {
        clientdetail,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
/*

.save() perform internally as either INSERT or UPDATE object to db, while .objects.create() perform only INSERT object to db.

Model.save() perform ....

UPDATE → If the object’s primary key attribute is set to a value that evaluates to True

INSERT → If the object’s primary key attribute is not set or if the UPDATE didn’t update anything (e.g. if primary key is set to a value that doesn’t exist in the database).
*/
