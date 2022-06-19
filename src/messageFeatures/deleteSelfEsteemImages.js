exports.deleteSelfEsteemImages = (message, client) => {
  if (message.channel.name == "🧑autoestima" && message.attachments.size >= 1) {
    setTimeout(() => {
      message.delete()
    }, 43200000, message);
  }
}
