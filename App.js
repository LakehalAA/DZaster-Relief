import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TrainingSplash from "./src/screen/trainingSplash";
import CoursesScreen from "./src/screen/CoursesScreen";
import WatchingTutorial from "./src/screen/WatchingTutorial";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

//color 1: #6E78F7
//color 2: #C3C3C6

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function FeedScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={TrainingSplash} />
      <Stack.Screen name="CoursesScreen" component={CoursesScreen} />
      <Stack.Screen name="WatchingTutorial" component={WatchingTutorial} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#6E78F7",
            inactiveTintColor: "#C3C3C6",
            showLabel: true,
            labelStyle: {
              position: "absolute",
              top: 42,
              fontSize: 14,
            },
            iconStyle: {
              position: "absolute",
              top: 30,
            },
            keyboardHidesTabBar: true,
            style: {
              height: 0,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              position: "absolute",
              overflow: "hidden",
              left: 0,
              bottom: 0,
              right: 0,
              paddingHorizontal: 30,
            },
          }}
        >
          <Tab.Screen name="Learn" component={TrainingSplash} />
          <Tab.Screen name="CoursesScreen" component={CoursesScreen} />
          <Tab.Screen name="WatchingTutorial" component={WatchingTutorial} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  viewStyle: {
    height: 300,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 200,
    marginLeft: -50,
    borderBottomRightRadius: 250,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width + 100,
  },
  logoStyle: {
    color: "#fff",
    fontSize: 47,
    marginLeft: 40,
    marginTop: 30,
    fontWeight: "bold",
  },
  cardStyle: {
    height: 225,
    width: Dimensions.get("window").width - 40,
    marginHorizontal: 20,
    marginVertical: -5,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 18,
  },
  textInputStyle: {
    height: 45,
    width: Dimensions.get("window").width - 80,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: "#ECECEC",
    marginBottom: 10,
    paddingHorizontal: 20,
    fontSize: 14,
  },
  buttonStyle: {
    width: Dimensions.get("window").width - 80,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 40,
    backgroundColor: "#6E78F7",
  },
  buttonTextStyle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  errorStyle: {
    color: "#FF4678",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
});
