import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormatTime from 'minutes-seconds-milliseconds';

export default class Timer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let timeElapsed = this.props.timeElapsed;
    return(
      <View style={styles.container}>
        <Text style={styles.timer}>
          {FormatTime(timeElapsed)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timer: {
    fontSize: 60,
  },
});
