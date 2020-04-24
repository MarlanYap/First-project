import React, { Component } from 'react'
import {View, Text, FlatList} from 'react-native'

class List extends Component{
    constructor(){
        super()
        this.state = {
            students:[
                {
                    id:1,
                    name:'John',
                    faculty:'Computer Science'
                },
                {
                    id:2,
                    name:'Jane',
                    faculty:'Bussiness'
                },
                {
                    id:3,
                    name:'Bob',
                    faculty:'Nurse'
                },
                {
                    id:4,
                    name:'Mike',
                    faculty:'Computer Science'
                }
            ],
            refreshing:false
        }
    }

    onRefresh = () => {
        this.setState({refreshing:true})
        const data = this.state.students.concat({id:5,name:'Alan',faculty:'Computer Science'})
        this.setState({
            refreshing:false,
            students:data
        })

    }
    
    render(){
        const ListStudents = this.state.students.map(student => 
            <View style={{padding:20, borderBottomWidth:1, borderBottomColor:'#000',flexDirection:'row',backgroundColor:'yellow',justifyContent:'center'}}>
                <Text key={student.id}>Nama : {student.name}</Text>
                <Text>Fakultas : {student.faculty}</Text>
            </View>)
        return(
            <View>
                {ListStudents}
                {this.onRefresh}
            </View>
        )
    }
}

export default List;
