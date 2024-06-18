import { View, StyleSheet, Text, FlatList } from "react-native";
import { trails } from "../data/data.js";
import { TrailTail } from "./TrailTail.js";
import { useTheme } from "../hooks/useTheme.js";
import { spacing } from "../utils/designSystem.js";
import { useState } from "react";

export const TrailsList = ({ isHorizontal, imageSize, headerText }) => {
  const { theme } = useTheme();

  const [results, setResults] = useState([]);

  const handleSetResults = (data) => {
    setResults(data);
    console.log(
      "dane ustawione w home: ",
      data.map((d) => d.name)
    );
  };
  const data = results && results.length > 0 ? results : trails;
  return (
    <>
      <View>
        <Text style={[styles.headerText, { color: theme.text }]}>
          {headerText}
        </Text>
      </View>
      <FlatList
        data={data}
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
