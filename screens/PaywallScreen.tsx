import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
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

            <Text className='text-white text-2xl font-extrabold mt-8'>UPGRADE</Text>
            <Text className='text-white mt-2'>Upgrade to Pro to Access all the Features</Text>

            {/* Hero Image */}
            <View className='py-2'>
                <MaterialCommunityIcons name='trophy-award' size={120} color='#e5962d'/>
            </View>

            <View className='space-y-3 pl-10 pr-14'>
                {/* Access to all pro features */}
                <View className='flex-row space-x-7 items-center '>
                    <View>
                        <Ionicons name='md-key' size={32} color={'#e5962d'}/>
                    </View>
                    <View>
                        <Text className='text-white text-lg font-bold'>Access to all pro features</Text>
                        <Text className='text-white font-extralight text-sm'>Upgrade to the premium version of the app and enjoy all the exclusive features available only to pro users.</Text>
                    </View>
                </View>

                {/* Helpline 247 */}
                <View className='flex-row space-x-7 items-center'>
                    <View>
                        <Ionicons name='md-person-add-outline' size={32} color={'#e5962d'}/>
                    </View>
                    <View>
                        <Text className='text-white text-lg font-bold'>Helpline 24/7 to Personal Trainers</Text>
                        <Text className='text-white font-extralight text-sm'>Get unlimited access to our fitness support team and get help anytime you need it - day or night.</Text>
                    </View>
                </View>

                {/* Unlock unlimited */}
                <View className='flex-row space-x-7 items-center'>
                    <View>
                        <Ionicons name='md-star' size={32} color={'#e5962d'}/>
                    </View>
                    <View>
                        <Text className='text-white text-lg font-bold'>Unlock Limited Edition Content</Text>
                        <Text className='text-white font-extralight text-sm'>Unlock exclusive content that you can get anywhere else like special exclusive workouts and routines.</Text>
                    </View>
                </View>
            </View>

            {/* Monthly Subscription */}
            <View>
                <TouchableOpacity>
                    <View className='bg-[#e5962d] flex py-4 px-16 rounded-full mt-3'>
                        <Text className='text-white font-bold text-sm'>START A 1 x WEEK FREE TRIAL</Text>
                        <Text className='text-white text-center font-extralight'>$22.99/month thereafter</Text>
                    </View>
                </TouchableOpacity>

                {/* Annual Subscription */}
                <TouchableOpacity>
                    <View className='border-[#e5962d] border-2 flex py-4 px-16 rounded-full mt-3'>
                        <Text className='text-white font-bold text-sm text-center'>SAVE 50% ANNUALLY</Text>
                        <Text  className='text-white text-center font-extralight'>$149.99/year</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* Restore Purchases */}
            <TouchableOpacity>
                <Text className='mt-5 font-light text-[#e5962d]'>Restore Purchases</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default PaywallScreen