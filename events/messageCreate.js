const client = require("../index");

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

    if(!message.member.permissions.has(command.permission || [])) return message.channel.send(
        "You do not have permissions to use this commands"
    )

    if(!message.guild.me.permissions.has(command.botpermission || [])) return message.channel.send(
        "You do not have permissions to use this commands"
    )
    await command.run(client, message, args);
});