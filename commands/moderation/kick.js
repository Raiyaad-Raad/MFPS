const { Client, Message, MessageEmbed } = require('discord.js');
const t = new MessageEmbed()
.setColor("RED")
.setDescription("Mention The Member")
const e = new MessageEmbed()
.setColor("RED")
.setDescription("You can't kick user with superior role or you can't kick yourself")
const r = new MessageEmbed()
.setColor("RED")
.setDescription("Specify a reason for kick")


module.exports = {
    name: 'kick',
    description: 'kick a guy XD',
    aliases: ["getout"],
    permission: ["KICK_MEMBERS"],
    botpermission: ["KICK_MEMBERS"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        message.delete()
        const member = message.mentions.members.first()
        if(!member) return message.channel.send({
            embeds: [t]
        }).then(msg => {
            setTimeout(function() {
            msg.delete()
            }, 15000)
            }) 
        const reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send({
            embeds: [r]
        }).then(msg => {
            setTimeout(function() {
            msg.delete()
            }, 15000)
            }) 

        if (
            message.member.roles.highest.position <=
            member.roles.highest.position
        )
        return message.channel.send({
            embeds: [e]
        }).then(msg => {
            setTimeout(function() {
            msg.delete()
            }, 15000)
            }) 

        member.send({embeds: [new MessageEmbed()
            .setColor("RED")
            .setAuthor("KICK MASTER")
            .setDescription(`You have been kick from **${message.guild.name}** for: \`${reason}`)]})
            .catch(( ) => { console.log(`The client could not send the ban notice to ${member}.`)});
            client.modlogs(
                {
                    Member: member,
                    Action: "KICK",
                    Reason: reason,
                },
                 message
            );
       // member.kick()

        const resp = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`Succefully Kicked ${member}`)
        message.channel.send({
            embeds: [resp]
        }).then(msg => {
            setTimeout(function() {
            msg.delete()
            }, 15000)
            }) 
    }
}