const Discord = require('discord.js');
const client = new Discord.Client();
var prefixe = ('/');

client.login('NTI4MzQ3MTk5NDQ5MzMzNzgz.Dwg9Zg.M7BmZIm7XDb4LdlEYUj_7PP5BKI');

client.on('message', msg => {
    if (msg.content === prefixe + 'help')
  msg.channel.sendMessage('/help pour voir ce menu \n !play + url ou nom de musique pour lancer un son \n !leave pour enlever le bot ryhtm \n !stop pour mettre en pause la musique \n pour collab ou autre allez voir secu ou alnis ');
    console.log('aide demandée');
});

client.on('message', msg => {
    if (msg.content === prefixe + 'salut tom')
    msg.channel.sendMessage('Salut , un service ?');
    console.log('un fdp a parlé')
});