exports.clientOnReady = (client) => {
  client.on("ready", () => {
    console.log(`Logged as ${client.user.tag}`);
  });
};
