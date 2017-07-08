import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Image,
  WebView
} from 'react-native';

export default class WebViewComp extends React.Component {
  render() {
      return (
        <WebView
          source={ {uri: this.props.navigation.state.params.url  } }
          style={{marginTop: 20}}
        />
      );
    }
}
