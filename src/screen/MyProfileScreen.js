import React from "react";
import { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const MyProfileScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor='#efefef'
        barStyle='light-content'
      />
      <View style={styles.container}>
        <Image
          style={styles.profilePic}
          source={require("../../assets/profilePicture.jpg")}
        />
        <Text style={styles.nameStyle}>Lakehal Ahmed Amine</Text>
        <Text style={styles.numberOfDaysStyle}>07/15</Text>
        <View style={styles.barStyle}>
          <View style={styles.progressStyle}></View>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => console.log("")}>
          <Text style={styles.textButtonStyle}>Complete your profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.champ}>
        <Text style={styles.labelStyle}>Nom {'&'} Prenom</Text>
        <Text style={styles.inputValueStyle}>Lakehal Ahmed Amine</Text>
      </View>
      <View style={styles.champ}>
        <Text style={styles.labelStyle}>Numero Carte Nationale</Text>
        <Text style={styles.inputValueStyle}>002 735 408</Text>
      </View>
      <View style={styles.champ}>
        <Text style={styles.labelStyle}>Numero telephone</Text>
        <Text style={styles.inputValueStyle}>0552 339 836</Text>
      </View>
      <View style={styles.champ}>
        <Text style={styles.labelStyle}>E-mail</Text>
        <Text style={styles.inputValueStyle}>ia_lakehal@esi.dz</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 280,
    width: Dimensions.get("window").width - 40,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6E78F7",
    borderRadius: 25,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  profilePic: {
    height: 85,
    width: 85,
    borderRadius: 50,
  },
  infoStyle: {
    marginLeft: 15,
  },
  nameStyle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20
  },
  numberOfDaysStyle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 'bold'
  },
  barStyle: {
    width: Dimensions.get("window").width - 140,
    height: 10,
    borderRadius: 20,
    backgroundColor: "#626BDC",
    marginLeft: -4,
    marginTop: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  progressStyle: {
    width: Dimensions.get("window").width - 260,
    height: 3,
    opacity: 0.8,
    marginLeft: 4,
    backgroundColor: "#fff",
  },
  buttonStyle: {
    marginTop: 15,
    height: 34,
    width: 190,
    borderRadius: 30,
    borderWidth: 0.3,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  textButtonStyle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  champ: {
    height: 80,
    width: Dimensions.get("window").width - 40,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 10,
  },
  labelStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#c3c3c4',
    marginHorizontal: 20
  },
  inputValueStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 50,
    marginVertical: 4
  }
});

export default () => {
  return (
    <SafeAreaProvider>
      <MyProfileScreen />
    </SafeAreaProvider>
  );
};
