import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";

const HomeButtons = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("List");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            List & Scrollview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("TextScreen");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            Text & TextInput
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("Test");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            Flatlist Screedn
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("Touch");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            Touch Opacity
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "space-between" }}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingVertical: 20,
        }}
      >
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("ToDoscreen");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            To Do Screen
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("EditServices");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            Edit Services
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingVertical: 20,
        }}
      >
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("serv");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
           Service
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("TextScreen");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            Text & TextInput
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingVertical: 20,
        }}
      >
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("List");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            List & Scrollview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("TextScreen");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            Text & TextInput
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingVertical: 20,
        }}
      >
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("List");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            List & Scrollview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("TextScreen");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            Text & TextInput
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("List");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            List & Scrollview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("TextScreen");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            Text & TextInput
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    ////
  );
};

export default HomeButtons;

const styles = StyleSheet.create({
  touchContainer: {
    backgroundColor: "green",
    alignItems: "center",
    display: "flex",
    marginTop: 20,
  },
  btn: {
    backgroundColor: "indigo",
    padding: 10,
    justifyContent: "center",
    height: 80,
    width: 150,
  },
});
