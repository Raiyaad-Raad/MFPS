const premiumSchema = require("../../models/permium");
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'removepremium',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(message.author.id !== '') retrun;

        const member = 
        message.mentions.members.first() || 
        message.guild.members.cache.get(args[0]);

        if(!member) return message.reply("Please specify a valid member! boss");

        premiumSchema.findOne({
            User: member.id
        }, async(err, data) => {
            if (!data) 
            return message.reply(
                "User is not in the premium"
            );

            data.delete();
            message.channel.send(`Removed ${member} from the premium`)
        })
    }
}