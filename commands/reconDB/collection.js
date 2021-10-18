const db = require("../../reconDB");
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'collection',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        return console.log(await db.collection());
    },
};