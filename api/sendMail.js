
var nodemailer = require('nodemailer');
const creds = require('../config');

module.exports = async (req, res) => {
    const { body } = req
    var transport = {
      host: 'smtp.strato.com', // Don’t forget to replace with the SMTP host of your provider
      port: 465,
      auth: {
        user: creds.USER,
        pass: creds.PASS
      }
    }
    
    var transporter =  nodemailer.createTransport(transport)
    
    await transporter.verify((error, success) => {
      if (error) {
        res.end(error);
      } else {
        res.end('Server is ready to take messages');
      }
    });
    
    res.end(`Hello ${body.name}, you just parsed the request body!`)
  }