import { View, StyleSheet, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Ionicons
          style={styles.icon}
          name="search-outline"
          size={20}
          color="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="Wpisz nazwę szlaku, pasmo górskie, miejscowość etc..."
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 16,
    color: "#999",
    fontSize: 16,
  },
  container: {
    paddingHorizontal: 16,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  icon: {
    padding: 8,
  },
});
