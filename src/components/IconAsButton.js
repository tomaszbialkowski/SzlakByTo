import { StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const IconAsButton = ({ iconName }) => {
  return (
    <TouchableOpacity style={styles.icon_container}>
      <Ionicons name={iconName} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon_container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 48,
    width: 48,
    padding: 4,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  icon: {
    fontSize: 20,
    color: "#080613",
  },
});
