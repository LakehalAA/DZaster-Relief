import React, { Component } from "react";
import { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  StatusBar,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import axios from "axios";

let token;

export default class BotScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      messageText: "",
      botSecret: "7NKRV1rOPWI.hI0C46LqjgPNucX3gEQuxIkZW5gbqfYkzHEZ1j4ssEw",
      conversationId: "",
    };
  }

  componentDidMount() {
    let botToken;

    axios
      .get("https://directline.botframework.com/api/tokens", {
        headers: {
          Authorization: "Bearer " + this.state.botSecret,
        },
      })
      .then(
        (response) => {
          botToken = response.data;

          let auth = "Bearer " + this.state.botSecret;
          this.conversation();
          this.updateConvo();
        },
        (error) => {
          console.log("request1 : " + this.state.botSecret + "  " + error);
        }
      );
  }

  containerStyler = () => {
    let height = Dimensions.get("window").height;
    return {
      flexDirection: "column",
      padding: 20,
      height: height - 110 - 85 - 75,
    };
  };

  messageStyler = (prec, thisOne, next) => {
    switch (prec) {
      case "l":
        switch (thisOne) {
          case "l":
            switch (next) {
              case "l":
                return {
                  maxWidth: "100%",
                  marginLeft: 15,
                  marginBottom: 5,
                  backgroundColor: "#6E78F7",
                  color: "#fff",
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                };
                break;
              case "r":
                return {
                  maxWidth: "100%",
                  marginLeft: 15,
                  marginBottom: 20,
                  backgroundColor: "#6E78F7",
                  color: "#fff",
                  borderTopRightRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                };
                break;

              default:
                break;
            }
            break;

          case "r":
            switch (next) {
              case "l":
                return {
                  maxWidth: "100%",
                  marginLeft: 15,
                  marginBottom: 20,
                  backgroundColor: "#94A5A6",
                  color: "#fff",
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                };
                break;
              case "r":
                return {
                  maxWidth: "100%",
                  marginLeft: 15,
                  marginBottom: 5,
                  backgroundColor: "#94A5A6",
                  color: "#fff",
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                };
                break;

              default:
                break;
            }

            break;
          default:
            break;
        }
        break;

      case "r":
        switch (thisOne) {
          case "l":
            switch (next) {
              case "l":
                return {
                  maxWidth: "100%",
                  marginLeft: 15,
                  marginBottom: 5,
                  backgroundColor: "#6E78F7",
                  color: "#fff",
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                };
                break;
              case "r":
                return {
                  maxWidth: "100%",
                  marginLeft: 15,
                  marginBottom: 20,
                  backgroundColor: "#6E78F7",
                  color: "#fff",
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                };
                break;

              default:
                break;
            }
            break;

          case "r":
            switch (next) {
              case "l":
                return {
                  maxWidth: "100%",
                  marginLeft: 15,
                  marginBottom: 20,
                  backgroundColor: "#94A5A6",
                  color: "#fff",
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                };
                break;
              case "r":
                return {
                  maxWidth: "100%",
                  marginLeft: 15,
                  marginBottom: 5,
                  backgroundColor: "#94A5A6",
                  color: "#fff",
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                };
                break;

              default:
                break;
            }

            break;

          default:
            break;
        }
        break;

      default:
        break;
    }
  };

  updateConvo = async () => {
    let auth = "Bearer " + this.state.botSecret;
    let messages;
    let messagesFormatted;
    let link =
      "https://directline.botframework.com/api/conversations/" +
      this.state.conversationId +
      "/messages";
    axios
      .get(link, {
        headers: {
          Authorization: auth,
        },
      })
      .then(
        (res) => {
          messagesFormatted = [];
          messages = res.data.messages;
          messages.map((message) => {
            messagesFormatted.push({
              sender: message.from === "publishingDellaaaaaaa" ? "l" : "r",
              content: message.text,
            });
          });
          console.log(messagesFormatted);
          this.setState({ messages: messagesFormatted });
        },
        (error) => {}
      );
  };

  messageL = async (msg) => {
    this.setState((prevState) => ({
      messages: [...prevState.messages, { sender: "l", content: msg }],
    }));
  };

  messageR = async (msg) => {
    let msgToSend = {
      text: msg,
      from: "r",
    };
    this.setState((prevState) => ({
      messages: [...prevState.messages, { sender: "r", content: msg }],
    }));

    let auth = "Bearer " + this.state.botSecret;
    let link =
      "https://directline.botframework.com/api/conversations/" +
      this.state.conversationId +
      "/messages";
    axios
      .post(link, msgToSend, {
        headers: {
          Authorization: auth,
        },
      })
      .then(
        (response) => {
          this.updateConvo();
        },
        (error) => {}
      );
  };

  conversation = async () => {
    let auth = "Bearer " + this.state.botSecret;
    try {
      let response = await fetch(
        "https://directline.botframework.com/api/conversations",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: auth,
          },
        }
      );
      let json = await response.json();
      this.setState({ conversationId: json.conversationId });
      this.updateConvo();
    } catch (error) {}
  };

  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <StatusBar
            translucent
            backgroundColor="#6E78F7"
            barStyle="light-content"
          />
          <View style={styles.header}>
            <View style={styles.icon}>
              <FontAwesome5 name="robot" size={26} color="#6E78F7" />
            </View>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 15,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Mike Oxmall
            </Text>
          </View>
          <KeyboardAvoidingView behavior="position">
            <ScrollView
              style={this.containerStyler()}
              ref={(ref) => {
                this.scrollView = ref;
              }}
              onContentSizeChange={() =>
                this.scrollView.scrollToEnd({ animated: true })
              }
              keyboardShouldPersistTaps="never"
            >
              {this.state.messages.map((item, key) => {
                return item.sender === "l" ? (
                  <View style={styles.messageContainerL} key={key}>
                    {key + 1 < this.state.messages.length ? (
                      (this.state.messages[key].sender !==
                        this.state.messages[key + 1].sender && (
                        <View style={styles.iconL}>
                          <FontAwesome5
                            name="robot"
                            size={26}
                            color="#6E78F7"
                          />
                        </View>
                      )) ||
                      (this.state.messages[key].sender ===
                        this.state.messages[key + 1].sender && (
                        <View
                          style={{
                            height: 50,
                            borderRadius: 50,
                            aspectRatio: 1,
                            backgroundColor: "#ffffff00",
                          }}
                        ></View>
                      ))
                    ) : (
                      <View style={styles.iconL}>
                        <FontAwesome5 name="robot" size={26} color="#6E78F7" />
                      </View>
                    )}
                    <View
                      style={this.messageStyler(
                        key - 1 >= 0
                          ? this.state.messages[key - 1].sender
                          : this.state.messages[key].sender == "l"
                          ? "r"
                          : "l",
                        this.state.messages[key].sender,
                        key + 1 < this.state.messages.length
                          ? this.state.messages[key + 1].sender
                          : this.state.messages[key].sender == "l"
                          ? "r"
                          : "l"
                      )}
                    >
                      <Text style={styles.content}>{item.content}</Text>
                    </View>
                  </View>
                ) : (
                  <View style={styles.messageContainerR} key={key}>
                    <View
                      style={this.messageStyler(
                        key - 1 >= 0
                          ? this.state.messages[key - 1].sender
                          : this.state.messages[key].sender == "l"
                          ? "r"
                          : "l",
                        this.state.messages[key].sender,
                        key + 1 < this.state.messages.length
                          ? this.state.messages[key + 1].sender
                          : this.state.messages[key].sender == "l"
                          ? "r"
                          : "l"
                      )}
                    >
                      <Text style={styles.content}>{item.content}</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
            <View
              style={{
                height: 70,
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  marginHorizontal: 10,
                  borderWidth: 1,
                  borderColor: "#aaa",
                  height: 60,
                  backgroundColor: "#ddd",
                  flex: 5,
                  borderRadius: 50,
                  paddingHorizontal: 30,
                }}
                value={this.state.messageText}
                placeholder="Ask your question here!"
                onChangeText={(text) => this.setState({ messageText: text })}
              />
              <TouchableOpacity
                style={{
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 4.65,

                  elevation: 2,
                  marginHorizontal: 10,
                  aspectRatio: 1,
                  width: "20%",
                  flex: 2,
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  this.state.messageText !== "" &&
                    this.messageR(this.state.messageText);
                  this.setState({ messageText: "" });
                }}
              >
                <Ionicons name="send-outline" size={26} color="#6E78F7" />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

/*
        <View style={styles.messageContainerL}>
          <View style={styles.iconL}>
            <Ionicons name="person-outline" size={26} color="#6E78F7" />
          </View>
          <View style={styles.messageL}>
            <Text style={styles.content}>Test sdkjlknsdklmlkdfnvslkv,qsdqsdqsdqsdqsdnlknlkknljknnlonioholnkqsdqsdf,sdmflk,sdmlf,lmsdf</Text>
          </View>
        </View>
        <View style={styles.messageContainerR}>
          <View style={styles.messageR}>
            <Text style={styles.content}>Test sdkjlknsdklmlkdfnvslkv,qsdqsdqsdqsdqsdnlknlkknljknnlonioholnkqsdqsdf,sdmflk,sdmlf,lmsdf</Text>
          </View>
        </View>
*/

const styles = StyleSheet.create({
  header: {
    height: 110,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#6E78F7",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: 5,
  },
  icon: {
    height: "75%",
    borderRadius: 50,
    aspectRatio: 1,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#0001",
    flexDirection: "column",
    padding: 20,
    height: 500,
  },
  messageContainerL: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: "60%",
  },
  messageL: {
    maxWidth: "100%",
    marginLeft: 15,
    marginBottom: 20,
    backgroundColor: "#6E78F7",
    color: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  iconL: {
    height: 50,
    borderRadius: 50,
    aspectRatio: 1,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  messageContainerR: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  messageR: {
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: "#94A5A6",
    color: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  content: {
    color: "#fff",
    paddingHorizontal: 25,
    paddingVertical: 15,
    fontSize: 15,
  },
});
