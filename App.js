import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Splash } from "./src/screens/Splash";
import { HomeStack } from "./src/navigators/HomeStack";

const loadFonts = async () => {
  await Font.loadAsync({
    Lexend_100: require("./assets/fonts/Lexend-100.ttf"),
    Lexend_200: require("./assets/fonts/Lexend-200.ttf"),
    Lexend_300: require("./assets/fonts/Lexend-300.ttf"),
    Lexend_400: require("./assets/fonts/Lexend-400.ttf"),
    Lexend_500: require("./assets/fonts/Lexend-500.ttf"),
    Lexend_600: require("./assets/fonts/Lexend-600.ttf"),
    Lexend_700: require("./assets/fonts/Lexend-700.ttf"),
    Lexend_800: require("./assets/fonts/Lexend-800.ttf"),
    Lexend_900: require("./assets/fonts/Lexend-900.ttf"),
  });
};

const BottomTab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "compass" : "compass-outline";
              } else if (route.name === "Splash") {
                iconName = focused ? "person" : "person-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#00b877",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              paddingTop: 8,
              height: 80,
            },
          })}
        >
          <BottomTab.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
            }}
          />
          <BottomTab.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
