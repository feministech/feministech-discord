require("dotenv").config();
const { Client, GatewayIntentBits, Partials, PartialWebhookMixin } = require("discord.js");

const { startClientFeatures } = require("./clientFeatures/startClientFeatures");

const client = new Client({
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
  ]
});

client.login(process.env.TOKEN);

startClientFeatures(client);
