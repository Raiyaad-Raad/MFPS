const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'test',
    description: 'test for elp',
    /** 
     * @param {Client} client 
     * @param {CommandInterction} interaction 
     * @param {String[]} args 
     */
    run: async(client, interaction, args) => {
        interaction.followUp({ content: "ey" })
    }
}