import { View, FlatList, StyleSheet, Text } from "react-native";
import { trails } from "../data/data.js";
import { TrailTail } from "./TrailTail.js";

export const ListHorizontal = () => {
  return (
    <View>
      <Text style={styles.header}>Popularne szlaki</Text>
      <FlatList
        data={trails}
        renderItem={({ item }) => <TrailTail {...item} size="" />}
        horizontal
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginBottom: 16,
  },
  header: {
    fontFamily: "Lexend_500",
    fontSize: 24,
    color: "#080613",
    paddingTop: 8,
    paddingBottom: 16,
  },
});
