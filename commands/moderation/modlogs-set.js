const { Client, Message, MessageEmbed } = require('discord.js');
const Schema = require('../../models/modlogs');

module.exports = {
    name: 'modlogs-set',
    permission: ['ADMINISTRATOR'],
    botpermission: ['ADMISITRATOR'],
    aliases: ['set-modlogs', 'setmodlogs', 'smc', 'set-logs', 'sl'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const channel = message.mentions.channels.first() || message.channel;

        Schema.findOne({ Guild: message.guild.id }, async (err, data) => {
            if (data) data.delete();
            new Schema({
                Guild: message.guild.id,
                Channel: channel.id,
            }).save();
            message.channel.send(`${channel} set as modlogs channel`)
        })
    }
}