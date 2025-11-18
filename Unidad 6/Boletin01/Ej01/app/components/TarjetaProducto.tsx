import React from "react";
import BotonPersonalizado from "../components/BotonPersonalizado";

export interface TarjetaProductoProps {
  name: string;
  price: number;
  Image: string;
  onAddToCart: () => void;
}

export default function TarjetaProducto({ name, price, Image, onAddToCart }: TarjetaProductoProps) {
  return (
    <article style={{
      border: "1px solid #e5e7eb",
      borderRadius: 8,
      padding: 12,
      width: 220,
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      background: "#fff"
    }}>
      <div style={{ width: 160, height: 120, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: 6, background: "#f9fafb" }}>
        <img src={Image} alt={name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
      </div>
      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{name}</h3>
      <p style={{ margin: 0, color: "#374151", fontWeight: 500 }}>€{price.toFixed(2)}</p>
      <div style={{ marginTop: 8 }}>
        <BotonPersonalizado onClick={onAddToCart}>Añadir al carrito</BotonPersonalizado>
      </div>
    </article>
  );
}
