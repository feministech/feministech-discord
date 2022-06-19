const { deleteSelfEsteemImages } = require("../messageFeatures/deleteSelfEsteemImages");

exports.clientOnMessage = (client) => {
  client.on("message", (message) => {
    if (message.author.bot) return;
    deleteSelfEsteemImages(message);
  });
};
