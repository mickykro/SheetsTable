import React from "react";
import { FlatList, Text } from "react-native";

const Row = ({infoList, title}) => {
    console.log('row',infoList)
    return (
        <FlatList
        horizontal={true}
        scrollEnabled={false}
        data={infoList}
        contentContainerStyle={{justifyContent:"space-between", borderBottomColor:'#000000',borderBottomWidth:2, width:'98%', padding:10}}
        renderItem={item => ( <Text style={{color: title? 'rgba(255,129,33,0.8)': '#000000', textAlign:'right'}}>{item.item}</Text>)}
        />
    )
}

export default Row