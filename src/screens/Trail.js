import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { trails } from "../data/data.js";
import { images } from "../data/images";
import { useTheme } from "../hooks/useTheme.js";

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
  const { theme } = useTheme();

  const { width } = useWindowDimensions();
  const imageSource = images[imageName];

  return (
    <ScrollView
      style={[styles.scrollArea, { backgroundColor: theme.background }]}
    >
      <Image source={imageSource} style={[styles.image, { width: width }]} />
      <View
        style={[styles.textContainer, { backgroundColor: theme.background }]}
      >
        <Text style={[styles.header, { color: theme.text }]}>{name}</Text>
        <Text style={[styles.text, { color: theme.text }]}>
          <Ionicons
            name="trail-sign-outline"
            style={[styles.description_icon, { color: theme.primary }]}
          />
          {endpoints[0]} - {endpoints[1]}
          {distance} km
          <Ionicons
            name="footsteps-outline"
            style={[styles.description_icon, { color: theme.primary }]}
          />
          {duration} Dni Wędrówki
        </Text>
        <Text style={[styles.text, { color: theme.text }, styles.padding]}>
          {description}
        </Text>
        <View style={styles.padding_sm}>
          <Text style={[styles.text, { color: theme.text }]}>
            <Foundation
              name="mountains"
              style={[styles.description_icon, { color: theme.primary }]}
            />
            Pasma górskie:
          </Text>
          <Text style={[styles.text, { color: theme.text }]}>{range}</Text>
        </View>
        <View style={styles.padding_sm}>
          <Text style={[styles.text, { color: theme.text }]}>
            <Foundation
              name="mountains"
              style={[styles.description_icon, { color: theme.primary }]}
            />
            Najważniejsze szczyty:
          </Text>
          <Text style={[styles.text, { color: theme.text }]}>{peaks}</Text>
        </View>
        <View style={styles.padding_sm}>
          <Text style={[styles.text, { color: theme.text }]}>
            <MaterialCommunityIcons
              name="home-city-outline"
              style={[styles.description_icon, { color: theme.primary }]}
            />
            Miasta na szlaku:
          </Text>
          <Text style={[styles.text, { color: theme.text }]}> {towns}</Text>
        </View>
        <Text style={[styles.text, { color: theme.text }]}>
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
  scrollArea: {},
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
  },
});
