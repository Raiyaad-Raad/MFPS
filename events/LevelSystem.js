const prefix = require('../config.json');
const fs = require('fs');
const xpfile = require('./xp.json');
const { Client, MessageEmbed, Messsage} = require('discord.js');
const client = require('discord.js');

Client.on("messageCreate" ,function(message) {
    if(message.author.Client) return;
    var addXP = Math.floor(Math.random() * 10); //when i type addXP it will randomly choose a number between 1-10   [  Math.floor(Math.random() * 10)  ]
// lvl 1 statics
    if(!xpfile[message.author.id]) {
        xpfile[message.author.id] = {
           xp: 0,
           level: 1,
           reqxp: 100
        }
// catch errors
       fs.writeFile("./xp.json",JSON.stringify(xpfile),function(err){ 
        if(err) console.log(err)
       })
    }

    xpfile[message.author.id].xp += addXP

    if(xpfile[message.author.id].xp > xpfile[message.author.id].reqxp){
        xpfile[message.author.id].xp -= xpfile[message.author.id].reqxp // it will subtrsct xp whenever u pass a lvl
        xpfile[message.author.id].reqxp *= 2 // XP you need to increase if level 1 is 100 xp so lvl 2 will 200 xp (multiplied by 2 [   .reqxp *= 2  ])
        xpfile[message.author.id].reqxp = Math.floor(xpfile[message.author.id].reqxp) // XP Round
        xpfile[message.author.id].level += 1 // it add 1 level when u level up

// this code will send (" you are now level [your lvl]!") then it will delete it after 10 seconds        
        message.reply("You Are Now Level **"+xpfile[message.author.id].level+"**!").then(msg => {
            setTimeout(function() {
            msg.delete()
            }, 10000)
            }) 

    }
// catch errors
    fs.writeFile("./xp.json",JSON.stringify(xpfile),function(err){
        if(err) console/log(err)
    })

    //if someone typed in chat =level it will make a embed 
    if(message.content.startsWith(`${prefix}level`)){
        let user = message.mentions.users.first() || message.author

        let embed = new MessageEmbed()
        .setTitle("Level Card")
        .setColor("GREEN")
        .addField("Level: ",xpfile[user.id].level)
        .addField("XP: ", xpfile[user.id].xp+"/"+xpfile[user.id].reqxp)
        .addField("XP Required: ",xpfile[user.id].reqxp)
        message.channel.send({
            embeds: [embed]
        })
    }
})   