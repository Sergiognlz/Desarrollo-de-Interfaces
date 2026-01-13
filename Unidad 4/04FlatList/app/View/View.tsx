import React, { useMemo, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { ListadoPersonas } from '../ViewModel/ViewModel';


export default function Index() {


  const vm=new ListadoPersonas();
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={vm.personasList}
        keyExtractor={(item) => item.Id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => vm.personaSeleccionada = item}>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 10,
                backgroundColor: vm.personaSeleccionada?.Id === item.Id ? 'lightblue' : 'white',
              }}
            >
              {item.Nombre}
            </Text>
          </Pressable>
        )}
      />

      {vm && (
        <Text style={{ marginTop: 20, fontSize: 18 }}>
          Seleccionada: {vm.personaSeleccionada ? vm.personaSeleccionada.Nombre : 'Ninguna'}  
        </Text>
      )}

      <Text style={{ marginTop: 20 }}>Lista Negra.</Text>
    </View>
  );
}