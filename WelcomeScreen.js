import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={welcomeStyles.container}>
      <Text style={welcomeStyles.headerText}>Welcome to Little Lemon</Text>
      <Text
        style={welcomeStyles.bodyText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}

const textProperties = { color: '#EDEFEE', textAlign: 'center' };

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
   ...textProperties
  },
  bodyText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
   ...textProperties
  },
});
