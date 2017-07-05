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

  constructor(props) {
    super(props);
    this.state = {
      politics: false,
      sports: false,
      business: false,
      life: false,
      science: false,
      money: false,
      trade: false
    }
  }

  topic_chosen(topic) {
    //here make api call, get topic data, pass it as additional param to navigate method.
    this.props.navigation.navigate('NewsScreen');
  }

  render() {
    const { navigate } = this.props.navigation;
    var topics_array = ["All", "Trending", "Politics", "Sports", "Business", "Life", "Science", "Money", "Trade", "India", "Cricket", "Finance", "Terror"];

    var choose_topics_of_interest = topics_array.map((topic, index) => {
      return (
        <View key = {index} style={{margin: 10}}>
        <Button
          key = {index}
          onPress={this.topic_chosen.bind(this, topic)}
          title= {topic}
          color="#58606d"
        />
        </View>
      );
    });

    return(
      <View style={{flex: 1, alignItems: 'stretch'}}>
        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('./app/assets/images/logo_2.png')} />
        </View>

        <View style={{flex: 3, backgroundColor: 'steelblue'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white', margin: 10}}>CHOOSE A CATEGORY</Text>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'flex-start'}}>
          {choose_topics_of_interest}
        </View>
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
