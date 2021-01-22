import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";

export default function App() {
  const onPressButton = () => {
    alert("You tapped the button!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="PRESS ME" onPress={onPressButton} />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressButton} title="Press Me" color="#841584" />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button onPress={onPressButton} title="This looks great!" />
        <Button onPress={onPressButton} title="OK!" color="#841584" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
});
