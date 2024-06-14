import { Greeting } from "../components/Greeting";
import { Search } from "../components/Search";
import { ListHorizontal } from "../components/ListHorizontal";
import { ListVertical } from "../components/ListVertical";

import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View } from "react-native";

export const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Greeting greetingText="Jaki szlak dziś Cię trafi?" isButton={true} />
      <Search />
      <View style={styles.gap}></View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ListHorizontal />
        <ListVertical />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingBottom: 1,
    paddingHorizontal: 16,
  },
  gap: {
    height: 8,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 140,
  },
});
