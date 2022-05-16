const { clientOnReady } = require("./clientOnReady");
const { clientOnMessageReactionAdd } = require("./clientOnMessageReactionAdd");

exports.startClientFeatures = (client) => {
  clientOnReady(client);
  clientOnMessageReactionAdd(client);
};
