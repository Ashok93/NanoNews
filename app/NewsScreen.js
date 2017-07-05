import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import { WebView } from 'react-native';

export default class NewsScreen extends React.Component {

  full_article_request(url) {
    this.props.navigation.navigate('FullArticleScreen', {url: url } );
  }

  render() {
    let news_data = [
      {
        news_title: "Fighter jets are flying!!",
        news_primary_image: "https://i.ytimg.com/vi/7Atss7ezeLY/maxresdefault.jpg",
        news_content: "A fighter aircraft is a military aircraft designed primarily for air-to-air combat against other aircraft,[1] as opposed to bombers and attack aircraft, whose main mission is to attack ground targets. The hallmarks of a fighter are its speed, maneuverability, and small size relative to other combat aircraft.",
        article_url: "https://en.wikipedia.org/wiki/Fighter_aircraft"
      },
      {
        news_title: "Modi seems curious..",
        news_primary_image: "http://cdn.narendramodi.in/cmsuploads/0.34592100-1450848819-indian-pm-narendra-modi-russia-remains-our-principal-partner.jpg",
        news_content: "Narendra Damodardas Modi (Gujarati: [ˈnəɾeːnd̪rə d̪aːmoːd̪əɾˈd̪aːs ˈmoːd̪iː] (About this sound listen), born 17 September 1950) is an Indian politician who is the 14th and current Prime Minister of India, in office since May 2014. He was the Chief Minister of Gujarat from 2001 to 2014, and is the Member of Parliament for Varanasi. Modi, a member of the Bharatiya Janata Party (BJP), is a Hindu nationalist and member of the right-wing Rashtriya Swayamsevak Sangh (RSS).",
        article_url: "https://en.wikipedia.org/wiki/Narendra_Modi"
      },
      {
        news_title: "Find this ground..",
        news_primary_image: "http://www.cricketdawn.com/wp-content/uploads/2012/02/Melbourne-Cricket-Ground.jpg",
        news_content: "Sample news. Read it!!!!!!",
        article_url: "https://www.gmail.com/"
      }
    ];

    var news_screens = news_data.map((data, index) => {
        return(
          <View key={index} style={{flex: 1}}>
            <View style={{flex: 4}}>
              <Image
              style={{flex: 1}}
                source={{uri: data.news_primary_image}}
              />
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>{data.news_title}</Text>
            </View>
            <View style={{flex: 5, alignItems: 'center', padding: 10}}>
              <Text style={{fontSize: 18}}>{data.news_content}</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Button key={index}
                ref={index}
                onPress={this.full_article_request.bind(this, data.article_url )}
                title="Read Full Article"
                color="#58606d"
                accessibilityLabel="Let us begin!"
              />
            </View>
          </View>
        );
    });

    return (
      <Swiper showsPagination={false} style={{flex: 1}}>
        { news_screens }
      </Swiper>
    )

  }
}
