import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Demo"
>;

const DemoScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className='bg-[#e5962d]'>
      <TouchableOpacity>
        <Ionicons name='arrow-back' size={50} color='white' />
        <Text>Go back</Text>
      </TouchableOpacity>
      <Text>DemoScreen</Text>
    </SafeAreaView>
  )
}

export default DemoScreen