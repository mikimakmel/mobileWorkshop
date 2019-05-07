import React, { Component }from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements'

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
        height: 0,
    },
})

  render() {
    const { navigation } = this.props
    return (
      <ImageBackground source={require('../assets/backgroundImage.jpg')} style={styles.imageBackgroundContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerBackground}>
            <Text style={styles.header}>W O R K S H O P</Text>
          </View>
        </View>

        <View style={styles.bottomScreenContainer}>
          <View style={styles.menuContainer}> 
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => { navigation.navigate('GeoLocationScreen') }}
                title="GeoLocation"
                buttonStyle={[styles.button, styles.buttonColor1]}
                textStyle={styles.buttonText}
                raised={true}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => { navigation.navigate('GyroscopeScreen') }}
                title="Gyroscope"
                buttonStyle={[styles.button, styles.buttonColor2]}
                textStyle={styles.buttonText}
                raised={true}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => { navigation.navigate('AccelerometerScreen') }}
                title="Accelerometer"
                buttonStyle={[styles.button, styles.buttonColor3]}
                textStyle={styles.buttonText}
                raised={true}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => { navigation.navigate('GesturesScreen') }}
                title="Gestures"
                buttonStyle={[styles.button, styles.buttonColor4]}
                textStyle={styles.buttonText}
                raised={true}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(47,163,218, 0.5)'
  },
  headerContainer: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    color: 'white',
    fontSize: 28,
    borderColor: 'white',
    borderWidth: 2,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
  headerBackground: { 
    backgroundColor: 'rgba(255,255,255, 0.25)',
  },
  bottomScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
    paddingTop: 120
  },
  menuContainer: {
    height: '60%',
    flexDirection: 'row', 
    flexWrap: 'wrap',
    // backgroundColor: 'purple',
  },
  buttonContainer: {
    width: '50%',
    height: '50%',
    padding: 10,
    // backgroundColor: 'grey',
  },
  button: {
    width: '100%',
    height: '100%',
    borderColor: 'white',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Ariel'
  },
  buttonColor1: {
    backgroundColor: '#2096F3',
    opacity: 0.8
  },
  buttonColor2: {
    backgroundColor: '#FFC108',
    opacity: 0.8
  },
  buttonColor3: {
    backgroundColor: '#8AC24A',
    opacity: 0.8
  },
  buttonColor4: {
    backgroundColor: '#FF5722',
    opacity: 0.8
  },
})