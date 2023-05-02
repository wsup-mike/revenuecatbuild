import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type Props = {
    title: string;
    screen: any;
    color: string;
    requiresPro?: boolean;
    icon?: any;
    vertical?: boolean;
}

const ActionRow = ({ 
    title, 
    screen, 
    color, 
    requiresPro, 
    icon, 
    vertical 
}: Props) => {
  return (
    <TouchableOpacity className='' style={{ backgroundColor: color }}>
        <Ionicons
            name={icon}
            size={30}
            color="white"
        />
        <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default ActionRow;