const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "&";

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame('On esta el meu cul?');
});

client.on("message", async message => {
  if(message.author.bot) return;
  
  if(message.content.indexOf(prefix) !== 0) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
  
  if(command === "purge") {
    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
  if(command === "fuck") {
    message.channel.send('https://78.media.tumblr.com/f1ace6e731fbfc240d89690911dd2d9f/tumblr_n8uqbrSpFZ1tp5eoko4_500.gif');
  }
  if(command === "help") {
    message.channel.send('Uhm... HAVE THIS LINK :> https://github.com/m1n6m1/locure');
  }
});


// Non-prefix responds
client.on("message", (message) => {
  if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
});

const responseObject = {
  "ayy": "Ayy, lmao!",
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
  "reiji": "yoroshiku machocho",
  "a": "aaaaaaaaaaaaaaaa",
  };

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);