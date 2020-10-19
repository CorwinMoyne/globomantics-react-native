import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Header({ headerDisplay }) {
  return (
    <View style={styles.header}>
      <Image
        source={require("./assets/favicon.png")}
        style={{ width: 35, height: 35 }}
      />
      <View>
        <Text>{headerDisplay}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
