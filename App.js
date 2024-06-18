import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider, ThemeContext } from "./src/context/ThemeContext";
import { TabNavigator } from "./src/navigators/TabNavigator";
import { StatusBar } from "react-native";
import { useLoadFonts } from "./src/hooks/useLoadFonts";

const MainApp = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <StatusBar barStyle={theme.barStyle} backgroundColor={theme.background} />
      <SafeAreaProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default function App() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
