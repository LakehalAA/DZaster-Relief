import React from "react";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const ConfinementView = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.profilePic}
          source={require("../../assets/profilePicture.jpg")}
        />
        <View style={styles.infoStyle}>
          <Text style={styles.nameStyle}>Lakehal Ahmed Amine</Text>
          <Text style={styles.numberOfDaysStyle}>07/15 Jours</Text>
          <View style={styles.barStyle}>
            <View style={styles.progressStyle}></View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("MyProfile")}>
          <Text style={styles.textButtonStyle}>Consulter Votre Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: Dimensions.get("window").width - 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6E78F7",
    borderRadius: 25,
    marginTop: 13,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  profilePic: {
    height: 58,
    width: 58,
    borderRadius: 50,
  },
  infoStyle: {
    marginLeft: 15
  },
  nameStyle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: -4,
    marginBottom: 4
  },
  numberOfDaysStyle: {
      color: '#fff',
      opacity: 0.7,
      fontSize: 10
  },
  barStyle: {
      width: Dimensions.get("window").width - 166,
      height: 10,
      borderRadius: 20,
      backgroundColor: '#626BDC',
      marginLeft: -4,
      marginTop: 2,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems:'center'
  },
  progressStyle:{
    width: Dimensions.get("window").width - 280,
      height: 3,
      opacity : 0.8,
      marginLeft: 4,
      backgroundColor: '#fff',
  },
  buttonStyle: {
      marginTop: 18,
      height: 35,
      width: 165,
      borderRadius: 30,
      borderWidth: 0.3,
      borderColor: '#fff',
      justifyContent: "center",
      alignItems: 'center',
  },
  textButtonStyle: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
  }
});

export default ConfinementView;
