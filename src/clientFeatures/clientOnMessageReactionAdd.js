const { Events } = require("discord.js");
const {
  feministechRoles,
} = require("../messageFeatures/feministechRoles");

exports.clientOnMessageReactionAdd = (client) => {
  client.on(Events.MessageReactionAdd, async (reaction, user) => {
    feministechRoles(client, reaction, user);
  });
};
