import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { Persona } from "../../Domain/Entities/Persona";
import { PersonaViewModel } from "../../UI/ViewModels/Persona/PersonaViewModel";

const vm = PersonaViewModel.getInstance();

export default function EditarInsertarPersonasView({ navigation }: any) {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [foto, setFoto] = useState("");
  const [idDepartamento, setIdDepartamento] = useState<number | null>(null);

  useEffect(() => {
    if (vm.personaSeleccionada) {
      const p = vm.personaSeleccionada;
      setNombre(p.nombre);
      setApellidos(p.apellidos);
      setFechaNacimiento(p.fechaNacimiento.toISOString().split("T")[0]);
      setDireccion(p.direccion);
      setTelefono(p.telefono);
      setFoto(p.foto);
      setIdDepartamento(p.idDepartamento);
    }
  }, []);

  const guardar = async () => {
    try {
      const persona = new Persona(
        vm.personaSeleccionada?.id || Date.now(),
        nombre,
        apellidos,
        telefono,
        direccion,
        foto,
        new Date(fechaNacimiento),
        idDepartamento || 0
      );

      if (vm.personaSeleccionada) {
        await vm.actualizarPersona(persona);
      } else {
        await vm.crearPersona(persona);
      }

      Alert.alert("Éxito", "Persona guardada correctamente");
      navigation.goBack();
    } catch (error: any) {
      Alert.alert("Error", error.message || "No se pudo guardar la persona");
    }
  };

  const eliminar = async () => {
    if (!vm.personaSeleccionada) return;
    try {
      await vm.eliminarPersona(vm.personaSeleccionada.id);
      Alert.alert("Éxito", "Persona eliminada correctamente");
      navigation.goBack();
    } catch (error: any) {
      Alert.alert("Error", error.message || "No se pudo eliminar la persona");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nombre" style={styles.input} value={nombre} onChangeText={setNombre} />
      <TextInput placeholder="Apellidos" style={styles.input} value={apellidos} onChangeText={setApellidos} />
      <TextInput placeholder="Fecha de Nacimiento (YYYY-MM-DD)" style={styles.input} value={fechaNacimiento} onChangeText={setFechaNacimiento} />
      <TextInput placeholder="Dirección" style={styles.input} value={direccion} onChangeText={setDireccion} />
      <TextInput placeholder="Teléfono" style={styles.input} value={telefono} onChangeText={setTelefono} />
      <TextInput placeholder="URL de Foto" style={styles.input} value={foto} onChangeText={setFoto} />
      <TextInput placeholder="ID Departamento" style={styles.input} value={idDepartamento?.toString() || ""} onChangeText={text => setIdDepartamento(Number(text))} keyboardType="numeric" />

      <Button title={vm.personaSeleccionada ? "Actualizar" : "Crear"} onPress={guardar} />
      {vm.personaSeleccionada && <Button title="Eliminar" color="red" onPress={eliminar} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 8, marginBottom: 12 },
});
