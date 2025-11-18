import { Text, View } from "react-native";

import React, { useState } from "react";
import TarjetaProducto from "./components/TarjetaProducto";

type Producto = {
  id: string;
  name: string;
  price: number;
  Image: string;
};

export default function HomePage() {
  const [cartCount, setCartCount] = useState(0);

  const productos: Producto[] = [
    { id: "p1", name: "Cafetera Espresso", price: 79.99, Image: require("../assets/images/cafetera.jpg" ) },
    { id: "p2", name: "Auriculares Bluetooth", price: 49.5, Image: "../assets/images/auriculares.jpg" },
    { id: "p3", name: "Mochila Urbana", price: 39.0, Image: "../assets/images/mochila.jpg" },
    { id: "p4", name: "Taza Cerámica", price: 12.25, Image: "../assets/images/taza.jpg" },
  ];

  function handleAddToCart() {
    setCartCount(prev => prev + 1);
  }

  return (
    <main style={{ padding: 24, fontFamily: "Inter, sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>Tienda</h1>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ position: "relative", width: 36, height: 36 }}>
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#111827" strokeWidth="1.5">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            <span style={{
              position: "absolute",
              top: -6,
              right: -6,
              background: "#ef4444",
              color: "white",
              borderRadius: 999,
              padding: "2px 6px",
              fontSize: 12,
              fontWeight: 700
            }}>{cartCount}</span>
          </div>
          <span style={{ color: "#6b7280" }}>Artículos: {cartCount}</span>
        </div>
      </header>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
        {productos.map(p => (
          <TarjetaProducto
            key={p.id}
            name={p.name}
            price={p.price}
            Image={p.Image}
            onAddToCart={handleAddToCart}
          />
        ))}
      </section>
    </main>
  );
}
