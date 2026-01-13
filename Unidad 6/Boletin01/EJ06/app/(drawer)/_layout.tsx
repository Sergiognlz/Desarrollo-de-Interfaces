import {Drawer} from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <Drawer >
      
        <Drawer.Screen name="settings" 
        options={{
          
          headerTitle: 'Settings',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline"size={size} color={color} />
          ),
        }} />
  
    </Drawer>
    );
}

