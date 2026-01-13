import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TextInput } from 'react-native';
import RoundedButton from './Components/boton';
import { useRouter } from 'expo-router';

const IndexScreen: React.FC = () => {
  const router = useRouter();

  // Estados para los inputs
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  return (
    <ImageBackground
      source={require('../assets/images/maiden.jpg')} // Asegúrate que la ruta sea correcta
      style={styles.background}
    >


      <View style={styles.card}>
            <Text style={styles.titulo}>
  Registrarse
</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Escribe tu e-mail"
          value={email}
          onChangeText={setEmail}
        />

        <RoundedButton 
          title="Entrar"
          onPress={() => router.push('/home')}
        />

        <Text style={styles.link} onPress={() => router.push('/register')}>
          Registrarse
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end', // Empuja la card hacia abajo
  },

  card: {
    backgroundColor: 'white',
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 10,          // Sombra en Android
    shadowColor: '#000',    // Sombra en iOS
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -2 },
  },

  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },

  link: {
    marginTop: 20,
    color: '#1E90FF',
    textDecorationLine: 'underline',
    fontSize: 16,
    textAlign: 'center',
  },
    titulo: {
    fontSize: 32,           // tamaño similar a h1
    fontWeight: 'bold',     // negrita
    textAlign: 'center',    // centrado horizontal
    marginBottom: 20,       // opcional, espacio debajo
  },
});

export default IndexScreen;
