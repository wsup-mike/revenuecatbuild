import { Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-100 relative'>
        <ScrollView>
      {/* Pro/UpgradeIconButton */}
        <TouchableOpacity className='absolute z-50 top-5 right-10 items-center'>
            <Ionicons name={'person-circle'} />
            <Text>PRO</Text>
        </TouchableOpacity>

      {/* Image */}
      <Image 
        source={{ uri:'https://i.imgur.com/e14NE49.png'}} 
        className='w-full h-64'
        />

      {/* ActionRow */}
      {/* ActionRow */}
      {/* ActionRow */}
      {/* ActionRow */}
      {/* ActionRow */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen