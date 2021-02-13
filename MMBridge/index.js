import { Setting, SettingsObject } from "SettingsManager/SettingsManager";
const settings = new SettingsObject('MMBridge', [
  {
      name: 'Module Settings',
      settings: [
          new Setting.Toggle('Toggle Module', true),
          new Setting.TextInput("Customize", "&e[BRIDGE]&3"),
          new Setting.Button(
            "Do /mmguide for a guide on how to use the customization box",
            " ",
            () => {}
        ),
        new Setting.Button(
          "Do /mmcolors for a list of color codes",
          " ",
          () => {}
      ),
      new Setting.Button(
        "To see your changes you must do /mmreload",
        " ",
        () => {}
    ),
      ],
  },
]).setCommand('mmbridge').setSize(400, 100);

Setting.register(settings);

let sayText = settings.getSetting('Module Settings', "Customize");
let refresh = false

register("command", (e) => {
  ChatLib.chat('&2Guild > ' + sayText + ' Testing 123')
}).setName("mmbridgetest")
register("command", (e) => {
  ChatLib.chat('&6[MMBRIDGE]&f: &rTo customize the module, you need to edit the box in the /mmbridge settings menu. To do this, click on the box and edit the numbers to any valid mc color code. The first one will change the colour of the &e[BRIDGE]&r prefix and the second one changes the color of the  name. &c&lYou need to /mmreload for the settings to update.')
}).setName("mmguide")
register("command", (e) => {
  ChatLib.chat('&11 &22 &33 &44 &55 &66 &77 &88 &99 &00 &aa &bb &cc &dd &ee &ff &ll')
}).setName("mmcolors")
register("command", (e) => {
  sayText = settings.getSetting('Module Settings', "Customize");
  ChatLib.chat('&aReloaded color settings')
}).setName("mmreload")

register("chat", function(event) {
  var unformattedMessage = ChatLib.getChatMessage(event);
  msgString = unformattedMessage.toString();
  if(!settings.getSetting("Module Settings", "Toggle Module")) return;
  if(msgString.startsWith("§2Guild > §a[VIP] 0oompaL0oompa §6[R]§f:")){
    cancel(event)
    msgString = msgString.replace("§2Guild > §a[VIP] 0oompaL0oompa §6[R]§f: ",'&2Guild > '+ sayText + ' ')
    msgString = msgString.replace(": ","§f: ")
    ChatLib.chat(msgString)
  }
})
