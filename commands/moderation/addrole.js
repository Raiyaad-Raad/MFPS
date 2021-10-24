const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'addrole',
    description: 'add role to someone',
    permission: ["MANAGE_ROLES"],
    botpermission: ["MANAGE_ROLES"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        message.delete()
        const target = message.mentions.members.first()
        const reason = args.slice(1).join(" ") || "Added Roles To User";
        if(!target) return message.channel.send('No member specified').then(msg => {
            setTimeout(function() {
            msg.delete()
            }, 15000)
            }) 
        const role = message.mentions.roles.first()
        if(!role) return message.channel.send('No role speicifed').then(msg => {
            setTimeout(function() {
            msg.delete()
            }, 15000)
            }) 

        client.modlogs(
        {
            Member: target,
            Action: `Added Role to ${target}`,
            Reason: reason,
        },
         message
    );

        await target.roles.add(role)
        message.channel.send({ content: `${target} got the role` }).then(msg => {
            setTimeout(function() {
            msg.delete()
            }, 15000)
            }) 
    }
}
