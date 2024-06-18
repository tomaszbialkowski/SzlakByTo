import { View, FlatList, StyleSheet, Text } from "react-native";
import { trails } from "../src/data/data.js";
import { TrailTail } from "../src/components/TrailTail.js";
import { useTheme } from "../src/hooks/useTheme.js";
import { spacing, fontSize } from "../src/utils/designSystem.js";

export const ListHorizontal = () => {
  const { theme } = useTheme();

  return (
    <View>
      <Text
        style={[
          styles.header,
          {
            color: theme.text,
            fontSize: fontSize.lg,
            paddingBottom: spacing.md,
            paddingTop: spacing.sm,
          },
        ]}
      >
        Popularne szlaki
      </Text>
      <FlatList
        data={trails}
        renderItem={({ item }) => <TrailTail {...item} size="" />}
        horizontal
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ marginBottom: spacing.md }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: "Lexend_500",
  },
});
