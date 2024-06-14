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

export const TrailTail = ({
  name,
  imageName,
  distance,
  endpoints,
  duration,
  style,
  id,
}) => {
  const navigation = useNavigation();

  function onPress(id) {
    navigation.navigate(routes.TRAIL, { id });
  }

  const imageSource = images[imageName];

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.tailContainer, style && styles.tailContainer_thumb]}
      onPress={() => onPress(id)}
    >
      <Image
        source={imageSource}
        style={[styles.image, style && styles.image_thumb]}
      />
      <View
        style={[
          styles.descriptionWrapper,
          style && styles.descriptionWrapper_thumb,
        ]}
      >
        <View style={styles.descrition_headerWrapper}>
          <Text style={styles.description_header}>{name}</Text>
          <Text style={styles.description_markedText}>
            {distance}{" "}
            <Text
              style={[
                styles.description_text,
                style && styles.description_text_thumb,
              ]}
            >
              km
            </Text>
          </Text>
        </View>
        <View>
          <View style={styles.description_details}>
            <Ionicons
              name="trail-sign-outline"
              style={styles.description_icon}
            />
            <Text
              style={[
                styles.description_text,
                style && styles.description_text_thumb,
              ]}
            >
              {endpoints[0]} - {endpoints[1]}
            </Text>
          </View>
          <View style={styles.description_details}>
            <Ionicons
              name="footsteps-outline"
              style={styles.description_icon}
            />
            <Text
              style={[
                styles.description_text,
                style && styles.description_text_thumb,
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
    backgroundColor: "#fff",
    opacity: "0.9",
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
  },
  description_header: {
    fontFamily: "Lexend_500",
    fontSize: 16,
    flex: 1,
    color: "#080613",
  },
  description_markedText: {
    fontFamily: "Lexend_600",
    fontSize: 16,
    color: "#00b877",
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
    color: "#42404D",
  },
  description_icon: {
    fontSize: 18,
    color: "#00b877",
  },
  tailContainer_thumb: {
    alignItems: "flex-start",
    backgroundColor: "#fff",
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
  image_thumb: { width: 100, height: 100 },
  descriptionWrapper_thumb: {
    flexShrink: 1,
    position: "static",
    top: 0,
    paddingTop: 4,
    paddingBottom: 0,
  },
  description_text_thumb: { flexShrink: 1 },
});
