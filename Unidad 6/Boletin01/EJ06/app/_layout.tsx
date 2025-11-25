import { Stack } from "expo-router";

export default function RootLayout() {

  return (
  <Stack screenOptions={{headerShown: false}}>
    
    <Stack.Screen name="index" options={{headerTitle: 'Inicio'}} />
    <Stack.Screen name="profile" options={{headerTitle: 'Perfil'}}/>
    <Stack.Screen name="settings" options={{headerTitle: 'Ajustes'}}/>

  </Stack>
    
    
  );
}
