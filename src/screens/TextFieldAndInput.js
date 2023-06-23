import { useState } from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native";

export default function TextFieldAndInput() {
  const [name, setName] = useState("ashok");
  const [age, setAge] = useState("30");

  return (
    <View style={styles.container}>
      <Text>Enther your name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g ashok shrestha"
        onChangeText={(val) => setName(val)}
      />

      <Text>Enther your age</Text>
      <TextInput
      keyboardType="numeric"
        style={styles.input}
        placeholder="e.g 25"
        onChangeText={(val) => setAge(val)}
      />
      <Text>Write about yourself</Text>
      <TextInput
      multiline
        style={styles.input}
        placeholder="Hi ! My name is...."
        // onChangeText={(val) => setAge(val)}
      />
      <Text>
        name: {name}, age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
