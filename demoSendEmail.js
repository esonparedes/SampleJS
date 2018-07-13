var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.deltek.com',
    port: '25'
});

var mailOptions = {
    from: 'nodejs@deltek.com',
    to: 'jasonparedes@deltek.com',
    subject: 'Sending email using Node.js',
    html: '<b>ahooo ahoooo!</b>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});