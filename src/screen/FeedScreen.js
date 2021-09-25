import React from "react";
import { useState } from "react";
import {
  View,
  Image,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import InformationBubble from "../component/InformationBubble";
import ConfinementView from "../component/ConfinementView";
import StatsView from "../component/StatsView";

const FeedScreen = () => {
  const [connected, setConnected] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const data = ["0", "1"];
  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="#6E78F7"
        barStyle="light-content"
      />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Covidek</Text>
        <View style={styles.headerRightView}>
          <View style={{ flexDirection: "row", marginRight: 20, opacity: 0.8 }}>
            <Text style={styles.wilayaText}>Batna</Text>
            <Ionicons
              name="caret-down"
              size={12}
              color="#fff"
              style={{ marginTop: 4 }}
            />
          </View>
          <Ionicons name="notifications-outline" size={28} color="#fff" />
        </View>
      </View>
      {connected ? (
        <View style={styles.bubblesStyle}>
          <InformationBubble
            title="BPM"
            subTitle="Votre rythme cardiaque"
            value={76}
            iconName="heartbeat"
            iconSize={24}
          />
          <InformationBubble
            title="Temperature"
            subTitle="Votre temperature du corps"
            value={38}
            iconName="temperature-low"
            iconSize={24}
          />
          <InformationBubble
            title="Saturation"
            subTitle="Degre de saturation de votre corps"
            value={12}
            iconName="atom"
            iconSize={24}
          />
        </View>
      ) : (
        <View style={styles.ncStyle}>
          <View style={styles.ncContainer}>
            <View style={styles.ncViewStyle}>
              <Image
                source={require("../../assets/Bracelet.png")}
                style={styles.ncImageStyle}
              />
              <Text style={styles.ncTextStyle}>
                Bracelet {"\n"}Non Connecté
              </Text>
            </View>
            <TouchableOpacity
              onPress={async () => {
                setLoaded(true);
                setTimeout(() => {
                  setConnected(true);
                  ToastAndroid.showWithGravity(
                    "Bracelet connecté !",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  );
                }, 1000);
              }}
            >
              <View style={styles.ncButtonStyle}>
                {loaded ? (
                  <Image
                    source={require("../../assets/loading.gif")}
                    style={{ height: 20, width: 60 }}
                  />
                ) : (
                  <Text style={styles.ncButtonTextStyle}>Connecter</Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View style={styles.confinementContainer}>
        <View style={styles.confinementTextView}>
          <Text style={styles.confinementText}>VOTRE CONFINEMENT</Text>
          <Ionicons name="chevron-forward" size={16} color="#6E78F7" />
        </View>
        <ConfinementView />
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.confinementTextView}>
          <Text style={styles.confinementText}>STATS DE LA WILAYA</Text>
          <Ionicons name="chevron-forward" size={16} color="#6E78F7" />
        </View>
      </View>
      <FlatList
        pagingEnabled={true}
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={(item) => {
          console.log(item);
          return (
            <View
              style={
                item.item === "0"
                  ? styles.statsViewStyle
                  : styles.statsViewStyle2
              }
            >
              <StatsView id={item.item} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 130,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#6E78F7",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 21,
    color: "#fff",
  },
  headerRightView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  wilayaText: {
    fontSize: 13,
    color: "#fff",
    marginRight: 5,
  },
  bubblesStyle: {
    height: 100,
    width: Dimensions.get("window").width,
    marginTop: -30,
    marginBottom: 30,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ncStyle: {
    marginHorizontal: 30,
    marginTop: -40,
    marginBottom: 10,
  },
  ncContainer: {
    height: 130,
    width: Dimensions.get("window").width - 60,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 30,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  ncViewStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 173,
  },
  ncImageStyle: {
    height: 50,
    width: 50,
    borderRadius: 20,
    marginRight: 6,
  },
  ncTextStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ncButtonStyle: {
    height: 33,
    width: 90,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#0e0e0e",
    justifyContent: "center",
    alignItems: "center",
  },
  ncButtonTextStyle: {
    fontSize: 12,
    color: "#0e0e0e",
  },
  confinementContainer: {
    width: Dimensions.get("window").width - 60,
    marginHorizontal: 30,
    marginTop: 25,
  },
  statsContainer: {
    width: Dimensions.get("window").width - 60,
    marginHorizontal: 30,
    marginTop: 30,
  },
  confinementTextView: {
    justifyContent: "space-between",
    paddingHorizontal: 25,
    alignItems: "center",
    flexDirection: "row",
  },
  confinementText: {
    color: "#6E78F7",
    fontSize: 14,
    fontWeight: "bold",
  },
  statsViewStyle: {
    height: 235,
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 30,
    marginRight: 20,
  },
  statsViewStyle2: {
    height: 235,
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight: 30,
  },
});

export default () => {
  return (
    <SafeAreaProvider>
      <FeedScreen />
    </SafeAreaProvider>
  );
};
