import { View as GraphicsView } from 'expo-graphics';
import ExpoTHREE, { THREE } from 'expo-three';
import React, { Component } from 'react'
import { Gyroscope } from 'expo';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class GyroscopeScreen extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      gyroscopeData: {},
      x: 0,
      y: 0,
      z: 0
    }
  }

  componentDidMount() {
    Gyroscope.addListener(result => {
      this.setState({ x: result.x })
      this.setState({ y: result.y })
      this.setState({ z: result.z })
    })
  }

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
    this.camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
    this.camera.position.z = 5;
    const planeGeometry = new THREE.PlaneGeometry(4, 4);
    const geometry = new THREE.SphereBufferGeometry(1.5, 36, 36);
    const material = new THREE.MeshBasicMaterial({
      map: await ExpoTHREE.createTextureAsync({
        asset: require("../img/panorama.png")
      })
    });
    const planeMaterial = new THREE.MeshBasicMaterial({
      map: await ExpoTHREE.createTextureAsync({
        asset: require("../img/plane.png")
      })
    });
    this.plane = new THREE.Mesh(planeGeometry, planeMaterial);
    this.sphere = new THREE.Mesh(geometry, material);
    this.sphere.rotation.y = Math.PI / 0.286;
    this.sphere.position.z = -1.35;    
    this.plane.position.z = 0;
    this.scene.add(this.sphere);
    this.scene.add(this.plane);

    this.scene.add(new THREE.AmbientLight(0x404040));

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(3, 3, 3);
    this.scene.add(light);
  };

  onRender = delta => {
    this.sphere.rotation.x += round(this.state.x) * delta;     //
    this.sphere.rotation.y += round(this.state.y) * delta;     //
    this.sphere.rotation.z += round(this.state.z) * delta;     //
    this.renderer.render(this.scene, this.camera);
  };
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}
