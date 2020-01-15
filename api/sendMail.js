const nodemailer = require('nodemailer');

module.exports = (req, res) => {
  const { body } = req
  const transport = {
    host: 'mail.7io.net', 
    port: 465,
    auth: {
      user: 'hello@7io.net',
      pass: 'nk066RF7@5a#',
      // user: process.env.APP_EMAIL,
      // pass: process.env.APP_EMAIL_PASSWORD,
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
            res.end('fail');
          }
          else {
            res.end('success');
          }
      });
  }
  });
}
