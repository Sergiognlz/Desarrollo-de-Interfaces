import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { DepartamentoViewModel } from "../../UI/ViewModels/Departamento/DepartamentoViewModel";

const vm = DepartamentoViewModel.getInstance();

export default function EditarInsertarDepartamentoView({ navigation }: any) {
  const [nombre, setNombre] = useState("");

  const guardar = async () => {
    try {
      if (!nombre.trim()) {
        Alert.alert("Error", "El nombre del departamento es obligatorio");
        return;
      }

      await vm.crearDepartamento(nombre);
      Alert.alert("Éxito", "Departamento creado correctamente");

      // Limpiar input y volver al listado
      setNombre("");
      navigation.goBack();
    } catch (error: any) {
      Alert.alert("Error", error.message || "No se pudo crear el departamento");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nombre del departamento"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />

      <Button title="Crear Departamento" onPress={guardar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
  },
});
