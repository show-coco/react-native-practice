import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View
      style={styles.container}
      accessibilityHint="You can see blue and red box"
    >
      <View style={styles.blueChild} />
      <View style={styles.redChild} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    padding: 20,
  },
  blueChild: {
    backgroundColor: "blue",
    flex: 0.3,
  },
  redChild: {
    backgroundColor: "red",
    flex: 0.5,
  },
});
