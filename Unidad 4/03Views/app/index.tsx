import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.text}>HEADER</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        
        {/* Columna izquierda */}
        <View style={styles.sideColumnIzq}>
          <Text style={styles.text}></Text>
        </View>

        {/* Contenido central */}
        <View style={styles.content}>
          <Text style={styles.text}>CONTENT</Text>
        </View>

        {/* Columna derecha */}
        <View style={styles.sideColumnDer}>
          <Text style={styles.text}></Text>
        </View>

      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.text}>FOOTER</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: "#36e5f1ff", // color visible
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 1,
    flexDirection: "row",
  },
  sideColumnDer: {
    width: 60,
    backgroundColor: "#05700eff", // color visible
    justifyContent: "center",
    alignItems: "center",
  },
   sideColumnIzq: {
    width: 60,
    backgroundColor: "#001facff", // color visible
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    backgroundColor: "#b6ababff", // color visible del contenido
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 50,
    backgroundColor: "#f1bed8ff", // color visible
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#003366", // azul fuerte
    fontWeight: "bold",
  },
});