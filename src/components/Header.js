import { View, Text, StyleSheet, Image } from "react-native";
import { IconAsButton } from "./IconAsButton";

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/48",
          }}
          style={styles.userAvatar}
        />
        <View>
          <Text style={styles.text}>Cześć User</Text>
          <Text style={styles.bolder}>Jaki szlak dziś Cię trafi?</Text>
        </View>
      </View>

      <View>
        <IconAsButton iconName={"notifications-outline"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  userAvatar: {
    width: 48,
    height: 48,
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
