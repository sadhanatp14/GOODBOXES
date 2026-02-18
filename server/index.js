const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5003;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'GOODBOXES backend is running' });
});

// Enquiry form submission
app.post('/api/enquiry', async (req, res) => {
  try {
    const { FullName, Address, City, Zip_Code, PhoneNo, Email, Comments } = req.body;

    if (!FullName || !Email || !Comments) {
      return res.status(400).json({ error: 'Name, Email, and Comments are required.' });
    }

    const htmlBody = `
      <table>
        <tr><td>Name</td><td> : </td><td>${FullName}</td></tr>
        <tr><td>Address</td><td> : </td><td>${Address || 'N/A'}</td></tr>
        <tr><td>City</td><td> : </td><td>${City || 'N/A'}</td></tr>
        <tr><td>Zip Code</td><td> : </td><td>${Zip_Code || 'N/A'}</td></tr>
        <tr><td>Phone Number</td><td> : </td><td>${PhoneNo || 'N/A'}</td></tr>
        <tr><td>Email ID</td><td> : </td><td>${Email}</td></tr>
        <tr><td>Comments</td><td> : </td><td>${Comments}</td></tr>
      </table>
    `;

    const transporter = nodemailer.createTransport({
      host: 'mail.goodboxes.in',
      port: 25,
      secure: false,
      auth: {
        user: 'noreply@goodboxes.in',
        pass: 'D63}_lH+Yb(v',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"${FullName}" <noreply@goodboxes.in>`,
      to: 'goodboxes@gmail.com',
      replyTo: `"${FullName}" <${Email}>`,
      subject: 'Goodboxes.in contact form',
      html: htmlBody,
      priority: 'high',
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Thank you for your message. It has been sent.' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ error: 'There was an error trying to send your message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`GOODBOXES backend running on http://localhost:${PORT}`);
});
