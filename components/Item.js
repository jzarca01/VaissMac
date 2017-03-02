import React, { Component, PropTypes } from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native-macos'
import { Card, Button } from 'react-native-material-design';

export default class Item extends Component {

  constructor(props) {
      super(props);
    }

  handleClick = () => {
    Linking.canOpenURL(this.props.link).then(supported => {
      if (supported) {
        Linking.openURL(this.props.link);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.link);
      }
    });
  };

  render() {
    return (
      <View>
          <Card>
              <Card.Media
                  image={<Image source={{uri: this.props.url}} />}
                  overlay height={400}
              />
              <Card.Body>
                  <Text style={styles.title}>{this.props.title}</Text>
                  <Text style={{textAlign: 'center', fontFamily: 'Cochin'}}>{this.props.content}</Text>
              </Card.Body>
              <Card.Actions position="right">
                  <Button text="Lire l'article" onPress={this.handleClick} />
              </Card.Actions>
          </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginBottom: 60
  },
  title: {
    flex: 1,
    fontSize: 30,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center'
  }
});