import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
import AppStack from "./src/navigation/AppStack";
import HomeButtons from "./src/screens/HomeButtons";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by
LogBox.ignoreAllLogs(); //Ignore all log notifications
export default function App() {
  return (
    //see here how used. The AppStack is present in our main App
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
