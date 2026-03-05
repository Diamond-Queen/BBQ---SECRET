import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, item, quantity, date, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !item || !quantity || !date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or 'yahoo', 'outlook', etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      replyTo: email,
      subject: `🍖 New BBQ Order from ${name}`,
      html: `
        <h2>New BBQ Order!</h2>
        <h3>Customer Information:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Order Details:</h3>
        <p><strong>Item:</strong> ${item}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Pickup/Delivery Date:</strong> ${date}</p>
        
        ${message ? `
        <h3>Special Requests:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        ` : ''}
        
        <hr>
        <p><em>This was sent from the Big Rob's Rib Shack order form</em></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Order email sent successfully' });
  } catch (error) {
    console.error('Error sending order email:', error);
    return res.status(500).json({ error: 'Failed to send order email', details: error.message });
  }
}
