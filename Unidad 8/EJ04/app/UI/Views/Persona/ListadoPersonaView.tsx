import { View, TextInput, Button, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { PersonaViewModel } from "../../ViewModels/Persona/PersonaViewModel";
import { PersonaListItem } from "../../Components/Persona/PersonaListItem";
const vm = PersonaViewModel.getInstance();

export default function ListadoPersonasView({ navigation }: any) {
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    vm.cargarPersonas();
  }, []);

  const personasFiltradas = vm.personas.filter(p =>
    p.nombreCompleto.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <View>
      <TextInput
        placeholder="Buscar persona"
        value={filtro}
        onChangeText={setFiltro}
      />

      <Button
        title="Añadir Persona"
        onPress={() => {
          vm.limpiarSeleccion();
          navigation.navigate("EditarInsertarPersonas");
        }}
      />

      <FlatList
        data={personasFiltradas}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <PersonaListItem
            persona={item}
            onPress={() => {
              vm.seleccionarPersona(item);
              navigation.navigate("EditarInsertarPersonas");
            }}
          />
        )}
      />
    </View>
  );
}
