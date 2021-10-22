const { Client, Message, MessageEmbed } = require('discord.js');
const t = new MessageEmbed()
.setColor("RED")
.setTitle("ERROR")
.setDescription("No member sepcified")
.setFooter("Specify The Member")
.setTimestamp()
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
    name: 'ban',
    description: 'ban someone',
    permission: ["BAN_MEMBERS"],
    botpermission: ["BAN_MEMBERS"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const Target = message.mentions.members.first()
        if(!Target) return message.channel.send({
            embeds: [t]
        }).then(msg => {
            setTimeout(function() {
            msg.delete()
            }, 15000)
            }) 

        const reason = args.slice(1).join(" ") || "No Reason Provided";
        message.delete()

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
            .setAuthor("BAN MASTER")
            .setDescription(`You have been banned from **${message.guild.name}** for: \`${reason}\``)]})
            .catch(( ) => { console.log(`The client could not send the ban notice to ${member}.`)});

        Target.ban({reason})
        const resp = new MessageEmbed()
        .setColor("GREEN")
        .setDescription("SUCCESFUL")
        .setTitle("BAN MASTER")
        .addFields(
            { name: 'Banned user :', value: `<@${Target.user.id}>`},
            { name: 'Reason:', value: `${reason}`},
            { name: 'Banned user id:', value: `${Target.user.id}`}
        )
        .setFooter("SUCCES")
        .setTimestamp()
        message.channel.send({
            embeds: [resp]
        }).then(msg => {
            setTimeout(function() {
            msg.delete()
            }, 15000)
            }) 

    }
}