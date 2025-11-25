// Components/SecondScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text><h1>Te has logueado correctamente</h1></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SecondScreen;
