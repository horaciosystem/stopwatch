import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import FormatTime from 'minutes-seconds-milliseconds';
import TimerMixin from 'react-timer-mixin';
import reactMixin from 'react-mixin';

class StopWatch extends Component {
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
        <View style={[styles.header]}>
          <View style={[styles.timeWrapper]}>
            <Text style={styles.timer}>
              {FormatTime(this.state.timeElapsed)}
            </Text>
          </View>
          <View style={[styles.buttonWrapper]}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>
        <View style={[styles.footer]}>
          {this.laps()}
        </View>
      </View>
    );
  }

  startStopButton() {
    let style = this.state.running ? styles.stopButton : styles.startButton
    return (
      <TouchableHighlight
        underlayColor='gray'
        onPress={this.handleStartPress}
        style={[styles.button, style]} >
        <Text>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
    );
  }

  lapButton() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor='gray'
        onPress={this.handleLapPress}
        >
        <Text>
          Lap
        </Text>
      </TouchableHighlight>
    )
  }

  laps() {
    return this.state.laps.map((time, index) => {
      return <View style={styles.lap} key={index}>
        <Text style={styles.lapText}>
          Lap #{index + 1}
        </Text>
        <Text style={styles.lapText}>
          {FormatTime(time)}
        </Text>
      </View>
    });
  }

  handleStartPress() {
    if (this.state.running) {
      this.setState({running: false});
      return;
    }

    this.setState({
      startTime: new Date(),
      laps: [],
    });

    this.interval = this.setInterval(() => {
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

reactMixin.onClass(StopWatch, TimerMixin);

export default StopWatch;

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
  timeWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60,
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
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  lapText: {
    fontSize: 30
  }
});
