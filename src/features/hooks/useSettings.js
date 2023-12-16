import { useState } from "react";

export const useSettings = (inputSettings = []) => {
  const defaultSettings = {};
  inputSettings.forEach((setting) => {
    defaultSettings[setting] = false;
  });

  const [settings, setSettings] = useState(defaultSettings);
  const [visible, setVisible] = useState(false);

  const toggleSetting = (key) => {
    setSettings((prev) => {
      prev[key] = !prev[key];
      return { ...prev };
    });
  };

  return {
    settings,
    toggleSetting,
    isVisible: visible,
    setVisibility: setVisible,
  };
};
