import React, { Component }from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Accelerometer  } from 'expo'
import { BarChart } from 'react-native-chart-kit'

export default class AccelerometerScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            x: 1,
            y: 2,
            z: 3
        }
    }

    componentDidMount() {
        Accelerometer.addListener(result => {
            this.setState({ x: result.x })
            this.setState({ y: result.y })
            this.setState({ z: result.z })
        })
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Accelerometer',
        headerTitleStyle: {
            fontSize: 18
        },
        headerStyle: {
            height: 50,
        },
    })

    render() {
        const data = {
            labels: ['X', 'Y', 'Z'],
            datasets: [{
              data: [this.state.x, this.state.y, this.state.z]
            }]
        }
        
        return (
            <View style={styles.container}>
                <BarChart
                fromZero={true}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
                data={data}
                width={320}
                height={420}
                // yAxisLabel={'$'}
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 3,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16
                    }
                }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    //   backgroundColor: '#9DD6EB',
    },
})