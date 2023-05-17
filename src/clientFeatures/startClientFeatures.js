const { clientOnReady } = require("./clientOnReady");

exports.startClientFeatures = (client) => {
  clientOnMessage(client);
  clientOnReady(client);
  clientOnMessageReactionAdd(client);
};
