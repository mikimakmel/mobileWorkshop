import React, { Component }from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Draggable from 'react-native-draggable'
import Swiper from 'react-native-swiper'

export default class GesturesScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Gestures',
        headerTitleStyle: {
            fontSize: 18
        },
        headerStyle: {
            height: 70,
        },
    })

    render() {    
        return (
            <Swiper style={styles.wrapper}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>

        // <View>
        //     <Draggable 
        //     renderShape='image' 
        //     imageSource={require('../assets/trump.png')}
        //     renderText='Drag Me'
        //     renderSize={100}
        //     reverse={false} 
        //     offsetX={10} 
        //     offsetY={10} 
        //     /> 
        // </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  })