import { Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import ActionRow from '../components/ActionRow';

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-100 relative'>
        <ScrollView>
      {/* Pro/UpgradeIconButton */}
        <TouchableOpacity className='absolute z-50 top-5 right-10 items-center'>
            <Ionicons name={'person-circle'} size={24} color='#E5962D'/>
            <Text className='text-center text-[#E5962D]'>PRO</Text>
        </TouchableOpacity>

      {/* Image */}
      <Image 
        source={{ uri:'https://i.imgur.com/e14NE49.png'}} 
        className='w-full h-64'
        />

      {/* ActionRow */}\
      <ActionRow 
        title="Track Workout"
        screen="Demo"
        color="#E5962D"
        requiresPro={false}
        icon="fitness"
        vertical={false}
      />
   
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen