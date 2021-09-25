import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Poppins_900Black,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

const TrainingCard = (props) => {
  const [modalVisible, setmodalVisible] = useState(false);

  const navigation = useNavigation();

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
      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent
        onRequestClose={() => {
          setmodalVisible(false);
        }}
        style={styles.courseModal}
        marginHorizontal={50}
      >
        <View
          style={{ height: "100%", width: "100%", backgroundColor: "#ccca" }}
        >
          <View
            style={{
              height: "80%",
              width: "80%",
              backgroundColor: "#fff",
              margin: 10,
              marginTop: 80,
              alignSelf: "center",
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: 20,
              padding: 20,
            }}
          >
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                borderRadius: 40,
                alignSelf: "flex-start",
              }}
              onPress={() => setmodalVisible(false)}
            >
              <Ionicons name="ios-close" size={24} color="gray" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 22,
                color: "#0099FF",
                fontFamily: "Poppins_500Medium",
                alignSelf: "flex-start",
              }}
            >
              Complete first-aid course : Learn to Save lives
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: "#6E6F8B",
                fontFamily: "Poppins_500Medium",
                alignSelf: "flex-start",
              }}
            >
              The purpose of this course is to help participants to make
              appropriate decisions for first-aid care.
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: "#0A3875",
                fontFamily: "Poppins_500Medium",
                alignSelf: "flex-start",
              }}
            >
              First-aid Team
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 10,
                justifyContent: "flex-start",
              }}
            >
              <View
                style={{
                  height: 40,
                  width: 70,
                  backgroundColor: "#FF9343",
                  borderRadius: 10,
                  marginHorizontal: 6,
                  justifyContent: "space-around",
                  flexDirection: "row",
                  padding: 5,
                  alignItems: "center",
                }}
              >
                <Ionicons name="star" size={16} color="white" />
                <Text style={{ color: "white" }}>4.3</Text>
              </View>
              <View
                style={{
                  height: 40,
                  width: 100,
                  padding: 5,
                  backgroundColor: "#6E6F8B22",
                  borderRadius: 10,
                  justifyContent: "space-around",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons name="videocam" size={16} color="gray" />
                <Text style={{ color: "black" }}>35 Hours</Text>
              </View>
              <View
                style={{
                  height: 40,
                  width: 80,
                  padding: 5,
                  backgroundColor: "#6E6F8B22",
                  marginHorizontal: 6,
                  borderRadius: 10,
                  justifyContent: "space-around",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons name="person" size={16} color="gray" />
                <Text style={{ color: "black" }}>3200</Text>
              </View>
            </View>
            <Image
              style={styles.stretchModal}
              source={require("../../assets/MaskGroup.png")}
            />
            <TouchableOpacity
              style={{
                height: 64,
                marginHorizontal: 10,
                width: 240,
                borderWidth: 2,
                borderColor: "#0099FF55",
                borderRadius: 60,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Watching")}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: "#333333",
                  fontFamily: "Poppins_500Medium",
                }}
              >
                Apply Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.cardImage}
        onPress={() => setmodalVisible(true)}
      >
        <Image style={styles.stretch} source={props.image} />
      </TouchableOpacity>
      <Text style={styles.Title}>{props.course}</Text>
      <Text style={styles.subTitle}>{props.creator}</Text>
    </View>
  );
};

export default TrainingCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 251,
    minHeight: 251,
    width: 162,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  cardImage: {
    height: 142,
    width: 142,
    marginBottom: 20,
    backgroundColor: "#ccc",
    borderRadius: 12,
  },
  Title: {
    alignSelf: "flex-start",
    fontFamily: "Poppins_700Bold",
    fontSize: 15,
  },
  subTitle: {
    alignSelf: "flex-start",
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
  },
  stretch: {
    height: "100%",
    width: "100%",
  },
  stretchModal: {
    marginVertical: 5,
    borderRadius: 20,
    width: "80%",
  },
  courseModal: {
    position: "absolute",
    backgroundColor: "#fff",
    marginHorizontal: 60,
    marginVertical: 60,
    alignSelf: "center",
    justifyContent: "center",
  },
});
