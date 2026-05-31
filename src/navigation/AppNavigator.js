import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import CookModeScreen from '../screens/CookModeScreen';
import { colors } from '../data/recipeData';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface, shadowColor: 'transparent' },
          headerTintColor: colors.text,
          headerTitleStyle: { fontWeight: '800' },
          cardStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Recipes" component={RecipeListScreen} />
        <Stack.Screen name="Recipe Detail" component={RecipeDetailScreen} />
        <Stack.Screen name="Cook Mode" component={CookModeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
