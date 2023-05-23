const {
  feministechRoles,
} = require("../messageFeatures/feministechRoles");

exports.clientOnMessageReaction = (client) => {
  client.on("messageReactionAdd", async (reaction, user) => {
    feministechRoles(client, reaction, user, true);
  });

  client.on("messageReactionRemove", async (reaction, user) => {
    feministechRoles(client, reaction, user, false);
  });
};
