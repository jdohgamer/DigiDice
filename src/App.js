/*
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, Animated} from 'react-native';
import Draggable from './components/Draggable.js'


class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
      // Initial value for opacity: 0
  }

  componentDidMount() {
  
 




    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 5000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}






export default class App extends Component {
  constructor(props) {
    super(props);
    this.roll = this.roll.bind(this);
    this.state = { 
      result: 0,
      selectedColor: 'white',
      spinValue: new Animated.Value(0)
    };
  }

  

  roll() {

    const rolled = Math.floor(Math.random() * 20) + 1;
    var changed = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    this.setState({ result: rolled, selectedColor: changed});
  }

  changeBackgroundColor() {

    this.setState({
    selectedColor: changed,
    })
  }

  render() {
    return (
      <View  style={[styles.container, { backgroundColor: this.state.selectedColor }]}>
        <FadeInView>
          <Image 
            style={{ height: 200, width: 200}}
            source={require('./assets/d20.png')} 
          />
        </FadeInView>

        <Text style={styles.dice}>{this.state.result}</Text>
        <Button 
          style={styles.button} 
          onPress={this.roll}
          title="Do a Barrel Roll!"
          color="#841584" 
        />

        <Draggable />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dice: {
    fontSize: 150,
    textAlign: 'center',
    margin: 100,
  },
  button: {
    textAlign: 'center',
    marginBottom: 5,
  },
});
