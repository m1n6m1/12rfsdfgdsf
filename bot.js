const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";

client.on('ready', () => {
    console.log('I am ready!');
});

//client.on('ready', () => {
//  bot.user.setGame('I <3 Nax')
//})

client.on('message', message => {
    if (message.content.startsWith(prefix + 'fuck')) {
    	message.channel.send('https://78.media.tumblr.com/f1ace6e731fbfc240d89690911dd2d9f/tumblr_n8uqbrSpFZ1tp5eoko4_500.gif');
  	}
});


client.on('message', message => {
    if (message.content === '&help') {
    	message.reply('There is no help sorry :<');
  	}
});

// No prefix responds
client.on("message", (message) => {
  if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
});

const responseObject = {
  "ayy": "Ayy, lmao!",
  "wat": "Say what?",
  "lol": "roflmaotntpmp",
  "eba": "https://cdn.discordapp.com/attachments/427167187120160768/427174267210301451/magik.png",
  "nepe": "pene",
  "ur mom gay": "no you",
  "no u": "no u",
  "kys": "https://imgur.com/TEqfNbQ"
};


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
