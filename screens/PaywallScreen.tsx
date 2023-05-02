import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'

export type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Paywall"
>;

const PaywallScreen = () => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView className='flex-1 bg-[#1a2f44] items-center'>
            <TouchableOpacity onPress={navigation.goBack} className='absolute top-0 right-0 p-5'>
                <Ionicons name='md-close-circle-sharp' size={32} color={'#e5962d'}/>
            </TouchableOpacity>
            <Text className='text-white text-2xl font-extrabold'>UPGRADE</Text>
            <Text className='text-white mt-2'>Upgrade to Pro to Access all the Features</Text>
            <Ionicons />
            <View>
                {/* Access to all pro features */}
                <View className='flex-row space-x-10 items-center'>
                    <View>
                        <Ionicons name='md-key' size={32} color={'#e5962d'}/>
                    </View>
                    <View>
                        <Text className='text-white text-lg font-bold'>Access to all pro features</Text>
                        <Text className='text-white font-extralight text-sm'>Upgrade to the premium version of the app and enjoy all the exclusive features available only to pro users.</Text>
                    </View>
                </View>

                {/* Access to all pro features */}
                <View className='flex-row space-x-10 items-center'>
                    <View>
                        <Ionicons name='md-person-add-outline' size={32} color={'#e5962d'}/>
                    </View>
                    <View>
                        <Text className='text-white text-lg font-bold'>Helpline 24/7 to Personal Trainers</Text>
                        <Text className='text-white font-extralight text-sm'>Get unlimited access to our fitness support team and get help anytime you need it - day or night.</Text>
                    </View>
                </View>

                {/* Access to all pro features */}
                <View className='flex-row space-x-10 items-center'>
                    <View>
                        <Ionicons name='md-star' size={32} color={'#e5962d'}/>
                    </View>
                    <View>
                        <Text className='text-white text-lg font-bold'>Unlock Limited Edition Content</Text>
                        <Text className='text-white font-extralight text-sm'>Unlock exclusive content that you can get anywhere else like special exclusive workouts and routines.</Text>
                    </View>
                </View>
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