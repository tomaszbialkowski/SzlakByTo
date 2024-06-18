import { View, StyleSheet, Text } from "react-native";
import { trails } from "../src/data/data.js";
import { TrailTail } from "../src/components/TrailTail.js";
import { useTheme } from "../src/hooks/useTheme.js";

export const ListVertical = ({ results }) => {
  const { theme } = useTheme();
  console.log(
    "trails w VL",
    trails.map((t) => t.name)
  );
  console.log("trails w VL", results);

  const datas = results && results.length > 0 ? results : trails;

  return (
    <View style={styles.componentContainer}>
      <Text style={[styles.header, { color: theme.text }]}>
        Polecane dla Ciebie
      </Text>
      {datas.toReversed().map((trail) => (
        <TrailTail {...trail} style="thumb" key={trail.id} />
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
  },
});
