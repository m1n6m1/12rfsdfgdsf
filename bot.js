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
  "reiji": "yoroshiku machocho",
  "a": "aaaaaaaaaaaaaaaa",
  };

// Testing: Custom cmds
// Create an event listener for messages
client.on('message', message => {
  if (message.author.bot === true) {
      return null;
  }
  let checkMessage = message.content.split(" ");
  if (checkMessage[0] === '~createcommand') {
      try {
          let commandName = checkMessage[1];
          if (commandName === '~commands' || commandName === '~help') {
              message.channel.send("You can't do that.");
              return null;
          }
          let commandText = message.content.split('|', 2);
          if (commandText[1] === undefined) {
              message.channel.send("You forgot to use '|'");
              return null;
          }
          if (commandName.charAt(0) === '~') {
              checkExistingCommand(commandText[1], commandName);
          } else {
              checkExistingCommand(commandText[1], '~' + commandName);
          }
          message.channel.send("Command " + commandName + " has been created.");

      } catch (error) {
          console.log("Error\nAuthor: " + message.author.username + "\nMessage: " + message.content);
      }
  }

  fs.readFile('./commands/commands.txt', 'utf8', function (err, f) {
      let com = f.toString().split(";");
      for (i = 0; i < com.length; i++) {
          if (message.content === com[i]) {
              if (com[i] === "~commands") {
                  message.author.send(com);
                  break;
              }
              if (com[i] === "~help") {
                  message.channel.send("How to create commands:\n~createcommand ~NameOfCommand | Type whatever you want here");
                  break;
              }
              let command = "./commands/" + com[i] + ".txt";
              fs.readFile(command, 'utf8', function (err, f) {
                  try {
                      let com2 = f.toString().split(";");
                      let num = random.integer(0, com2.length - 1);
                      message.channel.send(com2[Math.floor(num)]);
                  }
                  catch (err) {
                      console.error("", err);
                  }
              });
          }
      }
  });

});

/**
* @method checkExistingCommand
* @param {String} commandText
* @param {String} commandName
*/
function checkExistingCommand(commandText, commandName) {
  let commandExists = false;
  fs.readFile('./commands/commands.txt', 'utf8', function (err, f) {
      let findCommands = f.toString().split(";");
      for (i = 0; i < findCommands.length; i++) {
          if (commandName === findCommands[i]) {
              commandExists = true;
          }
      }
      if (commandExists === true) {
          createCommand(commandText, true, commandName);
      } else if (commandExists === false) {
          createCommand(commandText, false, commandName);
      }
  });

}

/**
* @method createCommand
* @param {String} commandText
* @param {Boolean} commandExists
* @param {String} commandName
*/
function createCommand(commandText, commandExists, commandName) {
  let fileName = "./commands/" + commandName + ".txt";
  if (commandExists === true) {
      fs.writeFile(fileName, commandText, function (err) {
          if (err) {
              return console.error(err);
          }
      });
  } else if (commandExists === false) {
      fs.appendFile('./commands/commands.txt', commandName + ';', (err) => {
          if (err) throw err;
      });

      fs.writeFile(fileName, commandText.trim(), function (err) {
          if (err) {
              return console.error(err);
          }
      });
  }
}



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
