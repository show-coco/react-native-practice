import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, TextInputBase, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <TextInput style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1
        }}
      />
      <Button
  onPress={() => {
    alert('You tapped the button!');
  }}
  title="Press Me"
/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
