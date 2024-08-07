import React, { Component, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { LatLng, LeafletView } from 'react-native-leaflet-view';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  container: {
    height: windowHeight - 80,
    width: windowWidth,
    backgroundColor: "#000000"
  },
  map: {
    flex: 1,
    backgroundColor: "#000000"
  },
});

//const [center, setCenter] = useState({lat: 39.868551909734244, lng: 32.74208008334351});
//const ZOOM_LEVEL = 9;

export default class App extends Component {
    constructor(props) {
        super(props);
  }

  render() {
    const firstLocation = {lat: 39.868551909734244, lng: 32.74208008334351};
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <LeafletView mapCenterPosition = {firstLocation} zoom = {13} >
          </LeafletView>
        </View>
      </View>
    );
  }
}