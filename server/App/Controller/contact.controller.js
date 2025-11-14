const contactModel = require("../Model/contact.model");
const nodemailer = require("nodemailer");

// Utils
const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
const isValidPhone = (phone) => /^[0-9]{10,15}$/.test(phone);

const insertUser = async (req, res) => {
  try {
    const { name, phone, email, service, date, time, message } = req.body;

    // Validation
    if (!name || !phone || !email || !service || !date || !time || !message) {
      return res.status(400).json({ msg: "All fields are required." });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ msg: "Invalid email format." });
    }

    if (!isValidPhone(phone)) {
      return res.status(400).json({ msg: "Invalid phone number." });
    }

    // Save to DB
    const contactUser = new contactModel({
      name,
      phone,
      email,
      service,
      date,
      time,
      message,
    });

    await contactUser.save();

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASS,
      },
    });

    const mailOptions = {
      from: `"Revive AutoCare" <${process.env.MY_EMAIL}>`,
      to: "reviveautostudio@gmail.com",
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for contacting <strong>Revive</strong>. Here are your submitted details:</p>
        <ul>
          <li><strong>Service:</strong> ${service}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>We will get back to you shortly.</p>
        <p>Best Regards,<br/>Revive AutoCare Team</p>
      `,
    };

    // Wait for email sending to finish
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.response);
      return res.status(201).json({ 
        msg: "Message submitted successfully and email sent.",
        emailInfo: info.response,
        contactUser
      });
    } catch (err) {
      console.error("Error sending email:", err);
      return res.status(500).json({ 
        msg: "Message saved but failed to send email.",
        details: err.message,
        contactUser
      });
    }

  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { insertUser };
