// components/TarjetaProducto.tsx

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
        
        {/* IMAGEN RESPONSIVA Y BONITA */}
        <Image source={image} style={styles.image} />

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>

        <TouchableOpacity onPress={onAddToCart} style={styles.button}>
          <Text style={styles.buttonText}>Añadir</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: "48%",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  // IMAGEN PERFECTA PARA PRODUCTOS 
  image: {
    width: "100%",
    height: 160,               // Alto ideal para tarjetas
    borderRadius: 10,
    marginBottom: 10,
    objectFit: "cover",        // CLAVE PARA WEB
    resizeMode: "cover",       // CLAVE PARA MOBILE
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 4,
  },
  price: {
    marginTop: 4,
    fontSize: 15,
    color: "#6b7280",
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#111827",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
});
