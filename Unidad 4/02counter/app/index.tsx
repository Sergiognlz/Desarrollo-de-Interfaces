import React, { useState } from "react";
import { Pressable, Text, View, StyleSheet, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const Index = () => {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    const newCount = count + 1;
    setCount(newCount);

    // Mostrar alerta cada vez que sea múltiplo de 10
    if (newCount % 10 === 0) {
      Alert.alert("¡Felicidades!", `Has alcanzado ${newCount} clicks`);
    }
  };

  const handlePressDecre = () => {
    const newCount = count - 1;
    setCount(newCount);
  }
    ;  return (
   <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {count}
      </Text>
      <Pressable onPress={handlePress} style={[styles.button, { marginBottom: 10 }]}>
        <Text style={styles.buttonText}>Incrementar</Text>
        <Ionicons name="add-circle" size={24} color="white" />
      </Pressable>    
      <Pressable onPress={handlePressDecre} style={[styles.button, { marginBottom: 10 }]}>
        <Text style={styles.buttonText}>Decrementar</Text>
        <Ionicons name="add-circle" size={24} color="white" />
      </Pressable>
      
     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
  },
});


export default Index;