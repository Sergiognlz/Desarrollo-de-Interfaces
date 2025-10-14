import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { DATA } from '../Model/Data/Repositorio';



export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 20, marginVertical: 10 }}>{item.nombre}</Text>
        )}
      />
      <Text>Lista Negra.</Text>
    </View>
  );
}