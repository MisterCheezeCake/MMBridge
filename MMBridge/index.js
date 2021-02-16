import { Setting, SettingsObject } from "../SettingsManager/SettingsManager";
const settings = new SettingsObject("MMBridge",
  [
    {
      name: "Settings",
      settings: [
        new Setting.Toggle("Enabled", false),
        new Setting.TextInput("Bridge Text", "[BRIDGE]"),
        new Setting.StringSelector("Bridge Color", 0, [
          "&4Dark Red",
          "&cRed",
          "&6Gold",
          "&eYellow",
          "&2Dark Green",
          "&aGreen",
          "&bAqua",
          "&3Dark Aqua",
          "&1Dark Blue",
          "&9Blue",
          "&dLight Purple",
          "&5Dark Purple",
          "&fWhite",
          "&7Gray",
          "&8Dark Gray",
          "&0Black"
        ]),
        new Setting.Toggle("Bridge Bold", false),

        new Setting.StringSelector("Discord User Color", 0, [
          "&4Dark Red",
          "&cRed",
          "&6Gold",
          "&eYellow",
          "&2Dark Green",
          "&aGreen",
          "&bAqua",
          "&3Dark Aqua",
          "&1Dark Blue",
          "&9Blue",
          "&dLight Purple",
          "&5Dark Purple",
          "&fWhite",
          "&7Gray",
          "&8Dark Gray",
          "&0Black"
        ]),
        new Setting.Toggle("Discord User Bold", false),
      ]
    }
  ]
).setCommand("mmbridge");
Setting.register(settings);

let toggle, bridgeText, bridgeColor, bridgeBold, discordColor, discordBold;

register("tick", () => {
  toggle = settings.getSetting("Settings", "Enabled");
  bridgeText = settings.getSetting("Settings", "Bridge Text");
  bridgeColor = settings.getSetting("Settings", "Bridge Color").substring(0, 2);
  bridgeBold = settings.getSetting("Settings", "Bridge Bold") ? "§l" : "";
  discordColor = settings.getSetting("Settings", "Discord User Color").substring(0, 2);
  discordBold = settings.getSetting("Settings", "Discord User Bold") ? "§l" : "";
});

register("chat", (player, msg, event) => {
  if (!toggle) return;
  cancel(event);
  ChatLib.chat(`§2Guild > ${bridgeColor + bridgeBold + bridgeText} ${discordColor + discordBold + player}§r: ${msg}`);
}).setCriteria("&r&2Guild > &b[MVP&0+&b] FireInfusion &6[Staff]&f: &r${player}: ${msg}&r");

