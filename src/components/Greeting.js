import { View, Text, StyleSheet, Image } from "react-native";

import { IconAsButton } from "./IconAsButton";
import { User } from "../data/user";
import { useTheme } from "../hooks/useTheme";

export const Greeting = ({
  greetingText = "",
  size = 48,
  isButton = false,
}) => {
  const { name, lastname, mail, image } = User;
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.wrapper}>
        <Image
          source={{
            uri: image,
          }}
          style={[styles.userAvatar, { width: size, height: size }]}
        />
        <View>
          <Text style={[styles.text, { color: theme.separator }]}>
            {greetingText ? `Cześć ${name}` : `${name} ${lastname}`}
          </Text>
          <Text style={[styles.bolder, { color: theme.text }]}>
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
    paddingTop: 8,
    // paddingBottom: 16,
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
  },
  bolder: {
    fontFamily: "Lexend_500",
    fontVariationSettings: "'wght' 600",
    fontSize: 18,
  },
});
