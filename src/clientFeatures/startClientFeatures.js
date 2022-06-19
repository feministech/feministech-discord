const { clientOnReady } = require("./clientOnReady");
const { clientOnMessage } = require("./clientOnMessage");
const { clientOnMessageReactionAdd } = require("./clientOnMessageReactionAdd");

exports.startClientFeatures = (client) => {
  clientOnMessage(client);
  clientOnReady(client);
  clientOnMessageReactionAdd(client);
};
