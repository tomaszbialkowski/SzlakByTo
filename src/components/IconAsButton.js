import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const IconAsButton = ({ iconName }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons style={{}} name={iconName} size={20} color="#000" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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
});
