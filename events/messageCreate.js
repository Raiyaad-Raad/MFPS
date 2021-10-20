const client = require("../index");
const premiumSchema = require("../models/permium");
const embed = new MessageEmbed()
.setColor("RED")
.setDescription("I do not have permission to execute this command") 
const resp = new MessageEmbed()
.setColor("RED")
.setDescription("You do not have permission to execute this command") 

client.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(client.config.prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;

    if(command.premium && !await premiumSchema.findOne({ User: message.author.id })) return message.channel.send(
        "You don't have User Premium you need to upgrade to UserPremium in order to use this command"
    );
    
       if(!message.member.permissions.has(command.permission || [])) return message.channel.send({
        embeds: [resp]
    });
    
    if(!message.guild.me.permissions.has(command.botpermission || [])) return message.channel.send({
        embeds: [embed] 
    });

    await command.run(client, message, args);
});
