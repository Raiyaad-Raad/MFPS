const db = require("../../reconDB");
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'has',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const data = await db.has(args[0]);
        console.log(data);
    }
}