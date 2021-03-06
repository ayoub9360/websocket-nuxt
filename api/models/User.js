// Import dependencies
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// Create schema
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.plugin(uniqueValidator)

// Export model
module.exports = mongoose.model('User', userSchema)
