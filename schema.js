const Joi = require("joi");
const {model}=require("mongoose");
const listingSchema = Joi.object({
 listing: Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  // image: Joi.object({
  //   filename: Joi.string().optional(),
  //   url: Joi.string().uri().required()
  // }).required(),
  price: Joi.number().required(),
  location: Joi.string().required(),
  country: Joi.string().required(),
}).required(),
});

const reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});

module.exports = { listingSchema, reviewSchema };
