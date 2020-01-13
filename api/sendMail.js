const nodemailer = require('nodemailer');

module.exports = (req, res) => {
  const { body } = req
  const transport = {
    host: 'smtp.strato.com', 
    port: 465,
    auth: {
      user: 'hello@7io.net',
      pass:  'nk066RF7@5a#',
    },
  };
  
  const transporter = nodemailer.createTransport(transport);
  transporter.verify(function(error, success) {
    if (error) {
      res.send(error);
    } else {
        const {firstName, lastName, email, phoneNumber, companyName, message} = body;
        const content = `
        firstname: ${firstName} \n
        lastName: ${lastName} \n
        phoneNumber: ${phoneNumber} \n
        email: ${email} \n
        message: ${message} \n
        companyName: ${companyName}`;

        const mail = {
            from: `${firstName} ${lastName}`,
            to: 'hello@7io.net',
            subject: '7io CONTACTFORM',
            cc: ['hello@wevisualize.it', 'hello@clevercode.nl'],
            text: content,
        };

        transporter.sendMail(mail, (err, data) => {
          if (err) {
            res.end('Email not sent.');
          }
          else {
            res.end('Email succesfully sent!');
          }
      });
  }
  });
}
