import { View, FlatList, StyleSheet, Text } from "react-native";
import { trails } from "../data/data.js";
import { TraillTail } from "./TraillTail.js";

export const ListHorizontal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Popularne szlaki</Text>
      <FlatList
        data={trails}
        renderItem={({ item }) => <TraillTail {...item} size="" />}
        horizontal
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 8,
    paddingHorizontal: 16,
  },
  contentContainer: {
    marginBottom: 16,
  },
  header: {
    fontFamily: "Lexend",
    fontVariationSettings: "'wght' 600",
    fontSize: 24,
    color: "#080613",
    paddingTop: 8,
    paddingBottom: 16,
  },
});
