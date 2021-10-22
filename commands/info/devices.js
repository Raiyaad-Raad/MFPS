const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'devices',
    premium: 'true',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const user = message.mentions.members.first() || message.author;
        const devices = user.presence?.clientStatus || {};

        const description = () => {
            if(devices > 1) {
                const entries = Object.entries(devices).map(
                    (value) => value[0]
                );
                return `Device: ${entries}`; 
            } else {
              const entries = Object.entries(devices).map((value, index) => `${index + 1}) ${value[0]}`).join("\n");
              return `Devices:\n${entries}`;
            }
        };
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("MASTER")
        .setAuthor(user.tag, user.displayAvatarURL())
        .setDescription(description())
        .setFooter("This show which user logged in which device")
        .setTimestamp()

        message.channel.send({
            embeds: [embed]
        })
    }
}