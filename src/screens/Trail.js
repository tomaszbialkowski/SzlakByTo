import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
  SafeAreaView,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { trails } from "../data/data.js";
import { images } from "../data/images";

export const Trail = ({ navigation, route }) => {
  const { params } = route;
  const {
    name,
    imageName,
    description,
    distance,
    endpoints,
    range,
    peaks,
    towns,
    color,
    duration,
  } = trails.find((trail) => trail.id === params.id);

  const { width } = useWindowDimensions();
  console.log(width);
  const imageSource = images[imageName];

  return (
    <ScrollView style={styles.scrollArea}>
      <Image source={imageSource} style={[styles.image, { width: width }]} />
      <View style={styles.textContainer}>
        <Text style={styles.header}>{name}</Text>
        <Text style={styles.text}>
          <Ionicons name="trail-sign-outline" style={styles.description_icon} />
          {endpoints[0]} - {endpoints[1]}
          {distance} km
          <Ionicons name="footsteps-outline" style={styles.description_icon} />
          {duration} Dni Wędrówki
        </Text>
        <Text style={[styles.text, styles.padding]}>{description}</Text>
        <View style={styles.padding_sm}>
          <Text style={styles.text}>
            <Foundation name="mountains" style={styles.description_icon} />
            Pasma górskie:
          </Text>
          <Text style={styles.text}>{range}</Text>
        </View>
        <View style={styles.padding_sm}>
          <Text style={styles.text}>
            <Foundation name="mountains" style={styles.description_icon} />
            Najważniejsze szczyty:
          </Text>
          <Text style={styles.text}>{peaks}</Text>
        </View>
        <View style={styles.padding_sm}>
          <Text style={styles.text}>
            <MaterialCommunityIcons
              name="home-city-outline"
              style={styles.description_icon}
            />
            Miasta na szlaku:
          </Text>
          <Text style={styles.text}> {towns}</Text>
        </View>
        <Text style={styles.text}>
          Kolor szlaku:
          <MaterialCommunityIcons
            size={18}
            name="circle-slice-8"
            color={color}
          />
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollArea: {
    // flexGrow: 1,
  },
  header: {
    padding: 16,
    fontFamily: "Lexend_500",
    fontSize: 32,
    color: "#42404D",
    letterSpacing: "-2",
  },
  image: {
    height: 540,
  },
  textContainer: {
    width: "100%",
    height: "auto",
    paddingBottom: 64,
    backgroundColor: "#fff",
    marginTop: -24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.5,
        shadowRadius: 24,
      },
      android: {
        elevation: 5,
      },
      web: {
        boxShadow: "0 -2px 3px rgba(0,0,0,0.3)",
      },
    }),
  },
  text: {
    fontFamily: "Lexend_300",
    color: "#080613",
    fontSize: 16,
    paddingHorizontal: 16,
    textAlign: "auto",
  },
  padding: {
    paddingVertical: 24,
  },
  padding_sm: {
    paddingVertical: 8,
  },
  description_icon: {
    fontSize: 18,
    color: "#00b877",
  },
});
