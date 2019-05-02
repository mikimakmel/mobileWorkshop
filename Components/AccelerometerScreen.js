import React, { Component }from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Accelerometer  } from 'expo'

export default class AccelerometerScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            accelerometerData: {},
        }
    }

    componentDidMount() {
        Accelerometer.addListener(result => {
            this.setState({ accelerometerData: result })
        })
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Accelerometer',
        headerTitleStyle: {
            fontSize: 18
        },
        headerStyle: {
            height: 70,
        },
    })

    render() {
        // console.log(this.state.accelerometerData)
        
        return (
        <View>
            <Text>Accelerometer</Text>
        </View>
        )
    }
}

