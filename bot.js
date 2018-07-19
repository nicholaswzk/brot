const botconfig = require("./botconfig.json");
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(botconfig.token);

const reply = {
    "no": "yes",
    "yes": "no",
    "hello": "annyeong",
    "semutanjing": "kau kotey",
    "ying": "**We are stronger together!**",
    "hanzo": "**Ryuuga wagateki wo kurau!**",
    "mercy": "**Heroes never die!**",
    "makoa": "**You challenge Makoa!?**",
    "sith": "Did you ever hear the tragedy of Darth Plagueis the Wise?"
};

const mentionArray = ["kau nak ape, ", "what do you want, ", "how may I help, ", "kau kotey, ", "nak gaduh ke pe, ", "diam lah, "];
const joinArray = ["Invite please!","Join in!","Full party?","Bojio!","Weh tak ajak.."];

let getRandomInt = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
};

let isCommand = (fl) => {
    let isCmd = false;
    if (fl.substring(0, 1) == "$") {
        isCmd = true;
    }
    return isCmd;
}

bot.on("ready", () => {
    console.log("bot is online");
});

bot.on("message", async (message) => {
    if (message.author.bot) return;
    let usr = message.author;
    let usrnm = usr.username;
    let sentence = message.content.split(/ (.+)/);
    let fl = sentence[0];
    let cmd = fl.substring(1);
    let msg = sentence[1];
    let choice = getRandomInt(0, mentionArray.length);

    if (isCommand(fl)) {
        if (reply[cmd]) {
           await message.channel.send(reply[cmd]);
        }
    } 
    else if (message.isMentioned(bot.user)) {
        await message.channel.send(mentionArray[choice] + usr.toString());
    }
});

// bot.on("presenceUpdate",async (oldMember, newMember) => {
//     let guildChannels = newMember.guild.channels;
//     if ((oldMember.presence.game !== newMember.presence.status)) {
//         if (newMember.presence.game !== null) {
//             if (newMember.presence.game.name != "Spotify") {
//                 guildChannels.find('name', 'semutanjing-nation').send("**" + newMember.user.username + "** is now playing **" + newMember.presence.game.name + "**"+"\n"+joinArray[getRandomInt(0, joinArray.length)]);
//             }
//         }
//     }
// });

