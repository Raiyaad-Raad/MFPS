const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'addrole',
    description: 'add role to someone',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const target = message.mentions.members.first()
        if(!target) return message.channel.reply('No member specified')
        const role = message.mentions.roles.first()
        if(!role) return message.channel.reply('No role speicifed')

        await target.roles.add(role)
        message.channel.send({ content: `${target} got the role` })
    }
}