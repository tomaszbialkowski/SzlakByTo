import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Main } from "./src/screens/Main";
import { SplashScreen } from "./src/screens/SplashScreen";

const loadFonts = async () => {
  await Font.loadAsync({
    Lexend: require("./assets/fonts/Lexend.ttf"),
    bold: require("./assets/fonts/Lexend-Black.ttf"),
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
              // paddingBottom: 8,
              height: 80,
            },
          })}
        >
          <BottomTab.Screen
            name="Home"
            component={Main}
            options={{
              headerShown: false,
            }}
          />
          <BottomTab.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
