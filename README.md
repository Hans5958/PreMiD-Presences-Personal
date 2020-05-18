<div align="center">
    <img src="https://avatars3.githubusercontent.com/u/46326568?s=400&amp;u=15e4a4988014780288d30ffb969fd1569fec23e6&amp;v=4" width="128px" style="max-width:100%;">
    <h1><small>Hans5958's Personal</small> PreMiD Presences</h1>
</div>

This repository contains the source code of my presences that are created for [PreMiD/Presences](https://github.com/PreMiD/Presences) (and [the store](https://premid.app/store))  
If you want to use one of my presence, please go to [here](https://premid.app/users/279855717203050496).  
You can report issues related to my presence on either [this repository](https://github.com/Hans5958/PreMiD-Presences-Personal/issues) or [the main repository](https://github.com/PreMiD/Presences/issues).

## Info for starters:

**[PreMiD](https://premid.app/)** is an application that uses the Discord Rich Presence feature to show activities that you do on your browser to Discord. It consists of an extension/addon and an application. The extension/addon [has a good support on Chrome and Chromium-based browsers](https://chrome.google.com/webstore/detail/premid/agjnjboanicjcpenljmaaigopkgdnihi), and [works 90% on Firefox](https://dl.premid.app/PreMiD.xpi). The application works on [Windows](http://dl.premid.app/PreMiD-installer.exe) and [Mac](http://dl.premid.app/PreMiD-installer.app.zip). There's also a [Linux](https://github.com/PreMiD/Linux/blob/master/README.md) version which is in development. 

The way PreMiD works is as follows.

1. PreMiD detects the website domain you visited, and loads the related script code, which is called a "presence".
2. The script take essential informations related to the visited page.
3. The script sends the information to be displayed to the extension.
4. The extension forwards the information to the application.
5. The application beams the information to your Discord application, specifically the Rich Presence part of Discord.
6. The information is displayed on your "playing" section.

Keep in mind that there are a thousand ways this app could be broken, or at least that's what would a presence developer (like me) said. Let me tell you, one way to break PreMiD is to remove all of the default presences.

Before you ask, no, [PreMiD is **not** against the ToS](https://twitter.com/discordapp/status/1233704070390669312).

<div align="left">
    <a href="https://discord.gg/WvfVZ8T" title="Join PreMiD's Discord!" rel="nofollow">
    <img src="https://camo.githubusercontent.com/987903b512adb37c953df3e83f1921dc29140493/68747470733a2f2f646973636f72646170702e636f6d2f6170692f6775696c64732f3439333133303733303534393830353035372f7769646765742e706e673f7374796c653d62616e6e657232" height="76px" alt="Join PreMiD's Discord!" data-canonical-src="https://discordapp.com/api/guilds/493130730549805057/widget.png?style=banner2" style="max-width:100%;">
    </a>
</div>

## Info for people coming from PreMiD:

If you look closely to the files, it is quite different than the rest of the main repository. Here are the list of differences on the script. 

1. I use tabs for indentations instead of two spaces.
2. I don't use semicolons.
3. I built my own structure/base for my presences. See the [base collection](https://github.com/Hans5958/PreMiD-Presences-Personal/blob/master/%23%20Docs/base-collection.md) and [my explanation of how it is built](https://github.com/Hans5958/PreMiD-Presences-Personal/blob/master/%23%20Docs/explanation-for-base.md).
4. There are no limits for the width.
5. All presence are built with TypeScript. (may not relevant since all presences are now built with TS)
6. The folder structure differs, since, for now, I only support websites and I only have a few presences.
7. Prettier are only used when needed. (only for TS files)

Because of this, I need to adjust my presences before making pull requests to the main repository. I used multiple scripts so I could do the adjustments easier.

I also made other projects related to PreMiD, such as [the metadata test suite](https://github.com/Hans5958/PreMiD-MTS).


## Folder structure

```
/presences
└─ /(presence - If coded with TypeScript, make sure to include `presence.ts`, and `tsconfig.json`)
   └─ /dist (contains code that will be used in store, must have `metadata.json` and `presence.js` in it.)
```
