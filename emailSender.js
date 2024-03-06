const nodemailer = require('nodemailer');

// Configurer le transporteur SMTP
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fadelmbacke9@gmail.com',
    pass: 'F.samb10'
  }
});

// Définir les options de l'e-mail
let mailOptions = {
  from: 'fadelmbacke9@gmail.com',
  to: 'mouhamadou.fms@gmail.com',
  subject: 'Test d\'envoi d\'e-mail depuis Node.js',
  text: 'Bonjour, ceci est un e-mail de test envoyé depuis Node.js.'
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.error("Erreur lors de l'envoi de l'e-mail:", error);
  } else {
    console.log('Email envoyé:', info.response);
  }
})