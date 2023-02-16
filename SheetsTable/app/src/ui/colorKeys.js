import React from "react";
import { FlatList, Text } from "react-native";
import { randomColor } from "../utils/calculationUtils";
import ColorKey from "./colorKey";

const ColorKeysList = ({colorKeysList, length}) =>{

    return (<FlatList
    data={colorKeysList}
    scrollEnabled={false}
    renderItem={ck => {
        let colorKey = ck.item
        return <ColorKey color={colorKey.color} value={(colorKey.count / length * 100 ).toFixed(1)} Key={colorKey.key} />
    }}
    />)
}

export default ColorKeysList