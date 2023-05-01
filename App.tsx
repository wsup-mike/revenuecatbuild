import { StatusBar } from 'expo-status-bar';
import {  Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView className='flex-1 items-center justify-center bg-red-500'>
        <Text className='text-white'>This should be working!</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}
