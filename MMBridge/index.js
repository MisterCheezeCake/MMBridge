import { Setting, SettingsObject } from "SettingsManager/SettingsManager";
const settings = new SettingsObject('MMBridge', [
  {
      name: 'Module Settings',
      settings: [
          new Setting.Toggle('Toggle Module', true),
          new Setting.TextInput("Customize", "§2Guild > §e[BRIDGE]§3"),
          new Setting.Button(
            "Do /mmguide for a guide on how to use the customization box",
            ".",
            () => {}
        ),
  
      ],
  },
]).setCommand('mmbridge').setSize(400, 100);

Setting.register(settings);
let sayText = settings.getSetting('Module Settings', "Customize");
register("command", (e) => {
  ChatLib.chat(sayText + ' Testing 123')
}).setName("mmbridgetest")
register("command", (e) => {
  ChatLib.chat('To customize the module, you need to edit the box in the /mmbridge settings menu. To do this, click on the box and edit the numbers to any valid mc color code. The first one will change the colour of the &2Guild > &r, the second will change the color of the &e[BRIDGE] &rprefix, and the third will change the color of the persons name, do /mmbridgetest to test out your settings. &lYou need to /ct load for the settings to update.')
}).setName("mmguide")

register("chat", function(event) {
  var unformattedMessage = ChatLib.getChatMessage(event);
  msgString = unformattedMessage.toString();
  if(!settings.getSetting("Module Settings", "Toggle Module")) return;
  if(msgString.startsWith("§2Guild > §a[VIP] 0oompaL0oompa §6[R]§f:")){
    cancel(event)
    msgString = msgString.replace("§2Guild > §a[VIP] 0oompaL0oompa §6[R]§f: ",sayText + ' ')
    msgString = msgString.replace(": ","§f: ")
    ChatLib.chat(msgString)
  }
})
