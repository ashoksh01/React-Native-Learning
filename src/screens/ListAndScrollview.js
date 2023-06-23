import React, {useState} from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function ListAndScrollview() {
  const [people, setPeople] = useState([
    { name: "ashok", key: "1" },
    { name: "aaryak", key: "2" },
    { name: "gaurav", key: "3" },
    { name: "nirajan", key: "4" },
    { name: "ishan", key: "5" },
    { name: "manisha", key: "6" },
    { name: "manish", key: "7" },
    { name: "Saurav", key: "8" },
    { name: "Samishan", key: "9" },
    { name: "Aaryan", key: "10" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "green",
    fontSize: 24,
  },
});
