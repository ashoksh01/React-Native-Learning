import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

export default function TouchComponent() {
  const [people, setPeople] = useState([
    { name: "ashok", id: "1" },
    { name: "aaryak", id: "2" },
    { name: "gaurav", id: "3" },
    { name: "nirajan", id: "4" },
    { name: "ishan", id: "5" },
    { name: "manisha", id: "6" },
    { name: "manish", id: "7" },
    { name: "Saurav", id: "8" },
    { name: "Samishan", id: "9" },
    { name: "Aaryan", id: "10" },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) =>{
        return prevPeople.filter(person => person.id != id)

    });
  }
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
      <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>
            )}
      />
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
    marginHorizontal: 10,
    marginTop: 24,
  },
});
