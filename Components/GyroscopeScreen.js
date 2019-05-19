//Three example

import { View as GraphicsView } from 'expo-graphics';
import ExpoTHREE, { THREE } from 'expo-three';
import React, { Component } from 'react'

export default class GyroscopeScreen extends Component {
  componentWillMount() {
    THREE.suppressExpoWarnings();
  }

  render() {
    // Create an `ExpoGraphics.View` covering the whole screen, tell it to call our
    // `onContextCreate` function once it's initialized.
    return (
      <GraphicsView
        onContextCreate={this.onContextCreate}
        onRender={this.onRender}
      />
    );
  }

  // This is called by the `ExpoGraphics.View` once it's initialized
  onContextCreate = async ({
    gl,
    canvas,
    width,
    height,
    scale: pixelRatio,
  }) => {
    this.renderer = new ExpoTHREE.Renderer({ gl, pixelRatio, width, height });
    this.renderer.setClearColor(0xffffff)
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;
    const geometry = new THREE.SphereBufferGeometry(1, 36, 36);

    const material = new THREE.MeshBasicMaterial({
      map: await ExpoTHREE.createTextureAsync({
        asset: Expo.Asset.fromModule(require("../img/panorama.png"))
      })
    });
    
    this.sphere = new THREE.Mesh(geometry, material);
    this.scene.add(this.sphere);

    this.scene.add(new THREE.AmbientLight(0x404040));

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(3, 3, 3);
    this.scene.add(light);
  };

  onRender = delta => {
    this.sphere.rotation.x += 0.1 * delta;
    this.sphere.rotation.y += 0.1 * delta;
    this.sphere.rotation.z += 0.1 * delta;
    this.renderer.render(this.scene, this.camera);
  };
}



//Gyroscope - Working

// import ExpoGraphics from 'expo-graphics';
// import ExpoTHREE, { THREE } from 'expo-three';

// import React, { Component } from 'react'
// import { Gyroscope } from 'expo';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// export default class GyroscopeScreen extends Component {
//   state = {
//     gyroscopeData: {},
//   };

//   componentDidMount() {
//     this._toggle();
//   }

//   componentWillUnmount() {
//     this._unsubscribe();
//     THREE.suppressExpoWarnings();
//   }

//   _toggle = () => {
//     if (this._subscription) {
//       this._unsubscribe();
//     } else {
//       this._subscribe();
//     }
//   };

//   _slow = () => {
//     Gyroscope.setUpdateInterval(1000);
//   };

//   _fast = () => {
//     Gyroscope.setUpdateInterval(16);
//   };

//   _subscribe = () => {
//     this._subscription = Gyroscope.addListener(result => {
//       this.setState({ gyroscopeData: result });
//     });
//   };

//   _unsubscribe = () => {
//     this._subscription && this._subscription.remove();
//     this._subscription = null;
//   };

//   render() {
//     let { x, y, z } = this.state.gyroscopeData;

//     return (
//       <View style={styles.sensor}>
//         <Text>Gyroscope:</Text>
//         <Text>
//           x: {round(x)} y: {round(y)} z: {round(z)}
//         </Text>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity onPress={this._toggle} style={styles.button}>
//             <Text>Toggle</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={this._slow} style={[styles.button, styles.middleButton]}>
//             <Text>Slow</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={this._fast} style={styles.button}>
//             <Text>Fast</Text>
//           </TouchableOpacity>
//         </View>

//         <ExpoGraphics.View
//         onContextCreate={this.onContextCreate}
//         onRender={this.onRender}
//         />
//       </View>
//     );
//   }

//   onContextCreate = async ({
//     gl,
//     canvas,
//     width,
//     height,
//     scale: pixelRatio,
//   }) => {
//     this.renderer = new ExpoTHREE.Renderer({ gl, pixelRatio, width, height });
//     this.renderer.setClearColor(0xffffff)
//     this.scene = new THREE.Scene();
//     this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     this.camera.position.z = 5;
//     const geometry = new THREE.BoxGeometry(1, 1, 1);

//     const material = new THREE.MeshPhongMaterial({
//       color: 0xff0000,
//     });
    
//     this.cube = new THREE.Mesh(geometry, material);
//     this.scene.add(this.cube);

//     this.scene.add(new THREE.AmbientLight(0x404040));

//     const light = new THREE.DirectionalLight(0xffffff, 0.5);
//     light.position.set(3, 3, 3);
//     this.scene.add(light);
//   };

//   onRender = delta => {
//     this.cube.rotation.x += 3.5 * delta;
//     this.cube.rotation.y += 2 * delta;
//     this.renderer.render(this.scene, this.camera);
//   };
// }

// function round(n) {
//   if (!n) {
//     return 0;
//   }

//   return Math.floor(n * 100) / 100;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     alignItems: 'stretch',
//     marginTop: 15,
//   },
//   button: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#eee',
//     padding: 10,
//   },
//   middleButton: {
//     borderLeftWidth: 1,
//     borderRightWidth: 1,
//     borderColor: '#ccc',
//   },
//   sensor: {
//     marginTop: 15,
//     paddingHorizontal: 10,
//   },
// });