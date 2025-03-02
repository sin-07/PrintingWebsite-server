const express = require('express');
const { userContactForm } = require('../controllers/userControllers');
const router = express.Router();

router.post('/contact',userContactForm)

module.exports =  router ;