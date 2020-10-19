import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";
import "react-native-gesture-handler";
import Header from "./Header";
import HomePage from "./Home";

const Stack = createStackNavigator();

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   OpenSans_300Light,
  //   OpenSans_300Light_Italic,
  //   OpenSans_400Regular,
  //   OpenSans_400Regular_Italic,
  //   OpenSans_600SemiBold,
  //   OpenSans_600SemiBold_Italic,
  //   OpenSans_700Bold,
  //   OpenSans_700Bold_Italic,
  //   OpenSans_800ExtraBold,
  //   OpenSans_800ExtraBold_Italic,
  // });

  return (
    <NavigationContainer
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Stack.Navigator initialRouteName="Globomantics" headerMode="screen">
        <Stack.Screen
          name="Globomantics"
          component={HomePage}
          options={{
            header: () => <Header headerDisplay="Globomantics" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
