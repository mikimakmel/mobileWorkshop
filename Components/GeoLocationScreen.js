import React, { Component } from 'react'
import { Platform, Text, View, StyleSheet } from 'react-native'
import { Constants, Location, Permissions } from 'expo'
import MapView from 'react-native-maps'

export default class GeoLocation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      location: {},
      latitude: 0,
      longitude: 0,
      errorMessage: null,
    }
    this._getLocationAsync = this._getLocationAsync.bind(this)
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'GeoLocation',
    headerTitleStyle: {
        fontSize: 18
    },
    headerStyle: {
        height: 70,
    },
  })

  componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      })
    } else {
      this._getLocationAsync()
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      })
    }

    let location = await Location.getCurrentPositionAsync({})

    this.setState({ 
      location: location,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    })
  }

  render() {
    let text = 'Waiting..'
    if (this.state.errorMessage) {
      text = this.state.errorMessage
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location)
    }

    // let check = JSON.parse(this.state.location)
    // console.log(this.state.location.coords)

    return (
      <View style={styles.mapContainer}>
        <MapView style={styles.map}
          region={{
            latitude: this.state.latitude,
            latitudeDelta: 0.1,
            longitude: this.state.longitude,
            longitudeDelta: 0.1
          }}
        >
          <MapView.Marker coordinate={{latitude: this.state.latitude, longitude: this.state.longitude}} />
        </MapView>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
})

