<h1 align="center">Token Hotbar</h1>
<p align="center">
<img src="https://github.com/janssen-io/foundry-token-hotbar/workflows/TokenHotbar%20CI/badge.svg" alt="build status" /> <img src="https://img.shields.io/github/downloads-pre/janssen-io/foundry-token-hotbar/v4.2.1/TokenHotbar.zip?label=v4.2.1" alt="v4.2.1 downloads" />
<img src="https://github.com/janssen-io/foundry-token-hotbar/workflows/TokenHotbar%20CI/badge.svg" alt="build status" /> <img src="https://img.shields.io/github/downloads-pre/janssen-io/foundry-token-hotbar/v4.2.2/TokenHotbar.zip?label=v4.2.2" alt="v4.2.2 downloads" />
</p>

This module provides a unique hotbar for every token. If the token is linked to an actor (for player characters), then all tokens of that actor will have the same hotbar.

It's slimmed down to make maintenance easier and hopefully the code is easier to understand for
anyone who has ever written a macro in Foundry.

## Features

### Dynamically change the hotbar

All pages of the hotbar will change depending on the token you have selected.

<p align="center">
<img src="./wiki/img/thb-basics.gif" width="500px">
</p>

### Use an additional hotbar

Since version [1.3.1](https://github.com/janssen-io/foundry-tokenhotbar-js/releases/v1.3.1), this module supports using [Norc's Custom Hotbar](https://github.com/Norc/foundry-custom-hotbar) to place the Token Hotbar on. You can enable this in the settings.

<p align="center">
<img src="./wiki/img/thb-custom-hotbar.gif" width="500px">
</p>

### Enable the Token Hotbar per client

Since version [1.3.1](https://github.com/janssen-io/foundry-tokenhotbar-js/releases/v1.3.1), this module supports enabling and disabling the Token Hotbar per client. For example, the GM can use this to have different hotbars for different tokens. But the players might want a single hotbar as they usually control a single token anyway.

### Shared Token Hotbar

Hotbar's can be shared manually via the provided macro. A GM can run this macro and select for which
tokens and with which player they want to share the hotbar. You can find this macro in the compendium 'Token Hotbar'.

<p align="center">
<img src="./wiki/img/thb-shared.gif" width="100%" >
</p>

## Settings

* **Always link to actor:** link the hotbar to the actor, even if the token itself is not linked.
* **Use Custom Hotbar:** Place the Token Hotbar on [Norc's Custom Hotbar](https://github.com/Norc/foundry-custom-hotbar), instead of the original hotbar.
* **Debug Mode:** Show detailed messages in the console (F12).

## Available Languages
* 🇨🇳 中文（简体）
* 🇩🇪 Deutsch
* 🇬🇧 English
* 🇪🇸 Español
* 🇫🇷 Français
* 🇯🇵 日本語
* 🇰🇷 한국어
* 🇳🇱 Nederlands
* 🇵🇱 Polski
* 🇧🇷 Português (Brazil)
* 🇷🇴 Română


## Credits

Feel free to test out the latest beta using the following manifest link:
```
https://fvtt.janssen.io/tokenhotbar/beta/module.json
```
If you wish to help out with development, then clone the repo and start digging in!
Unit tests are much appreciated. :)

The original Token Hotbar had some issues which were hard to resolve ([#38](https://github.com/League-of-Foundry-Developers/foundry-token-hotbar/issues/46), [#46](https://github.com/League-of-Foundry-Developers/foundry-token-hotbar/issues/46) and [#50](https://github.com/League-of-Foundry-Developers/foundry-token-hotbar/issues/50)). So I created this new version that has a more stable, but unfortunately also more limited functionality.

On top of that, the code is kept more straight forward so it's easier for other developers to see what's going on (and perhaps help with maintenance later on).
