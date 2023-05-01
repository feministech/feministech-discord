const { Events } = require("discord.js");
const { everydayPost } = require("../utils/everydayPost");

exports.clientOnReady = (client) => {
  client.once(Events.ClientReady, async () => {
    console.log(`Logged as ${client.user.tag}`);

    everydayPost(client)
  });
};
