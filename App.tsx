import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const _onPressButton = () => {
    alert("You tapped the button!");
  };

  const _onLongPressButton = () => {
    alert("You long-pressed the button!");
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={_onPressButton}
        style={styles.buttonContainer}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Tatchable Heilight</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity onPress={_onPressButton} style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Tatchable Opacity</Text>
        </View>
      </TouchableOpacity>

      <TouchableHighlight
        onLongPress={_onLongPressButton}
        style={styles.buttonContainer}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Tatchable Highlight</Text>
        </View>
      </TouchableHighlight>

      <TouchableWithoutFeedback
        onPress={_onPressButton}
        style={styles.buttonContainer}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Tatchable Without Feedback</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});
