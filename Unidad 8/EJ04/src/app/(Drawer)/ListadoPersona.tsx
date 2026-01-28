import { useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Alert, Button, FlatList, Image, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { PersonaViewModel } from "../../UI/ViewModels/Persona/PersonaViewModel";

const vm = PersonaViewModel.getInstance();

export default function ListadoPersonasView() {
  const router = useRouter();
  const [filtro, setFiltro] = useState("");
  const [personas, setPersonas] = useState(vm.personas);

  // Carga inicial de personas y suscripción a cambios
  useEffect(() => {
    const cargar = async () => {
      try {
        await vm.cargarPersonas();
        setPersonas([...vm.personas]);
      } catch (error) {
        console.error("Error cargando personas:", error);
      }
    };

    cargar();
    const unsubscribe = vm.onChange(() => setPersonas([...vm.personas]));

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // Filtrado en tiempo real
  const personasFiltradas = useMemo(
    () =>
      personas.filter((p) =>
        p.nombreCompleto.toLowerCase().includes(filtro.toLowerCase())
      ),
    [filtro, personas]
  );

  // Función eliminar con compatibilidad web y móvil
  const eliminarPersona = (id: number, nombreCompleto: string) => {
    if (Platform.OS === "web") {
      if (confirm(`¿Seguro que quieres eliminar a ${nombreCompleto}?`)) {
        vm.eliminarPersona(id);
      }
    } else {
      Alert.alert(
        "Confirmar eliminación",
        `¿Seguro que quieres eliminar a ${nombreCompleto}?`,
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Eliminar",
            style: "destructive",
            onPress: async () => {
              try {
                await vm.eliminarPersona(id);
                Alert.alert("Éxito", `Se eliminó a ${nombreCompleto}`);
              } catch (error: any) {
                console.error("Error al eliminar persona:", error);
                Alert.alert("Error", error.message || "No se pudo eliminar la persona");
              }
            },
          },
        ]
      );
    }
  };

  // Render de cada persona
  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: item.foto || "https://via.placeholder.com/50" }}
        style={styles.foto}
      />
      <View style={styles.info}>
        <Text style={styles.nombre}>{item.nombreCompleto}</Text>
        <Text>Edad: {item.edad}</Text>
        <Text>Tel: {item.telefono}</Text>
        <Text>Dirección: {item.direccion}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          title="Editar"
          onPress={() => {
            vm.seleccionarPersona(item);
            router.push("/Persona/EditarInsertarPersonas");
          }}
        />
        <Button
          title="Eliminar"
          color="red"
          onPress={() => eliminarPersona(item.id, item.nombreCompleto)}
        />
      </View>
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
          router.push("/Persona/EditarInsertarPersonas");
        }}
      />

      <FlatList
        data={personasFiltradas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 6 },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 8,
  },
  foto: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  info: { flex: 1 },
  nombre: { fontWeight: "bold", fontSize: 16 },
  buttonsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 8,
  },
});
