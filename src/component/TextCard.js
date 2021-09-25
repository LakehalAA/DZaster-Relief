import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_900Black,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

const TextCard = (props) => {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.Number}>{props.number}</Text>
      <Text style={styles.Title}>{props.title}</Text>
    </View>
  );
};

export default TextCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 142,
    width: 142,
    flexDirection: "column",
    backgroundColor: "#F5F5F7",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginRight: 20,
  },
  Number: {
    fontFamily: "Poppins_900Black",
    fontSize: 46,
    top: 5,
  },
  Title: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    textAlign: "center",
    top: -18,
  },
  stretch: {
    height: "100%",
    width: "100%",
  },
});
