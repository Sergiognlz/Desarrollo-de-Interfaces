// app/(Drawer)/_layout.tsx
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      initialRouteName="index" // ahora el drawer inicia en "Inicio"
      screenOptions={{
        headerStyle: { backgroundColor: "#6200EE" },
        headerTintColor: "#fff",
        drawerActiveTintColor: "#6200EE",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      {/* Primer elemento: Home */}
      <Drawer.Screen
        name="index"            // archivo: app/(Drawer)/Home.tsx
        options={{ drawerLabel: "Inicio" }}
      />

      {/* Segundo elemento: Personas */}
      <Drawer.Screen
        name="ListadoPersona" // archivo: app/(Drawer)/ListadoPersonasView.tsx
        options={{ drawerLabel: "Personas" }}
      />

      {/* Tercer elemento: Departamentos */}
      <Drawer.Screen
        name="ListadoDepartamento" // archivo: app/(Drawer)/ListadoDepartamentosView.tsx
        options={{ drawerLabel: "Departamentos" }}
      />
    </Drawer>
  );
}
