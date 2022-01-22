const express = require('express')
const app = express()
const port = 3000
const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

  let mailOptions = {
    from: "abhijeet.kadance.96@gmail.com",
    to:  "abhijeet.1996@gmail.com",
    subject: 'Nodemailer Test',
    text: 'Hi from your nodemailer project'
  };
 
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

app.listen(port, () => {
  console.log(`nodemailer is listening at http://localhost:${port}`)
})