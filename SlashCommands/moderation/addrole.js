const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'addrole',
    description: 'addrole to someone',
    botPerm: ["MANAGE_ROLES"],
    userPerm: ["MANAGE_ROLES"],
    options: [
        {
            name: 'target',
            description: 'target the member',
            type: 'USER',
            required: true,
        },
        {
            name: 'role',
            description: 'mention the role you want to add to the target',
            type: 'ROLE',
            required: true,
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

        await target.roles.add(role)

        return interaction.followUp({ content: `${target} got the ${role} `})
    }
}