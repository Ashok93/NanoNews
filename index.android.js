import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import NewsScreen from './app/NewsScreen';
import WebViewComp from './app/WebViewComp'

class WelcomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex: 1, alignItems: 'stretch'}}>
        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('./app/assets/images/logo_2.png')} />
        </View>

        <View style={{flex: 3, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center'}}>
        <Button
          onPress={() => navigate('NewsScreen')}
          title="Start Reading"
          color="#58606d"
          accessibilityLabel="Let us begin!"
        />
        </View>
      </View>
    );
  }
}

const NestedNewsArticleStack = StackNavigator({
  NewsScreen: {
    screen: NewsScreen,
    navigationOptions: {
      header: null,
    }
  },
  FullArticleScreen: {
    screen: WebViewComp,
    navigationOptions: {
      headerTitleStyle : {
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: 'skyblue'
      }
    }
  }
});

const NanoNews = StackNavigator({
  Home: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    }
   },
  NewsScreen: {
    screen: NestedNewsArticleStack,
    navigationOptions: {
        header: null,
        headerTitleStyle : {
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: 'skyblue'
        }
      }
   },

});

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('NanoNews', () => NanoNews);
