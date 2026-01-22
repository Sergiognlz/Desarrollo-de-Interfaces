import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import { DepartamentoListItem } from "../../UI/Components/Departamento/DepartamentoListItem";
import { DepartamentoViewModel } from "../../UI/ViewModels/Departamento/DepartamentoViewModel";

// Definimos los tipos del Stack padre
type RootStackParamList = {
  Root: undefined;
  EditarInsertarDepartamento: undefined;
  EditarInsertarPersonas: undefined;
};

const vm = DepartamentoViewModel.getInstance();

export default function ListadoDepartamentosView() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar departamento"
        value={filtro}
        onChangeText={setFiltro}
      />

      {/* Botón Añadir */}
      <Button
        title="Añadir Departamento"
        onPress={() => {
          vm.limpiarSeleccion();
          // Subimos al Stack padre y navegamos al formulario
          const parentNav = navigation.getParent<NavigationProp<RootStackParamList>>();
          parentNav?.navigate("EditarInsertarDepartamento");
        }}
      />

      {/* Lista de departamentos */}
      <FlatList
        style={styles.list}
        data={departamentosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DepartamentoListItem
            departamento={item}
            onPress={() => {
              vm.seleccionarDepartamento(item);
              const parentNav = navigation.getParent<NavigationProp<RootStackParamList>>();
              parentNav?.navigate("EditarInsertarDepartamento");
            }}
          />
        )}
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
});
