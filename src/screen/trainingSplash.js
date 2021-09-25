import { StatusBar } from "expo-status-bar";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  Poppins_900Black,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const TrainingSplash = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_300Light,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require("../../assets/bust-1.png")}
      />
      <Text
        style={{
          fontFamily: "Poppins_900Black",
          fontSize: 22,
          textAlign: "center",
        }}
      >
        Hey Feriel{"\n"} there’s a new course about First-aid
      </Text>
      <Text
        style={{
          fontFamily: "Poppins_300Light",
          fontSize: 16,
          textAlign: "center",
        }}
      >
        Find out how our new matching tool can help you learn another way
      </Text>
      <View style={{ flex: 1 }}></View>
      <TouchableOpacity style={styles.gradientButton} onPress={() => navigation.navigate("CoursesScreen")}>
        <LinearGradient
          colors={["#0099FF", "#0044FF"]}
          style={styles.linearGradient}
        >
          <Text
            style={{
              fontSize: 17,
              color: "white",
              fontFamily: "Poppins_300Light",
            }}
          >
            Discover the course
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.hyperLink}>
        <Text style={{ fontSize: 15, color: "#00000055", margin: 15 }}>
          Not now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrainingSplash;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 50,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    color: "#333348",
  },
  stretch: {},
  gradientButton: {
    height: 58,
    width: 284,
    borderRadius: 10,
    backgroundColor: "#0099FF",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  hyperLink: {},
  linearGradient: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
