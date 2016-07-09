import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormatTime from 'minutes-seconds-milliseconds';

export default class Laps extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.laps()}
      </View>
    )
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   return this.props.laps.lenght != nextProps.laps.lenght;
  // }

  laps() {
    return this.props.laps.map((time, index) => {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  lapText: {
    fontSize: 30
  }
});
