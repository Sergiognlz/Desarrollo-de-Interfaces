import React from 'react';
import { withLayoutContext } from 'expo-router';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';

const { Navigator } = createMaterialTopTabNavigator();

// “Envolvemos” el Navigator para que funcione con Expo Router
export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function TopTabsLayout() {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: 'purple',
        tabBarIndicatorStyle: { backgroundColor: 'purple' },
        tabBarLabelStyle: { fontWeight: 'bold' },
      }}
    >
      <MaterialTopTabs.Screen
        name="index"
        options={{ title: 'Perfil' }}
      />
      <MaterialTopTabs.Screen
        name="galeria"
        options={{ title: 'Galería' }}
      />
    </MaterialTopTabs>
  );
}
