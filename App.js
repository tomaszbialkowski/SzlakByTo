import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SplashScreen } from "./src/screens/SplashScreen";
SplashScreen;

export default function App() {
  return (
    <SafeAreaView>
      <Text style={styles.text}>SzlakByTo</Text>
    </SafeAreaView>
  );
}
