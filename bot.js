const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '&fuck') {
    	message.channel.send('https://78.media.tumblr.com/f1ace6e731fbfc240d89690911dd2d9f/tumblr_n8uqbrSpFZ1tp5eoko4_500.gif');
  	}
});

client.on('message', message => {
    if (message.content === '&kumiko') {
    	message.channel.send(var randomArray = ['https://i.imgur.com/ymG5bnZ.jpg','https://www.picstatio.com/large/fe36b4/Kumiko-Oumae-Reina-Kousaka-anime-girls.jpg', 'I died for kumiko btw'];);
  	}
});

client.on('message', message => {
    if (message.content === '&help') {
    	message.reply('There is no help sorry :<');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
