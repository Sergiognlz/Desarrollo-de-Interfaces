import {Drawer} from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <Drawer>
        <Drawer.Screen 
        name="index" 
        options={{
          headerTitle: 'Profile',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}/>
        <Drawer.Screen name="profile" 
        options={{
          headerTitle: 'Profile',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}/>
        <Drawer.Screen name="settings" 
        options={{
          headerTitle: 'Profile',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline"size={size} color={color} />
          ),
        }} />
    </Drawer>
    );
}

