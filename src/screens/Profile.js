import { StyleSheet, Text, View, Switch, Appearance } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Greeting } from "../components/Greeting";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../hooks/useTheme";

export const Profile = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <Text style={[styles.title, { color: theme.text }]}>My Profile</Text>
      <Greeting size={64} />
      <View
        style={[
          styles.separatorHoriontal,
          { backgroundColor: theme.separator },
        ]}
      ></View>
      <View style={styles.switchContainer}>
        <View style={styles.settingItem}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: theme.iconWhiteBackground },
            ]}
          >
            <Ionicons style={styles.icon} name="contrast-outline" />
          </View>
          <Text style={[styles.text, { color: theme.text }]}>Dark Mode</Text>
        </View>
        <Switch
          trackColor={{ false: theme.light_300, true: theme.primary_500 }}
          ios_backgroundColor={theme.light_300}
          onValueChange={toggleTheme}
          value={isDark}
        />
      </View>
      <View style={styles.settingItem}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: theme.iconRedBackground },
          ]}
        >
          <Ionicons
            style={[styles.icon, styles.icon_red]}
            name="log-out-outline"
          />
        </View>
        <Text style={[styles.text, styles.icon_red]}>Logout</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
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
    height: StyleSheet.hairlineWidth,
    opacity: 0.5,
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
    height: 48,
    width: 48,
    padding: 4,
    borderRadius: 50,
  },
  icon: {
    fontSize: 20,
    color: "#080613",
  },
  icon_red: {
    color: "#EF4444",
  },
});
