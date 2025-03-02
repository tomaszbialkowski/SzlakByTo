import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { images } from "../data/images";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../constants/routes";
import { useTheme } from "../hooks/useTheme";

export const TrailTail = ({
  name,
  imageName,
  distance,
  endpoints,
  duration,
  imageSize,
  id,
}) => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const imageSource = images[imageName];

  function onPress(id) {
    navigation.navigate(routes.TRAIL, { id });
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.tailContainer,
        imageSize === "small" && styles.tailContainer_small,
        { backgroundColor: theme.backgroundThumb },
      ]}
      onPress={() => onPress(id)}
    >
      <Image
        source={imageSource}
        style={[styles.image, imageSize === "small" && styles.image_small]}
      />
      <View
        style={[
          styles.descriptionWrapper,
          imageSize === "small" && styles.descriptionWrapper_small,
          { backgroundColor: theme.background },
        ]}
      >
        <View style={styles.desc_header}>
          <Text style={[styles.trailName, { color: theme.text }]}>{name}</Text>
          <Text style={[styles.desc_markedText, { color: theme.primary }]}>
            {distance}
            <Text
              style={[
                styles.desc_text,
                imageSize === "small" && styles.desc_text_small,
                { color: theme.text },
              ]}
            >
              {" km"}
            </Text>
          </Text>
        </View>
        <View>
          <View style={styles.description_details}>
            <Ionicons
              name="trail-sign-outline"
              style={[styles.description_icon, { color: theme.primary }]}
            />
            <Text
              style={[
                styles.desc_text,
                imageSize === "small" && styles.desc_text_small,
                { color: theme.text },
              ]}
            >
              {endpoints[0]} - {endpoints[1]}
            </Text>
          </View>
          <View style={styles.description_details}>
            <Ionicons
              name="footsteps-outline"
              style={[styles.description_icon, { color: theme.primary }]}
            />
            <Text
              style={[
                styles.desc_text,
                imageSize === "small" && styles.desc_text_small,
                { color: theme.text },
              ]}
            >
              {duration} Dni Wędrówki
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tailContainer: {
    paddingRight: 16,
    position: "relative",
  },
  image: {
    width: 240,
    height: 240,
    borderRadius: 16,
  },
  descriptionWrapper: {
    position: "absolute",
    width: 224,
    opacity: "0.9",
    borderRadius: 8,
    left: 8,
    bottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  desc_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
    gap: 4,
    opacity: 1,
  },
  trailName: {
    fontFamily: "Lexend_500",
    fontSize: 16,
    flex: 1,
  },
  desc_markedText: {
    fontFamily: "Lexend_600",
    fontSize: 16,
    flexShrink: 1,
  },
  description_details: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingBottom: 4,
  },
  desc_text: {
    flexShrink: 1,
    fontFamily: "Lexend_400",
    fontSize: 14,
  },
  description_icon: {
    fontSize: 18,
  },
  tailContainer_small: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#999999",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
      web: {
        boxShadow: "0 2px 3px rgba(0,0,0,0.3)",
      },
    }),
    marginBottom: 10,
    paddingVertical: 8,
    paddingLeft: 8,
  },
  image_small: { width: 80, height: 80 },
  descriptionWrapper_small: {
    flexGrow: 1,
    position: "static",
    top: 0,
  },
  desc_text_small: { flexShrink: 1 },
});
