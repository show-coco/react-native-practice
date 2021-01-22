import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

export default function App() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here to translate"
        onChangeText={(value) => setText(value)}
        defaultValue={text}
      />
      <Text>
        {text
          .split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  input: {
    padding: 10,
    fontSize: 24,
  },
});
