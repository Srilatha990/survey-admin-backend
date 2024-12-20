const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

// Routes for surveys
router.post('/', surveyController.addSurvey);           // Create a survey
router.get('/', surveyController.getAllSurveys);       // Get all surveys
router.get('/:id', surveyController.getSurveyById);    // Get a survey by ID
router.put('/:id', surveyController.updateSurvey);     // Update a survey by ID
router.delete('/:id', surveyController.deleteSurvey);  // Delete a survey by ID

module.exports = router;