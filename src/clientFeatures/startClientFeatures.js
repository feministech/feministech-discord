const { clientOnReady } = require("./clientOnReady");
const { clientOnMessageReaction } = require("./clientOnMessageReaction")

exports.startClientFeatures = (client) => {
  clientOnReady(client);
  clientOnMessageReaction(client);
};
