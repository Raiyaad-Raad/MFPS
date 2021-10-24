const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require("ms");
const member = new MessageEmbed()
.setColor("RED")
.setDescription("No member specified")
const reason = new MessageEmbed()
.setColor("RED")
.setDescription("No Reason Specified To Ban A Member You Need To Specifiy Reason For TempBan")
const te = new MessageEmbed()
.setColor("RED")
.setDescription("No time specified specifily a time")
const hp = new MessageEmbed()
.setColor("RED")
.setDescription("Error")
.addFields(
    { name: 'If you trying to ban yourself', value: 'You cannot ban yourself', inline: true },
    { name: 'If you tring to ban a higher role', value: 'You cannot ban a higher role user'}
)
.setFooter("Error Occured")
.setTimestamp()

module.exports = {
    name: 'tempban',
    description: 'ban someone',
    permission: ["BAN_MEMBERS"],
    botpermission: ["BAN_MEMBERS"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
         message.delete()
        const member = message.mentions.members.first()
        if(!member) return message.channel.send({
            embeds: [member]
        }).then(msg => {
            setTimeout(function() {
            msg.delete()
            }, 15000)
            }) 

        const reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send({
            embeds: [reason]
        }).then(msg => {
            setTimeout(function() {
            msg.delete()
            }, 15000)
            }) 

        const time = args[1]
        if(!time) return message.channel.send({
            embeds: [te]
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
            embeds: [hp]
        }).then(msg => {
            setTimeout(function() {
            msg.delete()
            }, 15000)
            }) 


        member.send({embeds: [new MessageEmbed()
            .setColor("RED")
            .setAuthor("TEMPBAN MASTER")
            .setDescription(`You have been banned from **${message.guild.name}** for: \`${reason}\` duration: ${time}`)]})
            .catch(( ) => { console.log(`The client could not send the ban notice to ${member}.`)});

            client.modlogs(
                {
                    Member: member,
                    Action: "TEMPBAN",
                    Reason: `${reason} and banned for ${time}`,
                },
                 message
            );

        member.ban({reason})
        const resp = new MessageEmbed()
        .setColor("GREEN")
        .setTitle("TEMP BAN MASTER")
        .setDescription("Succesfully Banned")
        .addFields(
            { name: `Banned user: <@${member.user.id}>`, value: `for ${reason}`},
            { name: `Banned user id: ${member.user.id}`, value: 'Its the banned user id if you need it'}
        )
        message.channel.send({
            embeds: [resp]
        }).then(msg => {
            setTimeout(function() {
            msg.delete()
            }, 15000)
            }) 

            setTimeout(async () => {
            await message.guild.members.unban(member)
            message.channel.send(`<@${member.user.id}> Has Been Unbanned After ${time} Of Ban.`)
        }, ms(time))
    }
}