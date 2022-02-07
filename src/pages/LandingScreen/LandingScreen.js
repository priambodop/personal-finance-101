import React, {PureComponent} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

class LandingScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View>
          <Text>HOLA GENTES</Text>
          <View style={styles.topBar}>

          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    height: 500,
    borderWidth: 2,
    borderColor: 'red',
    borderBottomEndRadius: 200,
    borderBottomLeftRadius: 100
  },
});

export default LandingScreen;
