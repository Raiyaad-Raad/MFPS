const client = require("../index");
const premiumSchema = require("../models/permium");
const { MessageEmbed } = require("discord.js");
const embed = new MessageEmbed()
.setColor("RED")
.setDescription("I do not have permission to execute this command") 
const resp = new MessageEmbed()
.setColor("RED")
.setDescription("You do not have permission to execute this command") 

client.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(client.config.prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;

    if(command.premium && !await premiumSchema.findOne({ User: message.author.id })) return message.channel.send(
        "You don't have User Premium you need to upgrade to UserPremium in order to use this command"
    ).then(msg => {
        setTimeout(function() {
        msg.delete()
        }, 5000)
        }) 
    
       if(!message.member.permissions.has(command.permission || [])) return message.channel.send({
        embeds: [resp]
    }).then(msg => {
        setTimeout(function() {
        msg.delete()
        }, 5000)
        }) 
    
    if(!message.guild.me.permissions.has(command.botpermission || [])) return message.channel.send({
        embeds: [embed] 
    }).then(msg => {
        setTimeout(function() {
        msg.delete()
        }, 5000)
        }) 

const modlogsSchema = require('../models/modlogs');
client.modlogs = async function({ Member, Action, Reason}){
    const data = await modlogsSchema.findOne({ Guild: message.guild.id });
    if(!data) return;

    const channel = message.guild.channels.cache.get(data.Channel);
    const logsEmbed = new MessageEmbed()
    .setColor("RED")
    .setTitle('MODLOGS MASTER')
    .setDescription('Moderataing Detected!')
    .addFields(
        { name: "Target:", value: `${Member.user.tag}`},
        { name: "Target user Id:", value: `${Member.id}`},
        { name: "Reason:", value: `${Reason || 'No Reason Specified!'}`},
        { name: "Action Took:", value: `${Action}`},
    )
    .setFooter('Modlogs')
    .setTimestamp()

    channel.send({
        embeds: [logsEmbed]
    });
}


    await command.run(client, message, args);
});
