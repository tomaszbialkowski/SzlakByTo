import React, { createContext, useState, useEffect } from "react";
import { Appearance } from "react-native";
import { colors } from "../utils/designSystem";

const themes = {
  light: {
    background: colors.white,
    text: colors.dark_900,
    iconRedBackground: colors.accent_100,
    iconWhiteBackground: colors.light_300,
    tabBarActiveTintColor: colors.primary_500,
    tabBarInactiveTintColor: colors.dark_200,
    separator: colors.dark_200,
    descriptionText: colors.dark_400,
    backgroundThumb: colors.white,
    buttonBorder: colors.light_400,
    primary: colors.primary_500,
    barStyle: "dark-content",
  },
  dark: {
    background: colors.dark_900,
    text: colors.light_300,
    tabBarActiveTintColor: colors.primary_500,
    tabBarInactiveTintColor: colors.light_300,
    iconRedBackground: colors.accent_700,
    iconWhiteBackground: colors.dark_200,
    separator: colors.dark_200,
    descriptionText: colors.dark_100,
    primary: colors.primary_500,
    backgroundThumb: colors.dark_500,
    buttonBorder: colors.dark_400,
    barStyle: "light-content",
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(themes[colorScheme]);
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  const toggleTheme = () => {
    setIsDark(!isDark);
    setTheme(isDark ? themes.light : themes.dark);
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDark(colorScheme === "dark");
      setTheme(themes[colorScheme]);
    });
    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
