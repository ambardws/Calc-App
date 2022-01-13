import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ButtonScreen() {
  return (
    <View style={styles.button}>
      <Text>buttosn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    height: "65%",
  }
});
