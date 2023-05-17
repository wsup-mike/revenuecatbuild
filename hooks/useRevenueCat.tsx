// Creating a custom hook: To track 3 things: current offerings, customer info, is user pro member
// This custom hook can be used anywhere in our app and when we run it it can tell us: if user is pro member, all the revenuecat offerings, or give customers current info.
import { useState, useEffect } from "react";
import { Platform } from "react-native"; // to detect the type of OS user is on
// import Purchases from "react-native-purchases/dist/purchases"; // to import from react native purchases
import Purchases from 'react-native-purchases';
import { CustomerInfo } from "react-native-purchases/dist/customerInfo";
import { PurchasesOffering } from "react-native-purchases";
import { LOG_LEVEL } from 'react-native-purchases'

const apiKeys = { // Normally we should put this in a .env file!
    apple: 'appl_WlRlUBLoWljLTsqoPspfNfEYkwj', // The RevenueCat API key for iOS build
    google: 'your_revenuecat_google_api_key',
}

const typesOfMembership = {
    monthly: "proMonthly", // From App Store Connect 'Product ID'
    yearly: "proYearly", // From App Store Connect 'Product ID'
}

function useRevenueCat() {
    const [currentOffering, setCurrentOffering] = useState<PurchasesOffering | null>(null);
    const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
    const isProMember = 
        customerInfo?.activeSubscriptions.includes(typesOfMembership.monthly) || 
        customerInfo?.activeSubscriptions.includes(typesOfMembership.yearly); // Will alert if a user is a pro member or not

    useEffect(() => {
        const fetchData = async () => {
            // Enables debug logs for the Purchases module! Now can see addl info during development!
            Purchases.setLogLevel(LOG_LEVEL.DEBUG); // Set log level to DEBUG for enhanced logging

            // This configures 'Purchases' once! We initialize n configure the SDK here.Now to detect user's OS platform
            if (Platform.OS === 'ios') { // 
                await Purchases.configure({apiKey: apiKeys.apple });
            } else {
                await Purchases.configure({ apiKey: apiKeys.google });
            }

            // Next to retrieve all available 'offerings' (The 2 offerings we created:The PRO offering with packages of monthly and annual)
            const offerings = await Purchases.getOfferings();

            // Next to get 'customer info'
            const customerInfo = await Purchases.getCustomerInfo();

            // Next to set the currentOffering state with returned 'offerings'
            setCurrentOffering(offerings.current);

            //Next to set the customerInfo state with returned 'customerInfo'
            setCustomerInfo(customerInfo);
        };

        // Now to actually call fetchData above with some error handling
        fetchData().catch(console.error);
        
    }, []);

    // This will now creaet a listener! If a user subscribes to a PRO membership at RevenueCatSDK, then this customer info will be set to customerInfo state. Now the component can respond to changes in customer info we get from RevenueCat
    useEffect(() => {
        const customerInfoUpdated = async (purchaserInfo: CustomerInfo) => {
            setCustomerInfo(purchaserInfo)
        }

        Purchases.addCustomerInfoUpdateListener(customerInfoUpdated);
    }, [])

    // Now the following return will expose access to these 3 values that can now be used anywhere in the code! Includes the state values and the computed values. any of our components have access to these values!
    return { currentOffering, customerInfo, isProMember }
}

export default useRevenueCat;