const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

(function($) {
    $.rand = function(arg) {
        if ($.isArray(arg)) {
            return arg[$.rand(arg.length)];
        } else if (typeof arg == "number") {
            return Math.floor(Math.random() * arg);
        } else {
            return 4;  // chosen by fair dice roll
        }
    };
})(jQuery);

var items = ['https://www.picstatio.com/large/fe36b4/Kumiko-Oumae-Reina-Kousaka-anime-girls.jpg','https://i.imgur.com/ymG5bnZ.jpg'];
var item = jQuery.rand(items);

client.on('message', message => {
    if (message.content === '&fuck') {
    	message.channel.send('https://78.media.tumblr.com/f1ace6e731fbfc240d89690911dd2d9f/tumblr_n8uqbrSpFZ1tp5eoko4_500.gif');
  	}
});

client.on('message', message => {
    if (message.content === '&kumiko') {
    	message.channel.send(var item);
  	}
});

client.on('message', message => {
    if (message.content === '&help') {
    	message.reply('There is no help sorry :<');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
