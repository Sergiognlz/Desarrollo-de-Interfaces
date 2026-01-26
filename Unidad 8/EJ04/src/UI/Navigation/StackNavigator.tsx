import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditarInsertarDepartamento from "../../app/Departamento/EditarInsertarDepartamento";
import EditarInsertarPersonas from "../../app/Persona/EditarInsertarPersonas";
import AppDrawer from "./DrawerNavigator"; // <-- tu Drawer

// 🔹 Definimos los tipos de rutas y sus parámetros
export type RootStackParamList = {
  Root: undefined; // El Drawer
  EditarInsertarPersonas: undefined; // Formulario persona
  EditarInsertarDepartamento: undefined; // Formulario departamento
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      {/* Drawer como raíz */}
      <Stack.Screen
        name="Root"
        component={AppDrawer}
        options={{ headerShown: false }}
      />

      {/* Formularios de edición/creación */}
      <Stack.Screen
        name="EditarInsertarPersonas"
        component={EditarInsertarPersonas}
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
