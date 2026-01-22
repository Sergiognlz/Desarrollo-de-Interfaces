import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la App Personas & Departamentos</Text>
      <Text style={styles.subtitle}>Usa el menú para navegar entre listados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 8 },
  subtitle: { fontSize: 18, color: "#555" },
});
