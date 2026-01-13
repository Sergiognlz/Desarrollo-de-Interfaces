import { View, TextInput, Button } from "react-native";
import { useEffect, useState } from "react";
import { DepartamentoViewModel } from "../../ViewModels/Departamento/DepartamentoViewModel"

const vm = DepartamentoViewModel.getInstance();

export default function EditarInsertarDepartamento({ navigation }: any) {
  const dep = vm.departamentoSeleccionado;
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    if (dep) {
      setNombre(dep.nombre);
    }
  }, []);

  const guardar = async () => {
    await vm.crearDepartamento(nombre);
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        placeholder="Nombre del departamento"
        value={nombre}
        onChangeText={setNombre}
      />
      <Button title="Guardar" onPress={guardar} />
    </View>
  );
}
