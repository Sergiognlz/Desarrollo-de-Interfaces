import { View, TextInput, Button } from "react-native";
import { useEffect, useState } from "react";
import { PersonaViewModel } from "../../ViewModels/Persona/PersonaViewModel";
import { Persona } from "../../../Domain/Entities/Persona";

const vm = PersonaViewModel.getInstance();

export default function EditarInsertarPersonas({ navigation }: any) {
  const persona = vm.personaSeleccionada;

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");

  useEffect(() => {
    if (persona) {
      const [n, a] = persona.nombreCompleto.split(" ");
      setNombre(n);
      setApellido(a);
    }
  }, []);

  const guardar = async () => {
    const nuevaPersona = new Persona(
      persona ? persona.id : Date.now(),
      nombre,
      apellido,
      new Date(1990, 1, 1),
      direccion,
      telefono
    );

    if (persona) {
      await vm.actualizarPersona(nuevaPersona);
    } else {
      await vm.crearPersona(nuevaPersona);
    }

    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput placeholder="Apellido" value={apellido} onChangeText={setApellido} />
      <TextInput placeholder="Dirección" value={direccion} onChangeText={setDireccion} />
      <TextInput placeholder="Teléfono" value={telefono} onChangeText={setTelefono} />

      <Button title="Guardar" onPress={guardar} />
    </View>
  );
}
