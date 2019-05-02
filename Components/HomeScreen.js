import React, { Component }from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class HomeScreen extends Component {

  constructor(props) {
    super(props)
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Workshop',
    headerTitleStyle: {
        fontSize: 18
    },
    headerStyle: {
        height: 70,
    },
})

  render() {
    const { navigation } = this.props
    return (
      <View>
        <Button
          onPress={() => { navigation.navigate('GeoLocationScreen') }}
          title="GeoLocation"
          color="#841584"
        />
        <Button
          onPress={() => { navigation.navigate('GyroscopeScreen') }}
          title="Gyroscope"
          color="#841584"
        />
        <Button
          onPress={() => { navigation.navigate('AccelerometerScreen') }}
          title="Accelerometer"
          color="#841584"
        />
      </View>
    )
  }
}

