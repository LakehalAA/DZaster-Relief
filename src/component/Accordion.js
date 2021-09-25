import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { Colors } from "./Colors";
import { Ionicons } from "@expo/vector-icons";

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      expanded: true,
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.row}
          onPress={() => this.toggleExpand()}
        >
          <Text style={[styles.title]}>{this.props.title}</Text>
          <Ionicons
            name={this.state.expanded ? "arrow-up" : "arrow-down"}
            size={30}
            color={Colors.DARKGRAY}
          />
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={{}}>
            <FlatList
              data={this.state.data}
              numColumns={1}
              scrollEnabled={false}
              keyExtractor={(item, index) => "key" + index}
              renderItem={({ item, index }) => (
                <View key={index}>
                  <TouchableOpacity
                    style={[
                      styles.childRow,
                      styles.button,
                      item.value ? styles.btnActive : styles.btnInActive,
                    ]}
                    onPress={() => this.onClick(index)}
                  >
                    <View style={{ flexDirection: "column", flex: 1 }}>
                      <Text style={[styles.font, styles.itemInActive]}>
                        {this.state.data[index].key}
                      </Text>
                      <Text style={[styles.font, styles.subitemInActive]}>
                        Video . 4 Minutes
                      </Text>
                    </View>
                    <Ionicons
                      name={"checkbox"}
                      size={24}
                      color={item.value ? "#FF8181" : Colors.LIGHTGRAY}
                    />
                  </TouchableOpacity>
                  <View style={styles.childHr} />
                </View>
              )}
            />
          </View>
        )}
      </View>
    );
  }

  onClick = (index) => {
    const temp = this.state.data.slice();
    temp[index].value = !temp[index].value;
    this.setState({ data: temp });
  };

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 54,
    alignItems: "center",
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Poppins_700Bold",
    color: Colors.DARKGRAY,
  },
  itemActive: {
    fontSize: 12,
    fontFamily: "Poppins_700Bold",
    color: Colors.GREEN,
  },
  itemInActive: {
    fontSize: 14,
    color: Colors.DARKGRAY,
  },
  subitemInActive: {
    fontSize: 12,
    fontFamily: "Poppins_300Light",
    color: Colors.DARKGRAY,
  },
  btnActive: {
    borderColor: Colors.GREEN,
  },
  btnInActive: {
    borderColor: Colors.DARKGRAY,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    backgroundColor: Colors.WHITE,
  },
  childRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.WHITE,
  },
  parentHr: {
    height: 1,
    color: Colors.WHITE,
    width: "100%",
  },
  childHr: {
    height: 1,
    backgroundColor: Colors.LIGHTGRAY,
    width: "100%",
  },
  colorActive: {
    borderColor: Colors.GREEN,
  },
  colorInActive: {
    borderColor: Colors.DARKGRAY,
  },
});
