import { Greeting } from "../src/components/Greeting";
import { Search } from "../src/components/Search";
import { ListHorizontal } from "../components/ListHorizontal";
import { ListVertical } from "../components/ListVertical";
import { useTheme } from "../src/hooks/useTheme";
import { spacing } from "../src/utils/designSystem";

import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";

export const Home = () => {
  const [results, setResults] = useState([]);

  const handleSetResults = (data) => {
    setResults(data);
    console.log(
      "dane ustawione w home: ",
      data.map((d) => d.name)
    );
  };

  const { theme } = useTheme();
  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { paddingHorizontal: spacing.md, paddingBottom: spacing.point },
        { backgroundColor: theme.background },
      ]}
    >
      <Greeting greetingText="Jaki szlak dziś Cię trafi?" isButton={true} />
      <Search setResults={handleSetResults} />
      <View style={styles.gap}></View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {results.length > 0 ? null : <ListHorizontal />}
        <ListVertical results={results} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flexGrow: 1,
  },
  gap: {
    height: 8,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 140,
  },
});
