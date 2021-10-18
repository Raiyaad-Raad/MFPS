const db = require("../../reconDB");
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'delete',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        await db.delete(args[0]);
    }
}