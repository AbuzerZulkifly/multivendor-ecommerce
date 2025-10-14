const nodeMailer = require('nodemailer');

module.exports = async (email, subject, text) => {

  try {
    const transporter = nodeMailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }

    });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: subject,
      text: text
    })
  } catch (error) {
    console.log(error);
    
  }
}