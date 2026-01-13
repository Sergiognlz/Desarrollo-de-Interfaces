import { createDrawerNavigator } from "@react-navigation/drawer";
import index from "../Views/Home/index";
import ListadoPersonasView from "../Views/Persona/ListadoPersonaView";
import ListadoDepartamentos from "../Views/Departamento/ListadoDepartamentoView";

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={index} />
      <Drawer.Screen name="Personas" component={ListadoPersonasView} />
      <Drawer.Screen name="Departamentos" component={ListadoDepartamentos} />
    </Drawer.Navigator>
  );
}
