register("chat", function(event) {
  var unformattedMessage = ChatLib.getChatMessage(event);
  msgString = unformattedMessage.toString();
  if(msgString.startsWith("§2Guild > §a[VIP] 0oompaL0oompa §6[R]§f:")){
    cancel(event)
    msgString = msgString.replace("§2Guild > §a[VIP] 0oompaL0oompa §6[R]§f: ","§2Guild > §e[BRIDGE]§3 ")
    msgString = msgString.replace(": ","§f: ")
    ChatLib.chat(msgString)
  }
})
