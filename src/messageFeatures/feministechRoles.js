const fs = require("fs")

exports.feministechRoles = async (client, reaction, user) => {

  const feministechServer = client.guilds.cache.get("735108082715066376")
  let member = feministechServer.members.cache.get(user.id)

  // When a reaction is received, check if the structure is partial
  if (reaction.partial) {
    // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
    try {
      await reaction.fetch();
    } catch (error) {
      console.error("Something went wrong when fetching the message: ", error);
      // Return as `reaction.message.author` may be undefined/null
      return;
    }
  }

  if (
    reaction.message.id == "975481713251737630"
  ) {
    switch (reaction.emoji.name) {
      case "🏳️‍🌈":
        member.roles.add(feministechServer.roles.cache.get("858455456313376789"));
        break;
      case "🏳️‍⚧️":
        member.roles.add(feministechServer.roles.cache.get("975418957613916212"));
        break;
      case "💛":
        member.roles.add(feministechServer.roles.cache.get("975419320270200924"));
        break;
      case "🟢":
        member.roles.add(feministechServer.roles.cache.get("975419561161682985"));
        break;
      case "🟤":
        member.roles.add(feministechServer.roles.cache.get("975419683312373790"));
        break;
      case "🟡":
        member.roles.add(feministechServer.roles.cache.get("975420050813120582"));
        break;
      case "⚪":
        member.roles.add(feministechServer.roles.cache.get("975419804334825632"));
        break;
      case "🥑":
        member.roles.add(feministechServer.roles.cache.get("975420161546911754"));
        break;
      case "💻":
        member.roles.add(feministechServer.roles.cache.get("975420589646962729"));
        break;
      case "🖥️":
        member.roles.add(feministechServer.roles.cache.get("975420670857072761"));
        break;
      case "🎛️":
        member.roles.add(feministechServer.roles.cache.get("975420727014617161"));
        break;
      case "🛰️":
        member.roles.add(feministechServer.roles.cache.get("975420868912103497"));
        break;
      case "⚙️":
        member.roles.add(feministechServer.roles.cache.get("975420990580469821"));
        break;
      case "📱":
        member.roles.add(feministechServer.roles.cache.get("975483693839835157"));
        break;
      case "🔎":
        member.roles.add(feministechServer.roles.cache.get("975484053874704385"));
        break;
      case "📗":
        member.roles.add(feministechServer.roles.cache.get("975421044661813278"));
        break;

      default:
        break;
    }
  }
};
