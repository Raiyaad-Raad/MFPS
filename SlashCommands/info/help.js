const { CommandInteraction, MessageEmbed } = require('discord.js')

module.exports = {
  name: 'help',
  description: 'Displays the help message',

      /**
     * @param {Clinet} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

  run: async (client, interaction, args) => {
    const moduleArray = []

    client.commands.forEach(command =>
      moduleArray.push({ name: "idk xd", value: `${command.name}\n${command.description}` }))

    const response = new MessageEmbed()
      .setTitle(`${client.user.username} Help`)
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .setColor('YELLOW')
      .setDescription(moduleArray)
      .setFooter(`${client.user.username}`)
      .setTimestamp()

    interaction.reply({ embeds: [response] })
  }
}