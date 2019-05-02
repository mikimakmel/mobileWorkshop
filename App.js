import React, { Component }from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'
import AppNavigtor from './Components/Navigator'

export default class App extends Component {
  render() {
    return (
      <AppNavigtor />
    )
  }
}

AppRegistry.registerComponent("workshop", () => App)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
