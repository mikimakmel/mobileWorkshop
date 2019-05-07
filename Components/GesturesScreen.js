import React, { Component }from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import Draggable from 'react-native-draggable'
import Swiper from 'react-native-swiper'
import { Button } from 'react-native-elements'

export default class GesturesScreen extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Gestures',
        headerTitleStyle: {
            fontSize: 18
        },
        headerStyle: {
            height: 50,
        },
    })

    render() {    
        return (
            <Swiper>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Swipe Me</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold', paddingTop: 100}}>Drag My Face</Text>
                    <Draggable 
                    renderShape='image' 
                    imageSource={require('../assets/trump.png')}
                    renderText='Drag Me'
                    renderSize={100}
                    reverse={false} 
                    offsetX={40} 
                    offsetY={20} 
                    /> 
                </View>
                <View style={styles.slide3}>
                    <TouchableOpacity onLongPress={() => Alert.alert('Build a WALL!')} style={styles.button}>
                        <Text style={styles.text}>Long Press</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
    //   justifyContent: 'center',
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
    },
    button: {
        width: 200,
        height: 200,
        borderRadius: 400,
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderColor: 'white',
    },
  })