import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    Lexend_100: require("../../assets/fonts/Lexend-100.ttf"),
    Lexend_200: require("../../assets/fonts/Lexend-200.ttf"),
    Lexend_300: require("../../assets/fonts/Lexend-300.ttf"),
    Lexend_400: require("../../assets/fonts/Lexend-400.ttf"),
    Lexend_500: require("../../assets/fonts/Lexend-500.ttf"),
    Lexend_600: require("../../assets/fonts/Lexend-600.ttf"),
    Lexend_700: require("../../assets/fonts/Lexend-700.ttf"),
    Lexend_800: require("../../assets/fonts/Lexend-800.ttf"),
    Lexend_900: require("../../assets/fonts/Lexend-900.ttf"),
  });
};
