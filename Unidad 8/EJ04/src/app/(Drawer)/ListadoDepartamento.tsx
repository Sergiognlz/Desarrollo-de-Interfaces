import { useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { DepartamentoViewModel } from "../../UI/ViewModels/Departamento/DepartamentoViewModel";

const vm = DepartamentoViewModel.getInstance();

export default function ListadoDepartamentosView() {
  const router = useRouter();
  const [filtro, setFiltro] = useState("");
  const [departamentos, setDepartamentos] = useState(vm.departamentos);

  // Cargar departamentos y suscribirse a cambios
  useEffect(() => {
    vm.cargarDepartamentos();
    const unsubscribe = vm.onChange(() => setDepartamentos([...vm.departamentos]));
    return unsubscribe;
  }, []);

  // Filtrado por nombre
  const departamentosFiltrados = useMemo(
    () =>
      departamentos.filter((d) =>
        d.nombre.toLowerCase().includes(filtro.toLowerCase())
      ),
    [filtro, departamentos]
  );

  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Text style={styles.nombre}>{item.nombre}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar departamento"
        value={filtro}
        onChangeText={setFiltro}
      />

      {/* Botón Añadir Departamento */}
      <Button
        title="Añadir Departamento"
        onPress={() => {
          vm.limpiarSeleccion();
          router.push("/Departamento/EditarInsertarDepartamento");
        }}
      />

      <FlatList
        style={styles.list}
        data={departamentosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
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
  list: { marginTop: 12 },
  itemContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
