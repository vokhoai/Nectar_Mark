import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Number from './src/componnets/Number';
import Onbording from './src/componnets/Onbording';
import Sing_in from './src/componnets/Sing_in';
import Splash_screen from './src/componnets/Splash_screen';
import Verification from './src/componnets/Verification';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
     <Stack.Navigator>

      <Stack.Screen name="Splash_screen" component={Splash_screen} options={{headerShown:false}}/>
      <Stack.Screen name="Onbording" component={Onbording} options={{headerShown:false}} />
      <Stack.Screen name="Sing_in" component={Sing_in} options={{headerShown:false}} />
      <Stack.Screen name="Number" component={Number} options={{headerShown:false}} />
      <Stack.Screen name="Verification" component={Verification} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
