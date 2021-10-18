const db = require("../../reconDB");
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'set',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        await db.set(args[0], args[1]);
    }
}