import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

 const ColorKey = ({color, Key, value}) => {
    

    return ( <View style={{ flexDirection: 'row', alignItems:'center' }}>
            <View style={{ backgroundColor: color, margin: 10, padding:10 }}>
                <Text >{value}%</Text>
            </View>
            <Text>{Key}</Text>
        </View>
    )
}

export default ColorKey