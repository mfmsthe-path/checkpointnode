const fs = require('fs');

// Création du fichier welcome.txt avec le contenu "Hello Node"
fs.writeFileSync('welcome.txt', 'Hello Node');

// Lecture et affichage du contenu du fichier welcome.txt
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data);
