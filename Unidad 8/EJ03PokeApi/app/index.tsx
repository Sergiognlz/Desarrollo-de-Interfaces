import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
} from "react-native";
import { pokemonViewModel } from "./Core/Container";
import { Pokemon } from "./Domain/Entities/Pokemon";

// Función para obtener imagen de cada Pokémon usando su nombre
const getPokemonImage = (name: string) =>
  `https://img.pokemondb.net/artwork/large/${name.toLowerCase()}.jpg`;

export default function Index() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);

  const onPress = async () => {
    setLoading(true);
    const result = await pokemonViewModel.getNext20();
    setPokemons(result);
    setLoading(false);
  };

  const renderItem = ({ item }: { item: Pokemon }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: getPokemonImage(item.name) }}
        style={styles.pokemonImage}
      />
      <Text style={styles.pokemonName}>{item.name.toUpperCase()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Cargar 20 Pokémon</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#FF0000" />}

      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF0000",
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "#FFA500",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  button: {
    backgroundColor: "#FFCC00",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#FFF",
    margin: 5,
    borderRadius: 12,
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  pokemonImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textTransform: "capitalize",
  },
});
