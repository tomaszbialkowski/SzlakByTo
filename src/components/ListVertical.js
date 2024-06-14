import { View, StyleSheet, Text } from "react-native";
import { trails } from "../data/data.js";
import { TrailTail } from "./TrailTail.js";

export const ListVertical = () => {
  return (
    <View style={styles.componentContainer}>
      <Text style={styles.header}>Polecane dla Ciebie</Text>
      {trails.toReversed().map((item) => (
        <TrailTail {...item} style="thumb" key={item.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    paddingTop: 16,
    paddingBottom: 0,
    gap: 12,
  },
  header: {
    fontFamily: "Lexend_500",
    fontSize: 24,
    color: "#080613",
  },
});
