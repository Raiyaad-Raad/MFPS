const { Message, Client } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ['p'],
    premium: true,
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send(`${client.ws.ping} ws ping`).setTimeout(() => 
        { message.delete() 
        }, 5000)
    },
};