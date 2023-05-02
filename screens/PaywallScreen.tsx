import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const PaywallScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-cyan-950 items-center p-6'>
        <Ionicons />
        <Text>UPGRADE</Text>
        <Text></Text>
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