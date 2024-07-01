import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PolandOutline } from "../../assets/svg/PolandOutline";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "../hooks/useTheme";
import { trails } from "../data/data.js";
import { TrailTail } from "../components/TrailTail.js";
import { useState } from "react";
import { imageSize } from "../constants/imageSize.js";
import { Greeting } from "../components/Greeting.js";

const { width } = Dimensions.get("window");
const size = width * 0.95;

export const Map = () => {
  const [item, setItem] = useState("");
  const { theme } = useTheme();

  const handleTouch = (trailId) => {
    setItem(trails.find((trail) => trail.id === trailId));
  };

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <Greeting greetingText="Jaki szlak dziś Cię trafi?" isButton={true} />
      <View style={styles.mapContainer} width={size} height={size}>
        <PolandOutline width={size} height={size} />
        <TouchableOpacity
          style={[styles.iconContainer, styles.iconContainer_01]}
          onPress={() => handleTouch(1)}
        >
          <MaterialCommunityIcons
            size={18}
            name="circle-slice-8"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, styles.iconContainer_02]}
          onPress={() => handleTouch(2)}
        >
          <MaterialCommunityIcons
            size={18}
            name="circle-slice-8"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, styles.iconContainer_03]}
          onPress={() => handleTouch(3)}
        >
          <MaterialCommunityIcons
            size={18}
            name="circle-slice-8"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, styles.iconContainer_04]}
          onPress={() => handleTouch(4)}
        >
          <MaterialCommunityIcons
            size={18}
            name="circle-slice-8"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, styles.iconContainer_05]}
          onPress={() => handleTouch(5)}
        >
          <MaterialCommunityIcons
            size={18}
            name="circle-slice-8"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, styles.iconContainer_06]}
          onPress={() => handleTouch(6)}
        >
          <MaterialCommunityIcons
            size={18}
            name="circle-slice-8"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, styles.iconContainer_07]}
          onPress={() => handleTouch(7)}
        >
          <MaterialCommunityIcons
            size={18}
            name="circle-slice-8"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, styles.iconContainer_08]}
          onPress={() => handleTouch(8)}
        >
          <MaterialCommunityIcons
            size={18}
            name="circle-slice-8"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, styles.iconContainer_09]}
          onPress={() => handleTouch(9)}
        >
          <MaterialCommunityIcons
            size={18}
            name="circle-slice-8"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, styles.iconContainer_10]}
          onPress={() => handleTouch(10)}
        >
          <MaterialCommunityIcons
            size={18}
            name="circle-slice-8"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {item && (
        <View style={styles.trailContainer}>
          <TrailTail
            {...item}
            imageSize={imageSize.SMALL}
            style={styles.trail}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 8,
  },
  mapContainer: {
    position: "relative",
    marginHorizontal: "auto",
    // borderStyle: "solid",
    // borderColor: "red",
    // borderWidth: 1,
  },
  iconContainer: {
    position: "absolute",
    width: 30,
    height: 30,
  },
  iconContainer_01: {
    left: "14%",
    bottom: "34%",
  },
  iconContainer_02: {
    right: "26%",
    bottom: "6%",
  },
  iconContainer_03: {
    right: "28%",
    bottom: "26%",
  },
  iconContainer_04: {
    right: "46%",
    bottom: "14%",
  },
  iconContainer_05: {
    right: "34%",
    bottom: "11%",
  },
  iconContainer_06: {
    right: "17%",
    bottom: "10%",
  },
  iconContainer_07: {
    right: "43%",
    bottom: "26%",
  },
  iconContainer_08: {
    left: "20%",
    top: "9%",
  },
  iconContainer_09: {
    left: "52%",
    top: "11%",
  },
  iconContainer_10: {
    left: "62%",
    top: "46%",
  },
  icon: {
    fontSize: 28,
    color: "#00B877",
  },
  trailContainer: {
    flex: 1,
    justifyContent: "flex-end",
    //   borderStyle: "solid",
    //   borderColor: "blue",
    //   borderWidth: 1,
  },
});
