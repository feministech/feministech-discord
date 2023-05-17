const {
  feministechRoles,
} = require("../messageFeatures/feministechRoles");

exports.clientOnMessageReactionAdd = (client) => {
  client.on("messageReactionAdd", async (reaction, user) => {
    feministechRoles(client, reaction, user);
  });
};
