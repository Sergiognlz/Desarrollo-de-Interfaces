import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../app/(Drawer)/index"; // pantalla de inicio
import ListadoDepartamentosView from "../../app/(Drawer)/ListadoDepartamento";
import ListadoPersonasView from "../../app/(Drawer)/ListadoPersona";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="index"
      screenOptions={{
        headerStyle: { backgroundColor: "#6200EE" },
        headerTintColor: "#fff",
        drawerActiveTintColor: "#6200EE",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen name="index" component={Home} options={{ title: "Inicio" }} />
      <Drawer.Screen
        name="ListadoPersona"
        component={ListadoPersonasView}
        options={{ title: "Personas" }}
      />
      <Drawer.Screen
        name="ListadoDepartamento"
        component={ListadoDepartamentosView}
        options={{ title: "Departamentos" }}
      />
    </Drawer.Navigator>
  );
}
