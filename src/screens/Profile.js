import { StyleSheet, Text, View, Switch, Appearance } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Greeting } from "../components/Greeting";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";

export const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((state) => !state);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>My Profile</Text>
      <Greeting size={64} />
      <View style={styles.separatorHoriontal}></View>
      <View style={styles.switchContainer}>
        <View style={styles.settingItem}>
          <View style={styles.iconContainer}>
            <Ionicons style={styles.icon} name="contrast-outline" />
          </View>
          <Text style={styles.text}>Dark Mode</Text>
        </View>
        <Switch
          trackColor={{ false: "#F1F1F3", true: "#00b877" }}
          ios_backgroundColor="#F1F1F3"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <View style={[styles.iconContainer, styles.iconContainer_red]}>
          <Ionicons
            style={[styles.icon, styles.icon_red]}
            name="log-out-outline"
          />
        </View>
        <Text style={styles.text}>Logout</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  text: {
    fontFamily: "Lexend_300",
    fontSize: 18,
  },
  title: {
    fontFamily: "Lexend_500",
    fontSize: 32,
    paddingVertical: 16,
  },
  separatorHoriontal: {
    width: "100%",
    height: 1,
    borderStyle: "solid",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#F1F1F3",
    marginBottom: 16,
    marginHorizontal: "auto",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingBottom: 16,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F1F3",
    height: 48,
    width: 48,
    padding: 4,
    borderRadius: 50,
  },
  iconContainer_red: { backgroundColor: "#FEF2F2" },
  icon: {
    fontSize: 20,
    color: "#080613",
  },
  icon_red: {
    color: "#EF4444",
  },
});
