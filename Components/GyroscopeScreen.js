import React, { Component }from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Gyroscope } from 'expo'

export default class GyroscopeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gyroscopeData: {},
        }
    }

    componentDidMount() {
        Gyroscope.addListener(result => {
            this.setState({ gyroscopeData: result });
        })
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Gyroscope',
        headerTitleStyle: {
            fontSize: 18
        },
        headerStyle: {
            height: 50,
        },
    })

    render() {
        // console.log(this.state.gyroscopeData)
        
        return (
        <View>
            <Text>Gyroscope</Text>
        </View>
        )
    }
}

