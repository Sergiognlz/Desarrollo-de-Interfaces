// src/Views/MiBoton.tsx
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

type MiBotonProps = {
  texto: string;               // El texto que se mostrará
  onPress?: () => void;         // Función opcional al pulsar
};

export const MiBoton = ({ texto, onPress }: MiBotonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.boton,
        { backgroundColor: pressed ? '#cce5ff' : '#007bff' }
      ]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{texto}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  boton: {
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});
export default MiBoton;