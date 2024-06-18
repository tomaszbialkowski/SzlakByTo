import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { images } from "../src/data/images";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../src/constants/routes";
import { useTheme } from "../src/hooks/useTheme";

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

  function onPress(id) {
    navigation.navigate(routes.TRAIL, { id });
  }
  console.log(`styles.image_${imageSize}`);
  const { theme } = useTheme();
  const imageSource = images[imageName];

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.tailContainer,
        imageSize == "small" && styles.tailContainer_small,
        { backgroundColor: theme.backgroundThumb },
      ]}
      onPress={() => onPress(id)}
    >
      <Image
        source={imageSource}
        style={[styles.image, imageSize == "small" && styles.image_small]}
      />
      <View
        style={[
          styles.descriptionWrapper,
          imageSize == "small" && styles.descriptionWrapper_small,
          { backgroundColor: theme.background },
        ]}
      >
        <View style={styles.descrition_headerWrapper}>
          <Text style={[styles.description_header, { color: theme.text }]}>
            {name}
          </Text>
          <Text
            style={[styles.description_markedText, { color: theme.primary }]}
          >
            {distance}
            <Text
              style={[
                styles.description_text,
                imageSize == "small" && styles.description_text_small,
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
                styles.description_text,
                imageSize == "small" && styles.description_text_small,
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
                styles.description_text,
                imageSize == "small" && styles.description_text_small,
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
    flexDirection: "row",
    paddingRight: 16,
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 16,
    position: "relative",
  },
  descriptionWrapper: {
    position: "absolute",
    width: 264,
    opacity: "0.85",
    borderRadius: 8,
    left: 8,
    bottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  descrition_headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
    gap: 4,
    opacity: 1,
  },
  description_header: {
    fontFamily: "Lexend_500",
    fontSize: 16,
    flex: 1,
  },
  description_markedText: {
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
  description_text: {
    fontFamily: "Lexend_400",
    fontSize: 14,
  },
  description_icon: {
    fontSize: 18,
  },
  tailContainer_small: {
    alignItems: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#999999",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
      web: {
        boxShadow: "0 2px 3px rgba(0,0,0,0.3)",
      },
    }),
  },
  image_small: { width: 100, height: 100 },
  descriptionWrapper_small: {
    flexShrink: 1,
    position: "static",
    top: 0,
    paddingTop: 4,
    paddingBottom: 0,
  },
  description_text_small: { flexShrink: 1 },
});
