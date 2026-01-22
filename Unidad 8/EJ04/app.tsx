import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import ListadoDepartamentosView from "./src/app/(Drawer)/ListadoDepartamento";
import ListadoPersonasView from "./src/app/(Drawer)/ListadoPersona";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Personas"
        screenOptions={{
          headerStyle: { backgroundColor: "#6200EE" }, // barra superior
          headerTintColor: "#fff", // color del texto en header
          drawerActiveTintColor: "#6200EE", // color del item activo
          drawerInactiveTintColor: "#333", // color de items inactivos
          drawerLabelStyle: { fontSize: 16 }, // tamaño de letra en Drawer
        }}
      >
        {/* Solo estas dos opciones aparecerán en el Drawer */}
        <Drawer.Screen
          name="Personas"
          component={ListadoPersonasView}
          options={{ title: "Listado de Personas" }}
        />
        <Drawer.Screen
          name="Departamentos"
          component={ListadoDepartamentosView}
          options={{ title: "Listado de Departamentos" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
