import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './HomeScreen'
import GeoLocationScreen from './GeoLocationScreen'
import GyroscopeScreen from './GyroscopeScreen'
import AccelerometerScreen from './AccelerometerScreen'

const AppNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    GeoLocationScreen: { screen: GeoLocationScreen },
    GyroscopeScreen: { screen: GyroscopeScreen },
    AccelerometerScreen: { screen: AccelerometerScreen }
})

export default createAppContainer(AppNavigator)