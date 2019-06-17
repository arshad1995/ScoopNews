import React, { Component } from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";

import styles from "./ButtonStyle";

let channels = [
  {
    name: "The Times of India",
    channel_id: "the-times-of-india",
    id: 1
  },
  {
    name: "The Hindu",
    channel_id: "the-hindu",
    id: 2
  },
  {
    name: "CNBC",
    channel_id: "cnbc",
    id: 3
  },
  {
    name: "Al Jazeera English",
    channel_id: "al-jazeera-english",
    id: 4
  },
  {
    name: "news24",
    channel_id: "news24",
    id: 5
  },
  {
    name: "CNN",
    channel_id: "cnn",
    id: 6
  }
];

class Button extends Component {
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {channels.map(news => (
          <TouchableOpacity
            onPress={() => this.props.fetchNews(news.channel_id)}
            key={news.id}
          >
            <Text style={styles.buttonContainer}>{news.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

export default Button;
