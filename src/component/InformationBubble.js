import React from "react";
import { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const InformationBubble = ({ title, subTitle, value, iconName, iconSize }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <FontAwesome5 name={iconName} size={iconSize} color='black' />
        <Text style={styles.valueStyle}>{value}</Text>
      </View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.subTitleStyle}>{subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  valueStyle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  subTitleStyle: {
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 5,
    opacity: 0.5,
    textAlign: "center",
  },
});

export default InformationBubble;
