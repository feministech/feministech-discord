const { Events } = require("discord.js");

exports.clientOnReady = (client) => {
  client.once(Events.ClientReady, () => {
    console.log(`Logged as ${client.user.tag}`);
  });
};
