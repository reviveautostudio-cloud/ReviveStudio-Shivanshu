const contactModel = require("../Model/contact.model");
const nodemailer = require("nodemailer");

// Util: Basic email format checker
const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

// Util: Basic phone format checker (10-15 digits)
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

    res.status(200).json({ msg: "Contact saved. Email will be sent shortly.", contactUser });

    // Nodemailer Setup -> Async Email Sending for better performance (As you said it takes 8 sec)
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.MY_EMAIL, 
        pass: process.env.MY_PASS, 
      },
    });

    const mailOptions = {
      from:email,
      to: "reviveautostudio@gmail.com",
      subject: "Contact Form Received",
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

    transporter.sendMail(mailOptions).catch((err) => {
      console.error("Email sending failed:", err);
    });

    // Response
    // res.status(200).json({ msg: "Contact saved and email sent.", contactUser });

  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { insertUser };
