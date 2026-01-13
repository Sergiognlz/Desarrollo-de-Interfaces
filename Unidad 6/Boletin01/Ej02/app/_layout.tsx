import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Pantalla de inicio / login */}
      <Stack.Screen 
        name="index" 
        options={{ title: 'Inicio' }} 
      />

      {/* Pantalla principal */}
      <Stack.Screen 
        name="home" 
        options={{ title: 'Página Principal' }} 
      />

      {/* Pantalla de registro */}
      <Stack.Screen 
        name="register" 
        options={{ 
          title: 'Nuevo usuario', // título en el header
          headerBackTitle: 'Atrás' // texto del botón atrás
        }} 
      />
    </Stack>
  );
}
