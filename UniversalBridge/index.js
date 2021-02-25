import { Setting, SettingsObject } from "../SettingsManager/SettingsManager";
const settings = new SettingsObject("UniversalBridge",
  [
    {
      name: "Settings",
      settings: [
        new Setting.Toggle("Enabled", true),
        new Setting.TextInput("Bridge Text", "[BRIDGE]"),
        new Setting.TextInput("Bot Name", "MMChatBot"),
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
).setCommand("bridge");
Setting.register(settings);

register("chat", bridgeChat).setCriteria("&r&2Guild > ${*} ${bot} ${*}: &r${player}: ${msg}&r");
register("chat", bridgeChat).setCriteria("&r&2Guild > ${bot} ${*}: &r${player}: ${msg}&r");
register("chat", bridgeChat).setCriteria("&r&2Guild > ${*} ${bot}: &r${player}: ${msg}&r");
register("chat", bridgeChat).setCriteria("&r&2Guild > ${bot}: &r${player}: ${msg}&r");

function bridgeChat(bot, player, msg, event) {
  if (!settings.getSetting("Settings", "Enabled")) return;
  if (settings.getSetting("Settings", "Bot Name") !== ChatLib.removeFormatting(bot)) return;
  cancel(event);
  bridgeText = settings.getSetting("Settings", "Bridge Text");
  bridgeColor = settings.getSetting("Settings", "Bridge Color").substring(0, 2);
  bridgeBold = settings.getSetting("Settings", "Bridge Bold") ? "§l" : "";
  discordColor = settings.getSetting("Settings", "Discord User Color").substring(0, 2);
  discordBold = settings.getSetting("Settings", "Discord User Bold") ? "§l" : "";
  ChatLib.chat(`§2Guild > ${bridgeColor + bridgeBold + bridgeText} ${discordColor + discordBold + player}§r: ${msg}`);
}