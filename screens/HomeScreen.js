import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
    View,
} from 'react-native';
import Map from '../components/Map';
import WebViewLeaflet from "react-native-webview-leaflet";

import HotDealsCarousel from '../components/Carousel/HotDealsCarousel';
import Layout from '../constants/Layout'
import Colors from "../constants/Colors";

export default class HomeScreen extends React.Component {
  onMapClicked = ({ payload }) => {
    console.log(`Map Clicked: app received: ${payload.coords}`);
    alert("Map Clicked", `Coordinates = ${payload.coords}`);
  };
   
  onMapMarkerClicked = ({ payload }) => {
    console.log(`Marker Clicked: ${payload.id}`);
    alert("Marker Clicked", `Marker ID = ${payload.id}`);
  };
  
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/header-bg.png')} style={{height: '60%'}}>
                <View style={styles.customHeader}>
                    <Text style={styles.titleHeader}>VOV DEALS</Text>
                </View>
                <HotDealsCarousel></HotDealsCarousel>
            </ImageBackground>
            <View style={styles.contentContainer}>
                <Text style={styles.TextHeader}>Categories</Text>
            </View>
            <Map />
            {/* <WebViewLeaflet
  ref={component => (this.webViewLeaflet = component)}
  // Optional: a callback that will be called when the map is loaded
  // onLoad={this.onLoad}
  onMapClicked={this.onMapClicked}
  // Optional: the component that will receive map events}
  eventReceiver={this} 
 
  // Optional: the center of the displayed map
  centerPosition={{
    latitude: 31.963158,
    longitude: 35.930359}}
 
  // Optional: a list of markers that will be displayed on the map
  // markers={this.state.markers}
 
  // Required: the map layers that will be displayed on the map. See below for a description of the map layers object
  mapLayers={ [
    {
     name: 'OpenStreetMap',
     checked: 'true',
     type: 'TileLayer',
     baseLayer: true,
     url: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
     attribution:
       '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
   },
    {
     name: 'streets',
     type: 'TileLayer',
     baseLayer: true,
     //url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
     url: `https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXNyYWE5NCIsImEiOiJjanh2aWxjOWwwMGJsM2xxcW9vZTN0d3J3In0.KJt8nGrioAa2Thpps6P9PA`,
     attribution:
       '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
   },
   {
     name: 'WMS Tile Layer',
      type: 'WMSTileLayer',
      url: "https://demo.boundlessgeo.com/geoserver/ows",
      layers: 'nasa:bluemarble'
    }
 ]}
 
  // Optional: display a marker to be at a given location
  ownPositionMarker={{
    coords: [
      31.963158,
      35.930359],
    icon: "❤️",
    size: [24, 24],
    animation: {
      name: "pulse",
      duration: ".5",
      delay: 0,
      interationCount: "infinite"
    }
  }}
 
  // Optional (defaults to false): display a button that centers the map on the coordinates of ownPostionMarker. Requires that "ownPositionMarker" prop be set
  centerButton={true}
 
  // Optional (defaults to false): cluster icons that are in the same area
  useMarkerClustering={true}
/> */}
        </View>
      </ScrollView>
    );
  }
  
}

HomeScreen.navigationOptions = {
    header: null,
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // ...StyleSheet.absoluteFillObject,

    },
    customHeader: {
        height: Layout.headerHeight,
        margin: 15,
        paddingTop: 30,
    },
    contentContainer: {
        marginRight: Layout.screenMargin,
        marginLeft: Layout.screenMargin,
        marginTop: -15
    },
    titleHeader: {
        fontFamily: 'poppins-regular',
        fontWeight: "bold",
        fontSize: 24,
        color: Colors.white
    },
    TextHeader: {
        fontFamily: 'poppins-regular',
        fontWeight: "bold",
        fontSize: 19,
    },
});
