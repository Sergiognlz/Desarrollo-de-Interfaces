import { View, Button, FlatList } from "react-native";
import { useEffect } from "react";
import { DepartamentoViewModel } from    "../../ViewModels/Departamento/DepartamentoViewModel";
import { DepartamentoListItem } from    "../../Components/Departamento/DepartamentoListItem";

const vm = DepartamentoViewModel.getInstance();

export default function ListadoDepartamentos({ navigation }: any) {
  useEffect(() => {
    vm.cargarDepartamentos();
  }, []);

  return (
    <View>
      <Button
        title="Añadir Departamento"
        onPress={() => {
          vm.limpiarSeleccion();
          navigation.navigate("EditarInsertarDepartamento");
        }}
      />

      <FlatList
        data={vm.departamentos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <DepartamentoListItem
            departamento={item}
            onPress={() => {
              vm.seleccionarDepartamento(item);
              navigation.navigate("EditarInsertarDepartamento");
            }}
          />
        )}
      />
    </View>
  );
}
