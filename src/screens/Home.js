import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useTheme } from "../hooks/useTheme";
import { imageSize } from "../constants/imageSize.js";
import { spacing } from "../utils/designSystem";
import { Greeting } from "../components/Greeting.js";
import { Search } from "../components/Search.js";
import { TrailsList } from "../components/TrailList";
import { trails } from "../data/data.js";

export const Home = () => {
  const [results, setResults] = useState([]);
  const { theme } = useTheme();

  const handleSetResults = (data) => {
    setResults(data);
  };

  const data = results.length > 0 ? results : trails;

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[
        { paddingHorizontal: spacing.sm },
        { backgroundColor: theme.background },
        styles.safeArea,
      ]}
    >
      <Greeting greetingText="Jaki szlak dziś Cię trafi?" isButton={true} />
      <Search setResults={handleSetResults} />
      {results.length > 0 ? (
        <TrailsList
          isHorizontal={false}
          imageSize={imageSize.SMALL}
          headerText="Znalezione szlaki"
          data={data}
        />
      ) : (
        <>
          <TrailsList
            isHorizontal={true}
            headerText="Popularne Szlaki"
            data={data}
          />
          <TrailsList
            isHorizontal={false}
            imageSize={imageSize.SMALL}
            headerText="Polecane dla Ciebie"
            data={data.toReversed()}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  gap: {
    height: 16,
  },
});
