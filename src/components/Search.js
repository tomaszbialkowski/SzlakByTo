import { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
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
    if (query !== "") {
      const results = trails.filter((trail) =>
        trail.keywords.some((keyword) =>
          keyword.toLowerCase().includes(query.toLowerCase())
        )
      );
      setResults(results);
    } else {
      setResults([]);
    }
  };

  const handleDeleteQuery = () => {
    setQuery("");
    setResults([]);
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
        {query && (
          <TouchableOpacity onPress={handleDeleteQuery}>
            <Ionicons
              style={[styles.icon, { color: theme.text }]}
              name="close-circle-outline"
              size={20}
            />
          </TouchableOpacity>
        )}
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
    paddingLeft: 8,
    paddingRight: 4,
  },
  icon: {
    padding: 4,
  },
  input: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    fontSize: 16,
    flex: 1,
  },
});
