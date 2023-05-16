// Creating a custom hook: To track 3 things: current offerings, customer info, is user pro member
import { useState, useEffect } from "react";
import { Platform } from "react-native"; // to detect the type of OS user is on
import Purchases from "react-native-purchases/dist/purchases"; // to import from react native purchases
import { CustomerInfo } from "react-native-purchases/dist/customerInfo";
import { PurchasesOffering } from "react-native-purchases/dist/offerings";

const apiKeys = { // Normally we should put this in a .env file!
    apple: 'appl_WlRlUBLoWljLTsqoPspfNfEYkwj', // The RevenueCat API key for iOS build
    google: '', // The RevenueCat API key for Androids
}

const typesOfMembership = {
    monthly: "pro",
    yearly: "proAnnual",
}

function useRevenueCat() {
    const [currentOffering, setCurrentOffering] = useState<PurchasesOffering | null>(null);
    const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
    const isProMember = 
        customerInfo?.activeSubscriptions.includes(typesOfMembership.monthly) || 
        customerInfo?.activeSubscriptions.includes(typesOfMembership.yearly); // Will alert if a user is a pro member or not

    useEffect(() => {
        const fetchData = async () => {
            // Purchases.setDebugLogsEnabled(true) // first to enable the debug logs for our purchases // looks like this is deprecated
            // Now to detect user's OS platform
            if (Platform.OS === 'android') {
                await Purchases.configure({ apiKey: apiKeys.google});
            } else {
                await Purchases.configure({ apiKey: apiKeys.apple });
            }

            // Next to retrieve all available 'offerings' (The 2 offerings we created:The PRO offering with packages of monthly and annual)
            const offerings = await Purchases.getOfferings();

            // Next to get 'customer info'
            const customerInfo = await Purchases.getCustomerInfo();

            // Next to set the currentOffering state with returned 'offerings'
            setCurrentOffering(offerings.current);

            //Next to set the customerInfo state with returned 'customerInfo'
            setCustomerInfo(customerInfo);
        }

        // Now to actually call fetchData above with some error handling
        fetchData().catch(console.error);
        
    }, []);

    
}

export default useRevenueCat;