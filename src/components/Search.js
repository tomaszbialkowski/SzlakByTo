import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useTheme } from "../hooks/useTheme";
import { trails } from "../data/data";

export const Search = ({ setResults }) => {
  const { theme } = useTheme();
  const [query, setQuery] = useState("");

  const handleChange = (text) => {
    setQuery(text);
  };

  const handleSubmit = () => {
    const results = trails.filter((trail) =>
      trail.keywords.some((keyword) =>
        keyword.toLowerCase().includes(query.toLowerCase())
      )
    );
    console.log(
      "dane wysłane z search: ",
      results.map((res) => res.name)
    );
    setResults(results);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          { borderColor: theme.separator, backgroundColor: theme.background },
        ]}
      >
        <Ionicons
          style={[styles.icon, { color: theme.text }]}
          name="search-outline"
          size={20}
        />
        <TextInput
          style={[styles.input, { color: theme.separator }]}
          placeholder="Wpisz nazwę szlaku, pasmo górskie, miejscowość etc..."
          placeholderTextColor={theme.separator}
          value={query}
          onChangeText={handleChange}
          onSubmitEditing={handleSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  icon: {
    padding: 8,
  },
  input: {
    padding: 12,
    fontSize: 16,
  },
});
