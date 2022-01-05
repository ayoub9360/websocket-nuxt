/* eslint-disable no-unused-vars */

// Require models
const Exemple = require('../models/exemple')

// Create methods
exports.getOneExemple = (req, res, next) => {
  // Add methods here
  res.json({
    message: 'Get one exemple',
  })
}
