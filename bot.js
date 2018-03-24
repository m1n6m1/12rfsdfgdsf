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
  "kys": "https://imgur.com/TEqfNbQ",
  "best boi": 'sesil',
  "jav": "My Mother Saw Everything! An 8 Hour Special This Mother Accidentally Caught Her Son Masturbating, And Although She Knew It Was Wrong, She Was An Overprotective Mom Who Felt That She Had To Help, And Ended Up Allowing Him To Insert His Cock Into Her Willing Pussy...",
  "100tifico": "pa k kieres saber eso jaja salu2",
  "debiruman": "Are wa dare da dare da dare da Are wa debiru Debiruman Debiruman",
  "joel becoming" : "a dj",
	"hitler" : "mechahitler",
	"stalin" : "mechastalin",
	"asuka": "puta",
"infierno": "dakara hashirou ze hashirou ze" +
"kikasete　omae no koe" +
"dare yori mo subete o fukaku fukaku kanjitai" +
"tomaranai tomaranai" +
"hitori ja nai" +
"(Get Our Life!) omae no omoi 　 (Get Our Dream!) mune ni daite" +
"hashiri tsudzukeru",
"ranmaru": "Banana is PERFECT!",
"capi": "https://gyazo.com/38d8417d1c1ef4cdabbd5b1c7bb72a45",
};


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
