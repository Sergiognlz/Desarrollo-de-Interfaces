import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerNavigator } from "./DrawerNavigator";
import EditarInsertarPersona from "../Views/Persona/EditarInsertarPersonaView";
import EditarInsertarDepartamento from "../Views/Departamento/EditarInsertarDepartamentoView";

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditarInsertarPersonas"
        component={EditarInsertarPersona}
        options={{ title: "Persona" }}
      />
      <Stack.Screen
        name="EditarInsertarDepartamento"
        component={EditarInsertarDepartamento}
        options={{ title: "Departamento" }}
      />
    </Stack.Navigator>
  );
}
