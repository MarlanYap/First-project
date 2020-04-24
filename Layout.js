import React from 'react'
import {StyleSheet,View, Text} from 'react-native'

const Layout = () => {
    return (
        <View style={{flex:1,flexDirection:'row', justifyContent:'space-around',alignItems:'stretch'}}>
            <View style={{width:50, backgroundColor: 'red'}}></View>
            <View style={{width:50, height:50, backgroundColor: 'yellow'}}></View>
            <View style={{width:50, height:50, backgroundColor: 'green'}}></View>
        </View>
    )
}
//tidak jadi
// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor:'white'
//     },
//     box1: {
//         flex: 1,
//         backgroundColor:'orange'
//     },
//     box2: {
//         flex: 3,
//         backgroundColor:'red'
//     },
//     box3: {
//         flex: 1,
//         backgroundColor:'green'
//     },
// })

export default Layout;