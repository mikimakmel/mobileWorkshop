import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './HomeScreen'
import GeoLocationScreen from './GeoLocationScreen'
import GyroscopeScreen from './GyroscopeScreen'
import AccelerometerScreen from './AccelerometerScreen'
import GesturesScreen from './GesturesScreen'

const AppNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    GeoLocationScreen: { screen: GeoLocationScreen },
    GyroscopeScreen: { screen: GyroscopeScreen },
    AccelerometerScreen: { screen: AccelerometerScreen },
    GesturesScreen: { screen: GesturesScreen }
})

export default createAppContainer(AppNavigator)