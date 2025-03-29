const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Health check endpoint
router.get('/health', apiController.healthCheck);

// Session reset endpoint
router.post('/reset-sessions', apiController.resetSessions);

// Form submission handler
router.post('/form/:path(*)', apiController.handleFormSubmission);

// Generic API route handler that captures all paths and methods
router.all('/:path(*)', apiController.handleApiRequest);

module.exports = router;