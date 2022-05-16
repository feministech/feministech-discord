exports.clientOnReady = (client) => {
  client.on("ready", () => {
    console.log(client.guilds.cache.get('735108082715066376').roles)
    console.log(`Logged as ${client.user.tag}`);
  });
};
