import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Demo"
>;

const DemoScreen = () => {
  
  return (
    <SafeAreaView>
      <Text>DemoScreen</Text>
    </SafeAreaView>
  )
}

export default DemoScreen