import { View, Text, StyleSheet, Image } from "react-native";
import { IconAsButton } from "./IconAsButton";

import { User } from "../data/user";

export const Greeting = ({
  greetingText = "",
  size = 48,
  isButton = false,
}) => {
  const { name, lastname, mail, image } = User;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={{
            uri: image,
          }}
          style={[styles.userAvatar, { width: size, height: size }]}
        />
        <View>
          <Text style={styles.text}>
            {greetingText ? `Cześć ${name}` : `${name} ${lastname}`}
          </Text>
          <Text style={styles.bolder}>
            {greetingText ? greetingText : mail}
          </Text>
        </View>
      </View>
      {isButton ? (
        <View>
          <IconAsButton iconName={"notifications-outline"} />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  userAvatar: {
    // width: 48,
    // height: 48,
    borderRadius: 50,
  },
  text: {
    fontFamily: "Lexend_400",
    fontVariationSettings: "'wght' 300",
    fontSize: 14,
    color: "#7B7B7B",
  },
  bolder: {
    fontFamily: "Lexend_500",
    fontVariationSettings: "'wght' 600",
    fontSize: 18,
    color: "#080613",
  },
});
