import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { routes } from "../constants/routes";
import { Home, Profile, Trail, Map, Splash } from "../screens";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.TRAIL}
        component={Trail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
