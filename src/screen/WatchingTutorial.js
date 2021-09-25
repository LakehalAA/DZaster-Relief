import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TabBar } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Poppins_900Black,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { TabView, SceneMap } from "react-native-tab-view";
import Accordian from "../component/Accordion";
import { ScrollView } from "react-native-gesture-handler";

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
);

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "black" }}
    style={{ backgroundColor: "white", textColor: "black" }}
    renderLabel={({ route, focused, color }) => (
      <Text style={{ color: "black", margin: 8 }}>{route.title}</Text>
    )}
  />
);

const WatchingTutorial = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Course Content" },
    { key: "second", title: "Comments" },
  ]);
  const initialLayout = { width: Dimensions.get("window").width };
  const menu = [
    {
      title: "Section 1 : Introduction",
      data: [
        { key: "What is this about ?", value: true },
        { key: "Who is your trainer", value: false },
        { key: "Necessary dictionary", value: false },
      ],
    },
    {
      title: "Section 2 : CPR Basics",
      data: [
        { key: "Chicken Dominato", value: false },
        { key: "Peri Peri Chicken", value: false },
        { key: "Indie Tandoori Paneer", value: false },
      ],
    },
    {
      title: "Section 3 : DPL Basics",
      data: [
        { key: "Chicken Dominato", value: false },
        { key: "Peri Peri Chicken", value: false },
        { key: "Indie Tandoori Paneer", value: false },
      ],
    },
    {
      title: "Section 4 : Final Exam",
      data: [
        { key: "Chicken Dominato", value: false },
        { key: "Peri Peri Chicken", value: false },
        { key: "Indie Tandoori Paneer", value: false },
      ],
    },
  ];

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

  const FirstRoute = () => {
    const items = [];
    menu.forEach((item) => {
      items.push(<Accordian title={item.title} data={item.data} />);
    });
    return <ScrollView>{items}</ScrollView>;
  };

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 36,
          flexDirection: "row",
          height: 80,
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#0099FF",
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            borderRadius: 40,
            alignSelf: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 17,
            color: "white",
            fontFamily: "Poppins_700Bold",
            paddingLeft: 15,
          }}
        >
          Course content
        </Text>
      </View>

      <Image
        style={styles.stretchModal}
        source={require("../../assets/VideoPlayer.png")}
      />

      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
};

export default WatchingTutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  stretchModal: {
    borderRadius: 0,
    width: "100%",
  },
});
