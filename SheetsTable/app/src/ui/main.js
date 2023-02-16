import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { ActivityIndicator, Button, DataTable } from "react-native-paper";
import { Environment } from "../../global/env";
import { getData } from "../utils/GoogleSheetsAuth";
import Pie from 'react-native-pie'
import Row from "./Row";
import { countOccurrences, randomColor } from "../utils/calculationUtils";
import { ColorKey } from "./colorKey";
import ColorKeysList from "./colorKeys";


const MainScreen = () => {
    const [data, setData] = useState()
    const [pieData, setPieData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
       getTablesData()

    }, [])

    const getTablesData = () => {
        setLoading(true)
        getData(Environment.buildRequest()).then(res => {
            setData(res.values)
            setPieData(countOccurrences(res.values))
            setLoading(false)
        })
    }


    return (
        <ScrollView>
            <Text style={{textAlign:'center', fontWeight:'bold', fontSize:24, marginVertical:10}}> Google Sheets Tables </Text>
            <Button mode="elevated" onPress={getTablesData} style={{width:'50%',marginHorizontal:'25%'}}>getData</Button>
            { loading ? <View style={{margin:'25%'}}>
                <ActivityIndicator size={'large'}/> 
                </View>
                : 
            <View>
            {data &&
                <DataTable>
                    <DataTable.Header style={{BackGroundColor:'rgba(255,188,100,0.4'}}>
                        {data[0].map(title => (<DataTable.Title>{title}</DataTable.Title>))}
                    </DataTable.Header>
                    {data.slice(1).map(row => (
                        <DataTable.Row>
                            {row.map(item => (<DataTable.Cell>{item}</DataTable.Cell>))}
                        </DataTable.Row>
                    ))}
                </DataTable>


            }
            {pieData &&
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column' }}>

                        {pieData.map(d => {
                            let pieLength = data.length-1
                            let title = Object.keys(d)
                            let tableData = Object.entries(Object.values(d)[0])
                                console.log(pieLength)
                            return (
                                <View style={{ margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ alignItems: "center" }} >
                                        <Text>{title[0]}</Text>
                                        <Pie
                                            radius={80}
                                            sections={tableData.map(([_, item]) => {
                                                return (
                                                    {
                                                        percentage: item.count / (pieLength) * 100,
                                                        color: item.color
                                                    }
                                                )
                                            })}
                                            strokeCap={'butt'}
                                        />
                                    </View>
                                    <View style={{ borderColor: '#000000', borderWidth: 1, paddingHorizontal: 5, marginHorizontal: 10 }}>
                                        {Object.values(d).map(ck => (<ColorKeysList colorKeysList={Object.values(ck)} length={pieLength} />)
                                        )}
                                    </View>

                                </View>
                            )
                        })}
                    </View>

                </View>
            }
            </View>
            }

        </ScrollView>
    )
}

export default MainScreen