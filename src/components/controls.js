import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.handleStartPress = this.props.handleStartPress.bind(this);
    this.handleLapPress = this.props.handleLapPress.bind(this);
  }

  render() {
    return (
      <View style={[styles.buttonWrapper]}>
      {this.startStopButton()}
      {this.lapButton()}
      </View>
    )
  }

  startStopButton() {
    let style = this.props.running ? styles.stopButton : styles.startButton
    return (
      <TouchableHighlight
      underlayColor='gray'
      onPress={this.handleStartPress}
      style={[styles.button, style]} >
      <Text>
      {this.props.running ? 'Stop' : 'Start'}
      </Text>
      </TouchableHighlight>
    );
  }

  lapButton() {
    return (
      <TouchableHighlight
      style={styles.button}
      underlayColor='gray'
      onPress={this.handleLapPress}>
        <Text>
          Lap
        </Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00',
  },
  stopButton: {
    borderColor: '#CC0000'
  },
});
