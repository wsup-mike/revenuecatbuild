import { StatusBar } from 'expo-status-bar';
import {  Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DemoScreen from './screens/DemoScreen';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name='Demo' component={DemoScreen} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
