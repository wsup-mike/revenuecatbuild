// Creating a custom hook: To track 3 things: current offerings, customer info, is user pro member
import { useState } from "react";
import { Platform } from "react-native"; // to detect the type of OS user is on
import Purchases from "react-native-purchases/dist/purchases"; // to import from react native purchases
import { CustomerInfo } from "react-native-purchases/dist/customerInfo";
import { PurchasesOffering } from "react-native-purchases/dist/offerings";

const apiKeys = { // Normally we should put this in a .env file!
    apple: 'appl_WlRlUBLoWljLTsqoPspfNfEYkwj', // The RevenueCat API key for iOS build
    google: '', // The RevenueCat API key for Androids
}

function useRevenueCat() {
    
}

export default useRevenueCat;