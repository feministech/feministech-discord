const rolesMessage = "976953029842571334"


exports.feministechRoles = async (client, reaction, user, roleAdd) => {

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
    reaction.message.id == rolesMessage
  ) {
    switch (reaction.emoji.name) {
      case "🎥":
        messageReaction(feministechServer.roles.cache.get("755897255684341812"), member, roleAdd);
        break;
      case "🎨":
        messageReaction(feministechServer.roles.cache.get("905948838802632715"), member, roleAdd);
        break;
      case "🎙":
        messageReaction(feministechServer.roles.cache.get("947153183455707136"), member, roleAdd);
        break;
      case "🏳️‍🌈":
        messageReaction(feministechServer.roles.cache.get("858455456313376789"), member, roleAdd);
        break;
      case "🏳️‍⚧️":
        messageReaction(feministechServer.roles.cache.get("975418957613916212"), member, roleAdd);
        break;
      case "💗":
        messageReaction(feministechServer.roles.cache.get("984576783280140329"), member, roleAdd);
        break;
      case "💛":
        messageReaction(feministechServer.roles.cache.get("975419320270200924"), member, roleAdd);
        break;
      case "🟢":
        messageReaction(feministechServer.roles.cache.get("975419561161682985"), member, roleAdd);
        break;
      case "🟤":
        messageReaction(feministechServer.roles.cache.get("975419683312373790"), member, roleAdd);
        break;
      case "🟡":
        messageReaction(feministechServer.roles.cache.get("975420050813120582"), member, roleAdd);
        break;
      case "⚪":
        messageReaction(feministechServer.roles.cache.get("975419804334825632"), member, roleAdd);
        break;
      case "🥑":
        messageReaction(feministechServer.roles.cache.get("975420161546911754"), member, roleAdd);
        break;
      case "💻":
        messageReaction(feministechServer.roles.cache.get("975420589646962729"), member, roleAdd);
        break;
      case "🖥":
        messageReaction(feministechServer.roles.cache.get("975420670857072761"), member, roleAdd);
        break;
      case "🐞":
        messageReaction(feministechServer.roles.cache.get("975420727014617161"), member, roleAdd);
        break;
      case "🛰":
        messageReaction(feministechServer.roles.cache.get("975420868912103497"), member, roleAdd);
        break;
      case "⚙":
        messageReaction(feministechServer.roles.cache.get("975420990580469821"), member, roleAdd);
        break;
      case "📱":
        messageReaction(feministechServer.roles.cache.get("975483693839835157"), member, roleAdd);
        break;
      case "🔎":
        messageReaction(feministechServer.roles.cache.get("975484053874704385"), member, roleAdd);
        break;
      case "📗":
        messageReaction(feministechServer.roles.cache.get("975421044661813278"), member, roleAdd);
        break;
      default:
        break;
    }
  }
};


function messageReaction(role, member, event = true){
  if (event){
    member.roles.add(role)
  }else{
    member.roles.remove(role)
  }
}
