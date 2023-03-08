const { clientOnReady } = require("./clientOnReady");
const { clientOnMessage } = require("./clientOnMessage");
const { clientOnMessageReactionAdd } = require("./clientOnMessageReactionAdd");

exports.startClientFeatures = (client) => {
  clientOnReady(client);
  clientOnMessage(client);
  clientOnMessageReactionAdd(client);
};
