"use strict";

 const Joi = require('joi');
module.exports = {
  params: Joi.object({
    date_of_meet: Joi.date().iso().required()
   }),
};
