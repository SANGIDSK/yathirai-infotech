const nodemailer = require('nodemailer');

// ─── Email Transporter ────────────────────────────────────────────────────────
// Configure this in your .env file. See .env.example for required variables.
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// ─── Send Contact Email ───────────────────────────────────────────────────────
exports.sendContactEmail = async (req, res) => {
  const { name, email, phone, inquiry, message } = req.body;

  try {
    const transporter = createTransporter();

    // Email to Yathirai Infotech
    const mailOptions = {
      from: `"Yathirai Website" <${process.env.SMTP_USER}>`,
      to: 'info@yathirai.in',
      replyTo: email,
      subject: `[${inquiry}] New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a0033; color: #ffffff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6a0dad, #cc44cc); padding: 30px 40px;">
            <h1 style="margin: 0; font-size: 24px; letter-spacing: 2px;">YATHIRAI INFOTECH</h1>
            <p style="margin: 8px 0 0; opacity: 0.8; font-size: 14px;">New Website Inquiry</p>
          </div>
          <div style="padding: 36px 40px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(159,63,255,0.2); color: #bf5fff; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; width: 35%;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(159,63,255,0.2); font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(159,63,255,0.2); color: #bf5fff; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(159,63,255,0.2); font-size: 15px;"><a href="mailto:${email}" style="color: #bf5fff;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(159,63,255,0.2); color: #bf5fff; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(159,63,255,0.2); font-size: 15px;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(159,63,255,0.2); color: #bf5fff; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Inquiry Type</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(159,63,255,0.2); font-size: 15px;">${inquiry}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #bf5fff; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px;">Message</p>
              <div style="background: rgba(159,63,255,0.1); border: 1px solid rgba(159,63,255,0.2); border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
          <div style="padding: 20px 40px; background: rgba(0,0,0,0.3); font-size: 12px; color: rgba(255,255,255,0.4); text-align: center;">
            Sent from Yathirai Infotech website • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
          </div>
        </div>
      `,
    };

    // Auto-reply to the user
    const autoReplyOptions = {
      from: `"Yathirai Infotech" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We received your message — Yathirai Infotech`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a0033; color: #ffffff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6a0dad, #cc44cc); padding: 30px 40px;">
            <h1 style="margin: 0; font-size: 24px; letter-spacing: 2px;">YATHIRAI INFOTECH</h1>
            <p style="margin: 8px 0 0; opacity: 0.8; font-size: 14px;">Message Received ✅</p>
          </div>
          <div style="padding: 36px 40px;">
            <p style="font-size: 16px; line-height: 1.7;">Hi <strong>${name}</strong>,</p>
            <p style="font-size: 15px; line-height: 1.7; color: rgba(255,255,255,0.8);">
              Thank you for reaching out to us! We've received your inquiry regarding <strong style="color: #bf5fff;">${inquiry}</strong> and our team will get back to you within <strong>24–48 hours</strong>.
            </p>
            <p style="font-size: 15px; line-height: 1.7; color: rgba(255,255,255,0.8);">
              In the meantime, feel free to explore our courses or follow us on social media for updates.
            </p>
            <div style="margin-top: 28px; padding: 20px; background: rgba(159,63,255,0.1); border-radius: 8px; border: 1px solid rgba(159,63,255,0.2);">
              <p style="margin: 0 0 8px; color: #bf5fff; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Contact Us Directly</p>
              <p style="margin: 0; font-size: 14px;">📧 info@yathirai.in</p>
              <p style="margin: 4px 0 0; font-size: 14px;">📍 Chennai, Tamil Nadu, India</p>
            </div>
          </div>
          <div style="padding: 20px 40px; background: rgba(0,0,0,0.3); font-size: 12px; color: rgba(255,255,255,0.4); text-align: center;">
            © 2025 Yathirai Infotech. All rights reserved.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! We will get back to you soon.',
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try emailing us directly at info@yathirai.in',
    });
  }
};
