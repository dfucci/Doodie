/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
export default class Doodie extends Component {
  render() {
    return (
      <View style={styles.container}>
      <BackgroundImage>
      </BackgroundImage>
      </View>
    );
  }
}

  class BackgroundImage extends Component {
    render(){
      return (
        <Image source={require('./us.png')} style={styles.backgroundImage}>
        <View style={styles.backdropView}>
        <Text style={styles.headline}> TEXT </Text>
        </View>
        </Image>
      )
    }
  }

  class TextImage extends Component{
    render(){
      return(
        <Text style={styles.welcome}> Hello </Text>)
    }
  }


  const styles = StyleSheet.create({
    backgroundImage: {
      width: 550,
      height: 600
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#000000',
      width: 420
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    backdropView: {
      height: 120,
      width: 320,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    headline: {
      fontSize: 20,
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,0)',
      color: 'white'
    }
  });

  AppRegistry.registerComponent('Doodie', () => Doodie);
