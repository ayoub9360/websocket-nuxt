// Import dependencies
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// Create schema
const thingSchema = mongoose.Schema({
  // title: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
})

// If we want to add a unique validator
thingSchema.plugin(uniqueValidator)

// Export model
module.exports = mongoose.model('Thing', thingSchema)
