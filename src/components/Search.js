import { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useTheme } from "../hooks/useTheme";
import { trails } from "../data/data";

export const Search = ({ setResults }) => {
  const { theme } = useTheme();
  const [query, setQuery] = useState("");
  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (query) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
    }
  }, [query]);

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
          <AnimatedTouchableOpacity
            onPress={handleDeleteQuery}
            style={{ opacity: fadeAnim }}
          >
            <Ionicons
              style={[styles.icon, { color: theme.text }]}
              name="close-circle-outline"
              size={20}
            />
          </AnimatedTouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
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
