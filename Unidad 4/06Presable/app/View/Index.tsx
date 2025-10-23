import { MiBoton    } from "../Components/MiBoton";
import React from "react";
import { View } from "react-native";

export const DetallesView = () => {
  return (
    <View>
      <MiBoton 
        texto="Volver al inicio" 
        onPress={() => console.log('Volviendo')} 
      />
      <MiBoton 
        texto="Guardar cambios" 
        onPress={() => console.log('Guardando')} 
      />
      <MiBoton 
        texto="Volver al inicio" 
        onPress={() => console.log('actualizando')} 
      />
      <MiBoton 
        texto="Guardar cambios" 
        onPress={() => console.log('Eliminando')} 
      />

      
    </View>
  );
};
