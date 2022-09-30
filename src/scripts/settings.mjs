import { TH, log, debug } from "./constants.mjs";

export const settingKeys = {
	alwaysUseActor: "alwaysUseActor",
	debugMode: "debugMode",
	useCustomHotbar: "useCustomHotbar",
	enableHotbar: "enableHotbar",
};

export const registerSettings = function () {
	game.settings.register(TH.name, settingKeys.alwaysUseActor, {
		name: `${TH.name}.settings.${settingKeys.alwaysUseActor}.name`,
		hint: `${TH.name}.settings.${settingKeys.alwaysUseActor}.hint`,
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
	});

	game.settings.register(TH.name, settingKeys.debugMode, {
		name: `${TH.name}.settings.${settingKeys.debugMode}.name`,
		hint: `${TH.name}.settings.${settingKeys.debugMode}.hint`,
		scope: "client",
		config: true,
		default: false,
		type: Boolean,
		onChange: () => setDebugging(settings),
	});

	log("Has Custom Hotbar?", hasCustomHotbar);
	game.settings.register(TH.name, settingKeys.useCustomHotbar, {
		name: `${TH.name}.settings.${settingKeys.useCustomHotbar}.name`,
		hint: `${TH.name}.settings.${settingKeys.useCustomHotbar}.hint`,
		scope: "client",
		config: hasCustomHotbar, // only show the setting if Custom Hotbar is enabled
		default: false,
		type: Boolean,
		onChange: (useCustomHotbar) => {
			// if the setting is somehow set to true, but Custom Hotbar is not enabled
			// then set the setting to false again
			if (useCustomHotbar && !hasCustomHotbar) {
				settings.set(TH.name, settingKeys.useCustomHotbar, false);
			}
		},
	});

	game.settings.register(TH.name, settingKeys.enableHotbar, {
		name: `${TH.name}.settings.${settingKeys.enableHotbar}.name`,
		hint: `${TH.name}.settings.${settingKeys.enableHotbar}.hint`,
		scope: "client",
		config: true,
		default: true,
		type: Boolean,
	});

	log("Module Settings registered.");
};

export function getModuleSettings(settings) {
	return (settingKey) => settings.get(TH.name, settingKey);
}
