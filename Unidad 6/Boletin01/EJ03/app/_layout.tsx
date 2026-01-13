import { Stack } from "expo-router";

export default function RootLayout() {

  return (
  <Stack >
    
    <Stack.Screen name="index" options={{headerTitle: 'Inicio'}} />
    <Stack.Screen name="profile" options={{headerTitle: 'Perfil'}}/>
    <Stack.Screen name="search" options={{headerTitle: 'Búsqueda'}}/>

  </Stack>
    
    
  );
}
