import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { Persona } from "../../Domain/Entities/Persona";
import { PersonaViewModel } from "../../UI/ViewModels/Persona/PersonaViewModel";

const vm = PersonaViewModel.getInstance();

export default function EditarInsertarPersonasView() {
  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [foto, setFoto] = useState("");
  const [idDepartamento, setIdDepartamento] = useState<number | null>(null);

  // Si estamos editando, cargar datos
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

  // Guardar nueva persona o actualizar existente
  const guardar = async () => {
    try {
      if (!nombre.trim()) {
        Alert.alert("Error", "El nombre es obligatorio");
        return;
      }

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

      router.replace("/(Drawer)/ListadoPersona");
    } catch (error: any) {
      Alert.alert("Error", error.message || "No se pudo guardar la persona");
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 8, marginBottom: 12 },
});
