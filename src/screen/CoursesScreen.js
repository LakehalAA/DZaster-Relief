import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  useFonts,
  Poppins_900Black,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { LinearGradient } from "expo-linear-gradient";
import TrainingCard from "../component/TrainingCard";
import TextCard from "../component/TextCard";
import AppLoading from "expo-app-loading";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const CoursesScreen = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_300Light,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.containr}>
      <Text style={styles.title}>Courses</Text>
      <ScrollView contentContainerStyle={styles.containerScroll} horizontal>
        <TrainingCard
          image={require("../../assets/FAB.png")}
          course="CPR and first-aid"
          creator="by Kabouche D."
        />
        <TrainingCard
          image={require("../../assets/tree-1.png")}
          course="Incedies"
          creator="Par Abed C."
        />
        <TrainingCard
          image={require("../../assets/bust-1.png")}
          course="CPR and first-aid"
          creator="by Kabouche D."
        />
        <TrainingCard
          image={require("../../assets/bust-1.png")}
          course="CPR and first-aid"
          creator="by Kabouche D."
        />
        <TrainingCard
          image={require("../../assets/bust-1.png")}
          course="CPR and first-aid"
          creator="by Kabouche D."
        />
        <TrainingCard
          image={require("../../assets/bust-1.png")}
          course="CPR and first-aid"
          creator="by Kabouche D."
        />
        <TrainingCard
          image={require("../../assets/bust-1.png")}
          course="CPR and first-aid"
          creator="by Kabouche D."
        />
      </ScrollView>
      <Text style={styles.title}>Personal statistics</Text>
      <ScrollView contentContainerStyle={styles.containerScrollText} horizontal>
        <TextCard number={11} title="Courses completed" />
        <TextCard number={3} title="Courses in progress" />
        <TextCard number={3} title="Courses in progress" />
      </ScrollView>
      <Text style={styles.title}>Learn more way faster</Text>
      <TouchableOpacity style={styles.gradientButton}>
        <LinearGradient
          colors={["#0099FF", "#0044FF"]}
          style={styles.linearGradient}
        >
          <Text
            style={{
              fontSize: 17,
              color: "white",
              fontFamily: "Poppins_700Bold",
            }}
          >
            Go Pro Now and save 80%
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default CoursesScreen;

const styles = StyleSheet.create({
  containr: {
    flexDirection: "column",
    paddingTop: 45,
    flex:1,
    paddingBottom: 80,
    backgroundColor: "white",
    color: "#333348",
  },
  containerScroll: {
    flexDirection: "row",
    height: 220,
    marginHorizontal: 30,
    color: "#000000",
    flexGrow: 1,
  },
  containerScrollText: {
    flexDirection: "row",
    height: 160,
    marginHorizontal: 30,
    color: "#000000",
    flexGrow: 1,
  },
  gradientButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  linearGradient: {
    height: 58,
    width: 284,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 25,
    marginHorizontal: 30,
    marginVertical: 5,
    color: "#0044FF",
    backgroundColor: "white",
  },
});
