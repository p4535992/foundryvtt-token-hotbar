# Token Hotbar

![Latest Release Download Count](https://img.shields.io/github/downloads/p4535992/foundryvtt-token-hotbar/latest/module.zip?color=2b82fc&label=DOWNLOADS&style=for-the-badge)

[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Ftoken-hotbar&colorB=006400&style=for-the-badge)](https://forge-vtt.com/bazaar#package=foundryvtt-token-hotbar)

![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-token-hotbar%2Fmaster%2Fsrc%2Fmodule.json&label=Foundry%20Version&query=$.compatibility.verified&colorB=orange&style=for-the-badge)

![Latest Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-token-hotbar%2Fmaster%2Fsrc%2Fmodule.json&label=Latest%20Release&prefix=v&query=$.version&colorB=red&style=for-the-badge)

[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Ftoken-hotbar%2Fshield%2Fendorsements&style=for-the-badge)](https://www.foundryvtt-hub.com/package/foundryvtt-token-hotbar/)

![GitHub all releases](https://img.shields.io/github/downloads/p4535992/foundryvtt-token-hotbar/total?style=for-the-badge)

[![Translation status](https://weblate.foundryvtt-hub.com/widgets/token-hotbar/-/multi-auto.svg)](https://weblate.foundryvtt-hub.com/engage/token-hotbar/)

### If you want to buy me a coffee [![alt-text](https://img.shields.io/badge/-Patreon-%23ff424d?style=for-the-badge)](https://www.patreon.com/p4535992)

This module provides a unique hotbar for every token. If the token is linked to an actor (for player characters), then all tokens of that actor will have the same hotbar.

It's slimmed down to make maintenance easier and hopefully the code is easier to understand for anyone who has ever written a macro in Foundry.

This is a follow up of the job done from [janssen](https://github.com/janssen-io) on the module [foundry-tokenhotbar-js](https://github.com/janssen-io/foundry-tokenhotbar-js) forked from the original league repository.

## Known issue/Limitation

## Installation

It's always easiest to install modules from the in game add-on browser.

To install this module manually:
1.  Inside the Foundry "Configuration and Setup" screen, click "Add-on Modules"
2.  Click "Install Module"
3.  In the "Manifest URL" field, paste the following url:
`https://raw.githubusercontent.com/p4535992/foundryvtt-token-hotbar/master/src/module.json`
4.  Click 'Install' and wait for installation to complete
5.  Don't forget to enable the module in game using the "Manage Module" button

## Features

### Dynamically change the hotbar

All pages of the hotbar will change depending on the token you have selected.

<p align="center">
<img src="./wiki/img/thb-basics.gif" width="500px">
</p>

### Use additionals hotbar

Since version [1.3.1](https://github.com/janssen-io/foundry-tokenhotbar-js/releases/v1.3.1), this module supports using [Norc's Custom Hotbar](https://github.com/Norc/foundry-custom-hotbar) or [Monk's Hotbar Expansion](https://github.com/ironmonk88/hotbar-expansion) to place additional Token Hotbars on the token.

<p align="center">
<img src="./wiki/img/thb-custom-hotbar.gif" width="500px">
</p>

<p align="center">
<img src="./wiki/img/monk_expanded_jhotbar.gif" width="500px">
</p>

### Enable the Token Hotbar per client

Since version [1.3.1](https://github.com/janssen-io/foundry-tokenhotbar-js/releases/v1.3.1), this module supports enabling and disabling the Token Hotbar per client. For example, the GM can use this to have different hotbars for different tokens. But the players might want a single hotbar as they usually control a single token anyway.

### Shared Token Hotbar

Hotbar's can be shared manually via the provided macro. A GM can run this macro and select for which tokens and with which player they want to share the hotbar. You can find this macro in the compendium 'Token Hotbar'.

<p align="center">
<img src="./wiki/img/thb-shared.gif" width="100%" >
</p>

## Settings

* **Always link to actor:** link the hotbar to the actor, even if the token itself is not linked.
* **Use Norc's Custom Hotbar:** Place the Token Hotbar on [Norc's Custom Hotbar](https://github.com/Norc/foundry-custom-hotbar), instead of the original hotbar.
* **Debug Mode:** Show detailed messages in the console (F12).

## API

A little api to use in macro or external module ecc.

The api is reachable from the variable `game.modules.get('token-hotbar').api` or from the socket libary `socketLib` on the variable `game.modules.get('token-hotbar').socket` if present and active.

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

# Build

## Install all packages

```bash
npm install
```
## npm build scripts

### build

will build the code and copy all necessary assets into the dist folder and make a symlink to install the result into your foundry data; create a
`foundryconfig.json` file with your Foundry Data path.

```json
{
  "dataPath": "~/.local/share/FoundryVTT/"
}
```

`build` will build and set up a symlink between `dist` and your `dataPath`.

```bash
npm run-script build
```

### NOTE:

You don't need to build the `foundryconfig.json` file you can just copy the content of the `dist` folder on the module folder under `modules` of Foundry

### build:watch

`build:watch` will build and watch for changes, rebuilding automatically.

```bash
npm run-script build:watch
```

### clean

`clean` will remove all contents in the dist folder (but keeps the link from build:install).

```bash
npm run-script clean
```

### prettier-format

`prettier-format` launch the prettier plugin based on the configuration [here](./.prettierrc)

```bash
npm run-script prettier-format
```

### package

`package` generates a zip file containing the contents of the dist folder generated previously with the `build` command. Useful for those who want to manually load the module or want to create their own release

```bash
npm run-script package
```

## [Changelog](./CHANGELOG.md)

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/p4535992/foundryvtt-arms-reach/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## License

This package is under an [MIT license](LICENSE) and the [Foundry Virtual Tabletop Limited License Agreement for module development](https://foundryvtt.com/article/license/).

## Credit

Thanks to anyone who helps me with this code! I appreciate the user community's feedback on this project!

A very big thanks to [janssen](https://github.com/janssen-io), for update this module for 0.8.9 and make it work for 9 [foundry-tokenhotbar-js](https://github.com/janssen-io/foundry-tokenhotbar-js).
