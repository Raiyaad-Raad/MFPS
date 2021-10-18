const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'removerole',
    descirption: 'Remove role from someone',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {


        const target = message.mentions.members.first()
        if(!target) return message.channel.send('No member specified specify the member you want to remove role from')
        const role = message.mentions.roles.first()
        if(!role) return message.channel.send({ content: `No role specified specify the role you want to remove the role from the ${target}` })

        await target.roles.remove(role)
        message.channel.send({ content: `Removed the role from ${target}` }).setTimeout(() => 
        { message.delete() 
        }, 5000)
    }
}