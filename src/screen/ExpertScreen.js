import React, { Component } from "react";
import { useState } from "react";
import {
  View,
  Image,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default class ExpertScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar
          translucent
          backgroundColor="#6E78F7"
          barStyle="light-content"
        />
        <View style={styles.header}></View>
        <View style={styles.container}>
          <View style={styles.expertCard}>
            <Image
              style={styles.expertPic}
              source={{
                uri: "https://thispersondoesnotexist.com/image",
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingBottom: 10,
                textTransform: "capitalize",
              }}
            >
              Dr. Syphax Chergui
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "normal" }}>
              B.Sc, MBBS, DDVL, MD- Dermitologist
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
                paddingTop: 35,
              }}
            >
              <Text>16 yrs. Experience</Text>
              <Text>89% (4384 votes)</Text>
            </View>
            <View style={styles.picsGrid}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://source.unsplash.com/random",
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: "https://source.unsplash.com/random",
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: "https://source.unsplash.com/random",
                }}
              />
              <Image
                style={styles.image}
                source={{
                  uri: "https://source.unsplash.com/random",
                }}
              />
            </View>
          </View>
          <View style={styles.contactCard}>
            <View
              style={{
                height: 50,
                marginTop: 10,
                marginHorizontal: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Contact Via Phone</Text>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 40,
                  backgroundColor: "#FCFCFC",
                  borderColor: "#aaa",
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#6E78F766",
                  color: "#6E78F7",
                }}
              >
                <Text style={{ color: "#6E78F7" }}>Call</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 75,
                marginHorizontal: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Contact Via Mail</Text>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 40,
                  backgroundColor: "#FCFCFC",
                  borderColor: "#aaa",
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#6E78F766",
                  color: "#6E78F7",
                }}
              >
                <Text style={{ color: "#6E78F7" }}>Send Mail</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#eee",
                marginHorizontal: 20,
              }}
            ></View>
            <View
              style={{
                height: 75,
                marginHorizontal: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Contact Via Mail</Text>
              <Text style={{ color: "#6E78F7", paddingHorizontal: 10 }}>
                9:30AM - 08:00PM
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 125,
    zIndex: 3,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#6E78F7",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    paddingTop: 90,
    paddingBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 2,
  },
  expertCard: {
    backgroundColor: "#FCFCFC",
    height: 280,
    width: "100%",
    zIndex: 2,
    borderRadius: 20,
    marginTop: -50,

    flexDirection: "column",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,

    elevation: 9,
  },
  expertPic: {
    height: 100,
    width: 100,
    backgroundColor: "#333",
    borderRadius: 100,
    alignSelf: "center",
    marginTop: -50,
    borderColor: "#fff",
    borderWidth: 6,
  },
  image: {
    backgroundColor: "#aaa",
    height: 60,
    aspectRatio: 1,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  picsGrid: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contactCard: {
    backgroundColor: "#FCFCFC",
    width: "100%",
    marginTop: 20,
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,

    elevation: 9,
  },
  container: {
    padding: 20,
  },
});
