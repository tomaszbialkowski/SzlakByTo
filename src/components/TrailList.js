import { View, StyleSheet, Text, FlatList } from "react-native";
import { trails } from "../data/data.js";
import { TrailTail } from "./TrailTail.js";
import { useTheme } from "../hooks/useTheme.js";
import { spacing } from "../utils/designSystem.js";

export const TrailsList = ({ isHorizontal, imageSize, headerText }) => {
  const { theme } = useTheme();

  return (
    <>
      <View>
        <Text style={[styles.headerText, { color: theme.text }]}>
          {headerText}
        </Text>
      </View>
      <FlatList
        data={trails}
        renderItem={({ item }) => (
          <TrailTail {...item} imageSize={imageSize} key={item.id} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ marginBottom: spacing.md }}
        horizontal={isHorizontal ? true : false}
        style={[
          styles.flatList,
          isHorizontal ? styles.listHorizontal : styles.listVertical,
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Lexend_500",
    fontSize: 22,
    paddingVertical: 4,
  },
  listHorizontal: {
    flexGrow: 0,
    // paddingTop: 4,
  },
  listVertical: {
    flex: 1,
  },
});
