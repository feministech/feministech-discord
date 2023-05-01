const { AttachmentBuilder, EmbedBuilder } = require('discord.js');

const { getYuri } = require("./getYuri")

exports.postYuri = async (client) => {
  const channel = client.channels.cache.get("1102463560346501140")

  const yuri = await getYuri()
  const image = new AttachmentBuilder(yuri.url);
  const embed = new EmbedBuilder()
	.setTitle(yuri.title)

  channel.send({embeds: [embed], files: [image]})
}
