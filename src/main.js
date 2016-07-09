import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Timer from './components/timer';
import Controls from './components/controls';
import Laps from './components/laps';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
    }
    this.handleStartPress = this.handleStartPress.bind(this);
    this.handleLapPress = this.handleLapPress.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Timer timeElapsed={this.state.timeElapsed} />
          <Controls running={this.state.running} handleStartPress={this.handleStartPress} handleLapPress={this.handleLapPress}/>
        </View>
        <View style={styles.footer}>
          <Laps laps={this.state.laps}/>
        </View>
      </View>
    )
  }

  handleStartPress() {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({running: false});
      return;
    }

    this.setState({
      startTime: new Date(),
      laps: [],
    });

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true,
      });
    }, 30);
  }

  handleLapPress() {
    let lap = this.state.timeElapsed;
    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
});
