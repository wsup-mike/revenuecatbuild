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
    <SafeAreaView className='bg-[#e5962d] flex-1'>
      <TouchableOpacity className='flex-row items-center p-5' onPress={navigation.goBack}>
        <Ionicons name='arrow-back' size={50} color='white' />
        <Text className='text-white'>Go back</Text>
      </TouchableOpacity>
      
      <View className='flex-1 justify-center items-center px-10'>
        <Text className='text-white text-2xl font-extrabold'>Hooray!</Text>
        <Text className='text-white text-2xl font-extrabold mb-20 text-center'>You have access to this feature!</Text>
        <Ionicons className='' name='build-outline' size={200} color='white' />
        <View className='-mt-16 -ml-8'>
          <Ionicons name='checkmark-circle-sharp' size={60} color='#96f550' />
        </View>
        <Text className='flex-1 text-white font-bold text-center mt-10'>This is where you createa a new screen and change the rest of the app so the navigation is as follows: navigation.navigate('ThePageYouWant')</Text>

      </View>

    </SafeAreaView>
  )
}

export default DemoScreen