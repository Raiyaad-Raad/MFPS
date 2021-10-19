const { Client, Collection } = require("discord.js");
const { Token } = require("./config.json")
const client = new Client({
    intents: 32767,
});
module.exports = client;

client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");


require("./handler/index")(client);

client.login(Token);