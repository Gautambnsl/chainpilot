const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',  // You can change this to other email services
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// API endpoint to receive form data and send email
app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = req.body;
    
    // Basic validation
    if (!formData) {
      return res.status(400).json({ success: false, message: 'No form data provided' });
    }
    
    // Format the form data for email
    const formFields = Object.entries(formData)
      .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
      .join('<br>');
      
    // Configure email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL, // You can also get this from the request if needed
      subject: 'New Form Submission',
      html: `
        <h2>New Form Submission</h2>
        <p>You have received a new form submission with the following details:</p>
        <div>
        ${formFields}
        </div>
      `
    };
    
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    
    res.status(200).json({
      success: true,
      message: 'Form data received and email sent successfully',
      messageId: info.messageId
    });
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing your request',
      error: error.message
    });
  }
});

// Simple health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});