import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

const PaywallScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-[#1a2f44] items-center p-6'>
        <TouchableOpacity>
            <Ionicons name='md-close-circle-sharp' size={32} color={'#e5962d'}/>
        </TouchableOpacity>
        <Text className='text-white text-2xl font-extrabold'>UPGRADE</Text>
        <Text className='text-white mt-2'>Upgrade to Pro to Access all the Features</Text>
        <Ionicons />
        <View>
            {/* Access to all pro features */}
            <View>
                <Ionicons />
                <View></View>
            </View>

            {/* Access to all pro features */}

            {/* Access to all pro features */}
            <TouchableOpacity>
                <Text></Text>
                <Text></Text>
            </TouchableOpacity>
            <Text>Restore Purchases</Text>
        </View>
    </SafeAreaView>
  )
}

export default PaywallScreen