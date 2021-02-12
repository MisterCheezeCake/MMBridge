# MMBridge
MM Bridge is a module designed to improve the look of the new Money Moves discord bridge.
In the future, the module will be fully customizable, right now this is just an initial release. You can always change the code to your liking if you don't like the color scheme I currently selected.
## Credits
- Inspiration taken from itqxic and his bagchat module
- Major credit goes towards Vigintillion for the development of the MM Bridge itself

Will probably support Rice Moves if and when they add a bridge.

### How to change the color scheme
While for now color changing is not supported by default, you can always manually change in code.
Guide:
First you will need to go to the module's file
```
%appdata%\.minecraft\config\ChatTriggers\modules\mmbridge
```
Then you will need to open "index.js" with any text editor (notepad works fine)
You will want to focus on this particular part of the code:
https://cdn.discordapp.com/attachments/764872898481356831/809580765393584158/unknown.png
Changing "e" to a valid mc color code will change the color of the [BRIDGE]. Changing the "3" to any valid mc color code will change the color of the name.
