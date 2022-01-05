// Import dependencies
const express = require('express')
const router = express.Router()

// Import controller
const exempleController = require('../controllers/exemple')

// Set routes
router.delete('/:id', exempleController.getOneExemple)
router.post('/', exempleController.getOneExemple)
router.put('/:id', exempleController.getOneExemple)
router.get('/:id', exempleController.getOneExemple)
router.get('/', exempleController.getOneExemple)

// Export routes
module.exports = router
