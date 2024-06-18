import { StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../hooks/useTheme";

export const IconAsButton = ({ iconName }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.icon_container,
        { backgroundColor: theme.background, borderColor: theme.buttonBorder },
      ]}
    >
      <Ionicons name={iconName} style={[styles.icon, { color: theme.text }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon_container: {
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    width: 48,
    padding: 4,
    borderRadius: 50,
    borderWidth: 1,
  },
  icon: {
    fontSize: 20,
  },
});
