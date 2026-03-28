const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contactController');
const { validateContact } = require('../middleware/validateContact');

// POST /api/contact
router.post('/', validateContact, sendContactEmail);

module.exports = router;
