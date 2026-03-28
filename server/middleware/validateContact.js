// ─── Contact Form Validation Middleware ───────────────────────────────────────
exports.validateContact = (req, res, next) => {
  const { name, email, inquiry, message } = req.body;
  const errors = [];

  // Name
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters.');
  }
  if (name && name.trim().length > 100) {
    errors.push('Name must be under 100 characters.');
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('A valid email address is required.');
  }

  // Inquiry type
  const validInquiries = [
    'General Inquiry',
    'Course Enrollment',
    'Course Consultation',
    'Business Partnership',
    'Feedback',
  ];
  if (!inquiry || !validInquiries.includes(inquiry)) {
    errors.push('Please select a valid inquiry type.');
  }

  // Message
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters.');
  }
  if (message && message.trim().length > 2000) {
    errors.push('Message must be under 2000 characters.');
  }

  // Phone (optional but validate format if present)
  if (req.body.phone) {
    const phoneRegex = /^[+\d\s\-()]{7,20}$/;
    if (!phoneRegex.test(req.body.phone)) {
      errors.push('Invalid phone number format.');
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  // Sanitize inputs
  req.body.name = name.trim().substring(0, 100);
  req.body.email = email.trim().toLowerCase();
  req.body.message = message.trim().substring(0, 2000);
  req.body.phone = req.body.phone ? req.body.phone.trim() : '';

  next();
};
