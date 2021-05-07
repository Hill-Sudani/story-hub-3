import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import { TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../Config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      storyText: '',
    };
  }

  submitStory = () => {
    db.collection('Stories').add({
      Title: this.state.title,
      Author: this.state.author,
      Story: this.state.storyText,
    });
    this.setState({
      title: '',
      author: '',
      storyText: '',
    });
    ToastAndroid.show('Your Story Has Been Submitted', ToastAndroid.SHORT)
  };

  render() {
    return (
      <KeyboardAvoidingView behavior = 'padding' enabled>
        <Header
          backgroundColor={'cyan'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: 'lime', fontSize: 30 },
          }}
        />
        <TextInput
          placeholder="story title"
          onChangeText={(text) => {
            this.setState({
              title: text,
            });
          }}
          value={this.state.title}
          placeholderTextColor="black"
          style={styles.title}
        />

        <TextInput
          placeholder="author"
          onChangeText={(text) => {
            this.setState({
              author: text,
            });
          }}
          value={this.state.author}
          placeholderTextColor="black"
          style={styles.author}
        />

        <TextInput
          placeholder="story text"
          onChangeText={(text) => {
            this.setState({
              storyText: text,
            });
          }}
          value={this.state.storyText}
          placeholderTextColor="black"
          style={styles.storyText}
        />

        <TouchableOpacity
          style={{ justifyContent: 'center', width: 80, height: 40 }}
          onPress={this.submitStory}>
          <Text style={{ textAlign: 'center' }}>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 40,
    margin: 10,
    marginTop: 50,
    padding: 5,
  },
  author: {
    height: 40,
    margin: 10,
    padding: 5,
  },
  storyText: {
    height: 250,
    margin: 10,
    padding: 5,
  },
});
