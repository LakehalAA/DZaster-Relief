import React from "react";
import { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
const StatsView = ({ id }) => {
  const data = {
    data: [0.752],
  };
  if (id === "0")
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>NOMBRE DES CAS REPERES</Text>
        <LineChart
          data={{
            labels: ["M", "J", "V", "S", "D"],
            datasets: [
              {
                data: [98, 75, 45, 102, 40],
              },
            ],
          }}
          width={Dimensions.get("window").width - 60}
          height={120}
          withInnerLines={false}
          withOuterLines={false}
          chartConfig={{
            fillShadowGradientOpacity: 0.8,
            backgroundColor: "transparent",
            strokeWidth: 2,
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `#6E78F7`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "4",
              strokeWidth: "2",
              stroke: "#fff",
            },
          }}
          bezier
          style={{
            marginTop: 10,
            borderRadius: 20,
          }}
        />
      </View>
    );
  else
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>POURCENTAGE DES GUERISSONS</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginVertical: 10,
              }}>
              <View
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: "#d5d7f2",
                  marginHorizontal: 10,
                  borderRadius: 3,
                }}></View>
              <Text>Encore Malade</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginVertical: 10,
              }}>
              <View
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: "#8b94ed",
                  marginHorizontal: 10,
                  borderRadius: 3,
                  
                }}></View>
              <Text>Gueris</Text>
            </View>
          </View>
          <Text style={styles.valueStyle}>75.2%</Text>
          <ProgressChart
            style={{
              alignSelf: "flex-end",
            }}
            data={data}
            width={Dimensions.get("window").width - 255}
            height={120}
            strokeWidth={11}
            radius={43}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              fillShadowGradientOpacity: 1,
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: "#fff",
              backgroundGradientToOpacity: 0.5,
              color: (opacity = 1) => `rgba(110, 120, 247, ${opacity})`,
            }}
            hideLegend={true}
          />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    height: 190,
    width: Dimensions.get("window").width - 60,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF",
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
  textStyle: {
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginHorizontal: 25,
    marginVertical: 15,
  },
  valueStyle: {
      position: 'absolute',
      fontWeight: 'bold',
      fontSize: 18,
      right: 42
  }
});

export default StatsView;
