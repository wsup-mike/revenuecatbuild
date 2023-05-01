import { StatusBar } from 'expo-status-bar';
import {  Text, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className='p-10'>
      <Text>This should be working!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
