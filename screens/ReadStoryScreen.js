import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ReadStoryScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
          Read Story
        </Text>
      </View>
    );
  }
}
