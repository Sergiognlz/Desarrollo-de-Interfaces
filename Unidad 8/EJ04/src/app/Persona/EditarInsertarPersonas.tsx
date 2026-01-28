import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Button, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { Persona } from "../../Domain/Entities/Persona";
import { DepartamentoViewModel } from "../../UI/ViewModels/Departamento/DepartamentoViewModel";
import { PersonaViewModel } from "../../UI/ViewModels/Persona/PersonaViewModel";

const vm = PersonaViewModel.getInstance();
const vmDept = DepartamentoViewModel.getInstance();

export default function EditarInsertarPersonasView() {
  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [foto, setFoto] = useState("");
  const [idDepartamento, setIdDepartamento] = useState<number | null>(null);
  const [departamentos, setDepartamentos] = useState(vmDept.departamentos);

  // Cargar datos si estamos editando y departamentos
  useEffect(() => {
    vmDept.cargarDepartamentos();
    setDepartamentos([...vmDept.departamentos]);

    if (vm.personaSeleccionada) {
      const p = vm.personaSeleccionada;
      setNombre(p.nombre);
      setApellidos(p.apellidos);
      setFechaNacimiento(p.fechaNacimiento.toISOString().split("T")[0]);
      setDireccion(p.direccion || "");
      setTelefono(p.telefono || "");
      setFoto(p.foto || "");
      setIdDepartamento(p.idDepartamento || null);
    }
  }, []);

  const guardar = async () => {
    try {
      if (!nombre.trim()) {
        Alert.alert("Error", "El nombre es obligatorio");
        return;
      }
      if (!idDepartamento) {
        Alert.alert("Error", "Debes seleccionar un departamento");
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
        idDepartamento
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
      <TextInput
        placeholder="Fecha de Nacimiento (YYYY-MM-DD)"
        style={styles.input}
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
      />
      <TextInput placeholder="Dirección" style={styles.input} value={direccion} onChangeText={setDireccion} />
      <TextInput placeholder="Teléfono" style={styles.input} value={telefono} onChangeText={setTelefono} />
      <TextInput placeholder="URL de Foto" style={styles.input} value={foto} onChangeText={setFoto} />

      {/* Selector de departamento compatible Web y Móvil */}
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Departamento</Text>

        {Platform.OS === "web" ? (
          <select
            value={idDepartamento ?? ""}
            onChange={(e) => setIdDepartamento(Number(e.target.value))}
            style={styles.webSelect}
          >
            <option value="">Selecciona un departamento</option>
            {departamentos.map((d) => (
              <option key={d.id} value={d.id}>
                {d.nombre}
              </option>
            ))}
          </select>
        ) : (
          <Picker
            selectedValue={idDepartamento}
            onValueChange={(itemValue) => setIdDepartamento(itemValue)}
          >
            <Picker.Item label="Selecciona un departamento" value={null} />
            {departamentos.map((d) => (
              <Picker.Item key={d.id} label={d.nombre} value={d.id} />
            ))}
          </Picker>
        )}
      </View>

      <Button title={vm.personaSeleccionada ? "Actualizar" : "Crear"} onPress={guardar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 8, marginBottom: 12 },
  pickerContainer: { marginBottom: 16 },
  label: { fontWeight: "bold", marginBottom: 4 },
  webSelect: { width: "100%", padding: 8, borderRadius: 8, borderWidth: 1, borderColor: "#ccc" },
});
