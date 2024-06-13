import { View, StyleSheet, Text } from "react-native";
import { trails } from "../data/data.js";
import { TraillTail } from "./TraillTail.js";

export const ListVertical = () => {
  return (
    <View style={styles.componentContainer}>
      <Text style={styles.header}>Polecane dla Ciebie</Text>
      {trails.toReversed().map((item) => (
        <TraillTail {...item} style="thumb" key={item.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    padding: 16,
    paddingBottom: 0,
    gap: 12,
  },
  header: {
    fontFamily: "Lexend",
    fontVariationSettings: "'wght' 600",
    fontSize: 24,
    color: "#080613",
  },
});
