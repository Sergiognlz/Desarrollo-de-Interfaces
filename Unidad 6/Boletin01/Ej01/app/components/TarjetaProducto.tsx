import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  price: number;
  image: any;
  onAddToCart: () => void;
};

export default function TarjetaProducto({ name, price, image, onAddToCart }: Props) {
  return (
    <View style={styles.wrap}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />

        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>

        <TouchableOpacity onPress={onAddToCart} style={styles.button}>
          <Text style={styles.buttonText}>Añadir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const IMAGE_SIZE = 120; // tamaño de imagen fijo

const styles = StyleSheet.create({
  wrap: {
    width: "48%",      // 2 columnas
    marginBottom: 12,  // menos espacio entre filas
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    padding: 6,         // menos padding para tarjeta más compacta
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 4,
  },
  name: {
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  price: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 4,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "#111827",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
});
