const { Client, Message, MessageEmbed } = require('discord.js');
const schema = require("../../models/permium");

module.exports = {
    name: 'removeguild',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if (message.author.id !== "") return;

        if(!args[0]) return message.reply("please sepcify a valid id");

        schema.findOne({
            Guild: args[0],
        }, 
        async(err, data) => {
            if(!data) return message.reply(
                "The id that you provided is not present in the database"
            );
            data.delete();
            return message.reply("deleted data");
        })
    }
}