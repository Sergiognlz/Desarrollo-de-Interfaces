import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { PersonasViewModel } from '../ViewModels/PersonasViewModel';
import { Persona } from '../Models/Entities/Persona';

export const PersonasView = () => {
  const [vm] = useState(new PersonasViewModel());
  const [seleccion, setSeleccion] = useState<Persona | null>(null);

  const handlePress = (id: string) => {
    vm.seleccionarPersona(id);
    setSeleccion(vm.personaSeleccionada);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de Personas</Text>

      <FlatList
        data={vm.personas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.item}>
            <Text style={styles.text}>{item.nombre} {item.apellidos}</Text>
          </TouchableOpacity>
        )}
      />

      {seleccion && (
        <Text style={styles.selection}>
          Persona seleccionada: {seleccion.nombre} {seleccion.apellidos}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { padding: 10, backgroundColor: '#f0f0f0', marginVertical: 5, borderRadius: 5 },
  text: { fontSize: 16 },
  selection: { marginTop: 20, fontSize: 18, fontWeight: '500', color: 'blue' },
});
