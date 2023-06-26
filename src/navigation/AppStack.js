import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import ListAndScrollview from "../screens/ListAndScrollview";
import HomeButtons from "../screens/HomeButtons";
import TextFieldAndInput from "../screens/TextFieldAndInput";
import TouchComponent from "../screens/TouchComponent";
import ToDo from "../screens/ToDo";
import FlatListScreenPAGE from "../screens/FlatListScreenPAGE";
import EditServiceScreen from "../screens/EditServiceScreen";
import Services from "../screens/Services";

const Stack = createNativeStackNavigator();
const AppStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeButtons}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="List"
        component={ListAndScrollview}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="TextScreen"
        component={TextFieldAndInput}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Touch"
        component={TouchComponent}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="ToDoscreen"
        component={ToDo}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Test"
        component={FlatListScreenPAGE}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="EditServices"
        component={EditServiceScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="serv"
        component={Services}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
    
  );
};

export default AppStack;
