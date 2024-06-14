import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

import splashAnimation from "../../assets/animations/splashAnimation.json";

export const Splash = () => {
  return (
    <LottieView
      source={splashAnimation}
      autoPlay
      loop
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
