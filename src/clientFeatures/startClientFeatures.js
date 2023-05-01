const { clientOnReady } = require("./clientOnReady");

exports.startClientFeatures = (client) => {
  clientOnReady(client);
};
