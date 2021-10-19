const premiumSchema = require("../../models/permium");
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'addpremium',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(message.author.id !== '889745154745991168') retrun;

        const member = 
        message.mentions.members.first() || 
        message.guild.members.cache.get(args[0]);

        if(!member) return message.reply("Please specify a valid member! boss");

        premiumSchema.findOne({
            User: member.id
        }, async(err, data) => {
            if(data) return message.reply(
                "This user is already in the premium! boss"
                )

                new premiumSchema({
                    User: member.id
                }).save();
                return message.reply(`Added  ${member} to the premium and the database so he will not never get removed cus it PERMENANT`)

        })
    }
}