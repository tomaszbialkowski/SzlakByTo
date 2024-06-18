import { TrailsList } from "../components/TrailList";
import { useTheme } from "../hooks/useTheme";
import { spacing } from "../utils/designSystem";
import { imageSize } from "../constants/imageSize.js";
import { Greeting } from "../components/Greeting.js";
import { Search } from "../components/Search.js";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { trails } from "../data/data.js";
import { TrailTail } from "../components/TrailTail.js";

export const Home = () => {
  // const [results, setResults] = useState([]);

  // const handleSetResults = (data) => {
  //   setResults(data);
  //   console.log(
  //     "dane ustawione w home: ",
  //     data.map((d) => d.name)
  //   );
  // };
  const data = trails;
  const { theme } = useTheme();

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
      {/* <Search setResults={handleSetResults} /> */}
      <Search />
      <TrailsList isHorizontal={true} headerText="Popularne Szlaki" />
      <TrailsList
        isHorizontal={false}
        imageSize={imageSize.SMALL}
        headerText="Polecane dla Ciebie"
      />
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
