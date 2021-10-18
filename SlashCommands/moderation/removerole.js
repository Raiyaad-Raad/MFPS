const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'removerole',
    description: 'remove role from someone',
    options: [
        {
            name: 'target',
            description: 'mention the member you want to remove role from',
            type: 'USER',
            required: true,
        },
        {
            name: 'role',
            description: 'mention the role you want to remove',
            type: 'ROLE',
            required: true,
        },
        {
            name: 'reason',
            description: 'this is optional for why you want to remove the role from the user',
            type: 'STRING',
            required: false,
        },
    ],
    /** 
     * @param {Client} client 
     * @param {CommandInterction} interaction 
     * @param {String[]} args 
     */
    run: async(client, interaction, args) => {
        const target = interaction.options.getMember("target");
        const role = interaction.options.getRole("role");

        await target.roles.remove(role)

        return interaction.followUp({ content: `succesfully removed ${role} from ${target}` })
    }
}