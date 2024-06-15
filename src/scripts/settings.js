import CONSTANTS from "./constants.js";
import { log } from "./lib/lib.js";

export const settingKeys = {
    alwaysUseActor: "alwaysUseActor",
    // debugMode: "debugMode",
    useCustomHotbar: "useCustomHotbar",
    enableHotbar: "enableHotbar",
    enableHotbarByRole: "enableHotbarByRole",
    debug: "debug",
};

export const registerSettings = function () {
    const hasCustomHotbar = game.modules.get(CONSTANTS.CUSTOM_HOTBAR_MODULE_NAME)?.active;

    game.settings.register(CONSTANTS.MODULE_NAME, settingKeys.enableHotbar, {
        name: `${CONSTANTS.MODULE_NAME}.settings.${settingKeys.enableHotbar}.name`,
        hint: `${CONSTANTS.MODULE_NAME}.settings.${settingKeys.enableHotbar}.hint`,
        scope: "client",
        config: true,
        default: false,
        type: Boolean,
    });

    game.settings.register(CONSTANTS.MODULE_NAME, settingKeys.enableHotbarByRole, {
        name: `${CONSTANTS.MODULE_NAME}.settings.${settingKeys.enableHotbarByRole}.name`,
        hint: `${CONSTANTS.MODULE_NAME}.settings.${settingKeys.enableHotbarByRole}.hint`,
        scope: "world",
        type: String,
        choices: {
            NONE: "None",
            PLAYER: "Player",
            TRUSTED: "Trusted",
            ASSISTANT: "Assistant",
            GAMEMASTER: "GameMaster",
        },
        default: "NONE",
        config: true,
    });

    game.settings.register(CONSTANTS.MODULE_NAME, settingKeys.alwaysUseActor, {
        name: `${CONSTANTS.MODULE_NAME}.settings.${settingKeys.alwaysUseActor}.name`,
        hint: `${CONSTANTS.MODULE_NAME}.settings.${settingKeys.alwaysUseActor}.hint`,
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    });

    // game.settings.register(CONSTANTS.MODULE_NAME, settingKeys.debugMode, {
    // 	name: `${CONSTANTS.MODULE_NAME}.settings.${settingKeys.debugMode}.name`,
    // 	hint: `${CONSTANTS.MODULE_NAME}.settings.${settingKeys.debugMode}.hint`,
    // 	scope: "client",
    // 	config: true,
    // 	default: false,
    // 	type: Boolean,
    // 	onChange: () => setDebugging(settings),
    // });

    game.settings.register(CONSTANTS.MODULE_NAME, settingKeys.useCustomHotbar, {
        name: `${CONSTANTS.MODULE_NAME}.settings.${settingKeys.useCustomHotbar}.name`,
        hint: `${CONSTANTS.MODULE_NAME}.settings.${settingKeys.useCustomHotbar}.hint`,
        scope: "client",
        config: hasCustomHotbar, // only show the setting if Custom Hotbar is enabled
        default: false,
        type: Boolean,
        onChange: (useCustomHotbar) => {
            // if the setting is somehow set to true, but Custom Hotbar is not enabled
            // then set the setting to false again
            if (useCustomHotbar && !hasCustomHotbar) {
                settings.set(CONSTANTS.MODULE_NAME, settingKeys.useCustomHotbar, false);
            }
        },
    });

    game.settings.register(CONSTANTS.MODULE_NAME, "debug", {
        name: `${CONSTANTS.MODULE_NAME}.settings.debug.name`,
        hint: `${CONSTANTS.MODULE_NAME}.settings.debug.hint`,
        scope: "client",
        config: true,
        default: false,
        type: Boolean,
    });
};
