import React, { useState } from "react";
import { 
  Text, 
  View, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView, 
  Platform, 
  StatusBar 
} from "react-native";
import TarjetaProducto from "./components/TarjetaProducto";

type Producto = {
  id: string;
  name: string;
  price: number;
  image: any;
};

export default function HomePage() {
  const [cartCount, setCartCount] = useState(0);

  const productos: Producto[] = [
    { id: "p1", name: "Cafetera Espresso", price: 79.99, image: require("../assets/images/cafetera.jpg") },
    { id: "p2", name: "Auriculares Bluetooth", price: 49.5, image: require("../assets/images/auriculares.jpg") },
    { id: "p3", name: "Mochila Urbana", price: 39.0, image: require("../assets/images/mochila.jpg") },
    { id: "p4", name: "Taza Cerámica", price: 12.25, image: require("../assets/images/taza.jpg") },
  ];

  function handleAddToCart() {
    setCartCount(prev => prev + 1);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.title}>Tienda</Text>
          <View style={styles.cartContainer}>
            <Text style={styles.cartIcon}>🛒</Text>
            <Text style={styles.cartLabel}>{cartCount}</Text>
          </View>
        </View>

        {/* GRID 2x2 */}
        <View style={styles.productsGrid}>
          {productos.map(p => (
            <TarjetaProducto
              key={p.id}
              name={p.name}
              price={p.price}
              image={p.image}
              onAddToCart={handleAddToCart}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f9fafb",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    padding: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cartContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartIcon: {
    fontSize: 24,
    marginRight: 4,
  },
  cartLabel: {
    fontSize: 16,
    color: "#6b7280",
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
