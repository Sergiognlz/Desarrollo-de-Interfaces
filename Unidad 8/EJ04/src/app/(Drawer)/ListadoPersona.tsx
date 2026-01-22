import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useMemo, useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { PersonaViewModel } from "../../UI/ViewModels/Persona/PersonaViewModel";

// Tipado del Stack
type RootStackParamList = {
  Root: undefined;
  EditarInsertarPersonas: undefined;
  EditarInsertarDepartamento: undefined;
};

const vm = PersonaViewModel.getInstance();

export default function ListadoPersonasView() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [filtro, setFiltro] = useState("");
  const [personas, setPersonas] = useState(vm.personas);

  useEffect(() => {
    vm.cargarPersonas();
    const unsubscribe = vm.onChange(() => setPersonas([...vm.personas]));
    return unsubscribe;
  }, []);

  const personasFiltradas = useMemo(
    () =>
      personas.filter((p) =>
        p.nombreCompleto.toLowerCase().includes(filtro.toLowerCase())
      ),
    [filtro, personas]
  );

  const renderItem = ({ item }: { item: typeof vm.personas[0] }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.foto }} style={styles.foto} />
      <View style={styles.info}>
        <Text style={styles.nombre}>{item.nombreCompleto}</Text>
        <Text>Edad: {item.edad}</Text>
        <Text>Tel: {item.telefono}</Text>
        <Text>Dirección: {item.direccion}</Text>
      </View>
      <Button
        title="Editar"
        onPress={() => {
          vm.seleccionarPersona(item);
          const parentNav = navigation.getParent<NativeStackNavigationProp<RootStackParamList>>();
          parentNav!.navigate("EditarInsertarPersonas"); // navegamos al formulario
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar persona"
        value={filtro}
        onChangeText={setFiltro}
      />

      <Button
        title="Añadir Persona"
        onPress={() => {
          vm.limpiarSeleccion();
          const parentNav = navigation.getParent<NativeStackNavigationProp<RootStackParamList>>();
          parentNav!.navigate("EditarInsertarPersonas");
        }}
      />

      <FlatList
        style={styles.list}
        data={personasFiltradas}
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    borderRadius: 8,
  },
  foto: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  info: { flex: 1 },
  nombre: { fontWeight: "bold", fontSize: 16 },
});
